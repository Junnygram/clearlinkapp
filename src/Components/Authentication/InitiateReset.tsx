'use client';
import React, { useEffect, useState, ChangeEvent } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Link,
  Image,
  Button,
  Icon,
  Stack,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import YupPassword from 'yup-password';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { BsCheckCircle } from 'react-icons/bs';
import { InitiateResetModel } from '@/src/model/InitiateResetModel';
import PrimaryInput from '@/src/utils/PrimaryInput';
import SubmitButton from '@/src/utils/Submit';

YupPassword(yup);

const validation = yup.object().shape({
  email: yup.string().email().required(),
});

export const InitiateReset = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const year = new Date().getFullYear();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<InitiateResetModel>({
    resolver: yupResolver(validation),
    mode: 'all',
  });

  const [email, setEmail] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value);
    }
  };

  const isAnyFieldEmpty = !email;

  return (
    <Flex
      border="2px hidden red"
      w="100%"
      minH="100vh"
      justify={{ base: 'none', md: 'space-between' }}
      align="center"
    >
      <Flex
        w={{ base: '100%', md: '80%', lg: '50%' }}
        pos="relative"
        h="100vh"
        align="center"
        mx="auto"
      >
        {success ? (
          <VStack w="90%" h="auto" p="3rem 3rem" boxShadow="none" mx="auto">
            <Icon as={BsCheckCircle} color="green" fontSize="2rem" />
            <Heading>Successful!</Heading>
            <Text textAlign="center">
              Check your mail for further instructions
            </Text>
            <Link
              href="https://gmail.com"
              target="_blank"
              w="full"
              _hover={{
                textDecor: 'none',
              }}
            >
              <Flex w="full">
                <Button
                  w="50%"
                  mx="auto"
                  h="3rem"
                  bgColor="brand.100"
                  color="white"
                >
                  Open Mail
                </Button>
              </Flex>
            </Link>
          </VStack>
        ) : (
          <Box w="full" bgColor="white" px="4rem" mt=".5rem" py="1rem">
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
                color="black"
                textTransform="capitalize"
                textAlign="center"
                mx="auto"
                w="80%"
              >
                Reset Password!
              </Heading>

              <Text
                fontSize={['14px', '16px']}
                display={['block', 'block', 'block']}
                textAlign="center"
                fontWeight="600"
              >
                Own an account?
                <Link href="/login">
                  &nbsp;
                  <span
                    style={{
                      color: '#1570FA',
                    }}
                  >
                    Sign in here.
                  </span>
                </Link>
              </Text>
            </VStack>
            <Box
              w="100%"
              h={['100%', '100%', '100%']}
              overflow="auto"
              py="15px"
              pr="3px"
            >
              <form>
                <VStack mb="1rem" spacing={0} gap="1rem" w="80%" mx="auto">
                  <PrimaryInput<InitiateResetModel>
                    label="Email"
                    name="email"
                    error={errors.email}
                    defaultValue=""
                    register={register}
                    onChange={handleChange}
                  />
                  <SubmitButton
                    textContent="Proceed"
                    isDisabled={isSubmitting || isAnyFieldEmpty}
                  />
                </VStack>
              </form>

              <Text
                fontSize={['14px', '14px']}
                display={['block', 'block', 'block']}
                textAlign="center"
                mt="1rem"
                color="#3e3e3e"
                fontWeight="500"
              >
                <Text fontSize="10px">
                  © {year} ClearLink. All rights reserved.
                </Text>
              </Text>
            </Box>
          </Box>
        )}
      </Flex>
    </Flex>
  );
};
