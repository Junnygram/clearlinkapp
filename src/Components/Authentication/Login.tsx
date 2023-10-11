'use client';
import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
  Checkbox,
  HStack,
  Stack,
} from '@chakra-ui/react';

import * as yup from 'yup';
import YupPassword from 'yup-password';
import toast from 'react-hot-toast';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import PrimaryInput from '@/src/utils/PrimaryInput';
import SubmitButton from '@/src/utils/Submit';
import { LoginModel } from '@/src/model/LoginModel';

YupPassword(yup);

interface InitialStateProps {
  email: string;
  password: string;
}

const initialState: InitialStateProps = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().password().required(),
});
const year = new Date().getFullYear();

const goBack = () => {
  window.history.back(); // This will navigate back to the previous page
};

const LoginPage = () => {
  const router = useRouter();
  const session = useSession();
  const [terms, setTerms] = useState<boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const changeInputType = () => {
    setPasswordVisible(!passwordVisible);
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginModel>({
    resolver: yupResolver(schema),
    mode: 'all',
  });
  useEffect(() => {
    if (session?.status == 'authenticated') {
      router.push('/users');
    }
  }, [router, session?.status]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();

    setLoading(true);

    signIn('credentials', {
      ...state,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.ok) {
          toast.success('Logged In');
          router.push('/users');
          router.refresh();
        }

        if (callback?.error) {
          // throw new Error('Wrong Credentials');
          toast.error('Wrong Credentials');
        }
      })
      .catch((err: any) => {
        // throw new Error(err);
        toast.error('Wrong Credentials');
      })
      .finally(() => {
        setLoading(false);
      });
  }
  const socialAction = (action: string) => {
    setLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Invalid credentials!');
        }

        if (callback?.ok) {
          router.push('/conversations');
        }
      })
      .finally(() => setLoading(false));
  };

  const isAnyFieldEmpty = !state.email || !state.password;

  return (
    <Box>
      <Flex
        _hover={{
          backgroundColor: 'transparent',
          border: '2px solid #1570FA',
        }}
        pos="absolute"
        w="2rem"
        h="2rem"
        borderRadius="50%"
        bgColor="gray.200"
        justify="center"
        left="10px"
        top="1rem"
        zIndex="4"
        align="center"
      >
        <ChevronLeftIcon
          textColor="#08165e"
          fontSize="28px"
          fontWeight={600}
          cursor="pointer"
          onClick={goBack}
        />
      </Flex>

      <Flex
        border="2px hidden red"
        w="100%"
        minH="100vh"
        justify={{ base: 'none', md: 'space-between' }}
        align="center"
        // bgColor="#e0edff"
      >
        <Flex
          w={{ base: '100%', md: '80%', lg: '50%' }}
          pos="relative"
          h="100vh"
          align="center"
          mx="auto"
        >
          <Box w="full" bgColor="white" px="4rem" mt=".2rem">
            <VStack spacing={0} gap="1.5rem" w="100%" mb="10px">
              <Stack>
                <Image
                  // boxSize="50px"
                  objectFit="cover"
                  alt="logo"
                  src="/assets/logo.png"
                />
              </Stack>
              <Heading
                fontWeight={700}
                fontSize="30px"
                // lineHeight={"44px"}
                color="black"
                textTransform="capitalize"
                textAlign="center"
                mx="auto"
                w="80%"
              >
                Glad to have you back!
              </Heading>

              <Text
                fontSize={['14px', '16px']}
                display="flex"
                textAlign="center"
                fontWeight="600"
              >
                Do not have an account?
                <Link href="/register">
                  &nbsp;
                  <span
                    style={{
                      color: '#1570FA',
                    }}
                  >
                    Sign up here.
                  </span>
                </Link>
              </Text>
            </VStack>
            <Box w="100%" h="100%" overflow="auto" py="15px" pr="3px">
              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              <form onSubmit={onSubmit}>
                <VStack gap=".5rem" w="full">
                  <PrimaryInput<LoginModel>
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={handleChange}
                    error={errors.email}
                    register={register}
                  />
                  <PrimaryInput<LoginModel>
                    label="Password"
                    placeholder="Enter your password"
                    type={passwordVisible ? 'text' : 'password'}
                    icon={true}
                    passwordVisible={passwordVisible}
                    changeVisibility={changeInputType}
                    name="password"
                    onChange={handleChange}
                    error={errors.password}
                    register={register}
                  />
                </VStack>
                <Flex
                  w="100%"
                  alignItems="flex-end"
                  justifyContent="flex-start"
                  my="1rem"
                >
                  <Checkbox
                    alignItems="center"
                    borderColor="none"
                    borderRadius="5px"
                    size="md"
                    onChange={() => setTerms(!terms)}
                  >
                    Remember me
                  </Checkbox>
                </Flex>

                <SubmitButton
                  textContent={`${loading ? 'Validating' : 'Sign in'}`}
                  isDisabled={loading || isAnyFieldEmpty}
                />
              </form>

              <Box
                // my="5px"
                mt=".5rem"
                h="1px"
                textAlign="center"
                position="relative"
              >
                {' '}
                <Text pos="relative">or</Text>
              </Box>

              <Flex justifyContent="space-evenly" alignItems="center" my="3rem">
                {' '}
                <Box
                  as="div"
                  rounded="10px"
                  w="5rem"
                  m="5px"
                  px="1.7rem"
                  py="10px"
                  bgColor="gray.200"
                  onClick={() => socialAction('google')}
                  _hover={{ bgColor: 'gray.400' }}
                >
                  {' '}
                  <Image alt="any" src="/assets/homegoogle.png" />
                </Box>{' '}
                <Box
                  rounded="10px"
                  w="5rem"
                  m="5px"
                  px="1.7rem"
                  py="10px"
                  bgColor="gray.200"
                  // onClick={() => signIn('linkedin')}
                  _hover={{ bgColor: 'gray.400' }}
                >
                  {' '}
                  <Image alt="any" src="/assets/homelink.png" />
                </Box>{' '}
                <Box
                  rounded="10px"
                  w="5rem"
                  m="5px"
                  px="1.7rem"
                  py="10px"
                  bgColor="gray.200"
                  _hover={{ bgColor: 'gray.400' }}
                >
                  {' '}
                  <Image alt="any" src="/assets/homeface.png" />
                </Box>{' '}
              </Flex>
            </Box>
            <Text
              fontSize="14px"
              display="block"
              textAlign="center"
              mt="1rem"
              color="#3e3e3e"
              fontWeight="500"
            >
              &copy; Clearlink {year}. All Rights Reserved.
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default LoginPage;
