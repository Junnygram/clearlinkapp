'use client';

import React, { useContext, useState, ChangeEvent, FormEvent } from 'react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Checkbox,
  Button,
  Icon,
  Grid,
  HStack,
  Link,
  Image,
  Circle,
  Stack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import toast from 'react-hot-toast';
import { RegisterModel } from '../model/RegisterModel';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import PrimaryInput from '../utils/PrimaryInput';
import SubmitButton from '../utils/Submit';

YupPassword(yup);

interface InitialStateProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialState: InitialStateProps = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const validation = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().password().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

const goBack = () => {
  window.history.back(); // This will navigate back to the previous page
};
const Register = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const changeInputType = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [terms, setTerms] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RegisterModel>({
    resolver: yupResolver(validation),
    mode: 'all',
  });

  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  function onSubmit(event: FormEvent) {
    setLoading(true);
    event.preventDefault();

    axios
      .post('/api/register', state)
      .then(() => {
        toast.success('You have successfully created an account');
        router.refresh();
      })
      .then(() => {
        setTimeout(() => {
          router.push('/login');
        }, 2500);
      })

      .catch((error: any) => {
        throw new Error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const year = new Date().getFullYear();

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
        mb="2rem"
        borderRadius="50%"
        bgColor="gray.200"
        justify="center"
        left="10px"
        top="1rem"
        zIndex="4"
        // mr={{ base: 'unset', md: '20px' }}
        align="center"
      >
        <ChevronLeftIcon
          textColor="#08165e"
          onClick={goBack}
          fontSize="28px"
          fontWeight={600}
          cursor="pointer"
          // onClick={goBack}
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
          <Box
            w="full"
            bgColor="white"
            // borderRadius="30px"
            px="4rem"
            mt=".2rem"
          >
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
                Embark on your journey!
              </Heading>

              <Text
                fontSize={['14px', '16px']}
                display="flex"
                textAlign="center"
                fontWeight="600"
              >
                Already have an account?
                <Link href="/login" textColor="#1E64D5">
                  &nbsp;Sign in here.
                </Link>{' '}
              </Text>
            </VStack>
            <Box w="100%" h="100%" overflow="auto" py="15px" pr="3px">
              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              <form onSubmit={onSubmit}>
                <PrimaryInput<RegisterModel>
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  onChange={handleChange}
                  error={errors.email}
                  register={register}
                />
                <Grid
                  templateColumns={{
                    base: 'repeat(1,1fr)',
                    md: 'repeat(2,1fr)',
                  }}
                  gap="1rem 1rem"
                  py="10px"
                >
                  <PrimaryInput<RegisterModel>
                    label="First Name"
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    onChange={handleChange}
                    error={errors.firstName}
                    register={register}
                  />

                  <PrimaryInput<RegisterModel>
                    label="Last Name"
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    error={errors.lastName}
                    onChange={handleChange}
                    register={register}
                  />
                  <PrimaryInput<RegisterModel>
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
                  <PrimaryInput<RegisterModel>
                    label="Re-enter password"
                    placeholder="Confirm your password"
                    type={passwordVisible ? 'text' : 'password'}
                    icon={true}
                    passwordVisible={passwordVisible}
                    changeVisibility={changeInputType}
                    name="confirmPassword"
                    error={errors.confirmPassword}
                    register={register}
                  />
                </Grid>
                <Flex
                  w="100%"
                  alignItems="flex-end"
                  justifyContent="flex-start"
                  mb="1rem"
                >
                  <Checkbox
                    alignItems="center"
                    borderColor="none"
                    borderRadius="5px"
                    size="md"
                    onChange={(e) => setTerms(e.target.checked)}
                  >
                    I have read, undrestood and accept the{' '}
                    <span
                      style={{
                        color: '#1570FA',
                      }}
                    >
                      Terms and Conditions
                    </span>
                  </Checkbox>
                </Flex>

                <SubmitButton textContent="sign up" isLoading={isSubmitting} />
              </form>

              <Text
                fontSize={['14px', '14px']}
                display="block"
                textAlign="center"
                mt="1rem"
                color="#3e3e3e"
                fontWeight="500"
              >
                &copy; Shield {year}. All Rights Reserved.
              </Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Register;
