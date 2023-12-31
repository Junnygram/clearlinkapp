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
import { ChevronLeftIcon } from '@chakra-ui/icons';

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

  const goBack = () => {
    window.history.back(); // This will navigate back to the previous page
  };
  const isAnyFieldEmpty = !email;

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
        w={{ base: '100%', md: '80%', lg: '50%' }}
        pos="relative"
        h="100vh"
        align="center"
        mx="auto"
      >
        <Box w="full" bgColor="white" px="4rem" mt=".5rem" py="1rem">
          <VStack spacing={0} gap="1.5rem" w="100%" mb="10px">
            <Image
              // boxSize="50px"
              objectFit="cover"
              alt="logo"
              src="/assets/logo.png"
            />

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
            textAlign="center"
            mt="1rem"
            color="#3e3e3e"
            fontWeight="500"
            fontSize="10px"
          >
            © {year} ClearLink. All rights reserved.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
