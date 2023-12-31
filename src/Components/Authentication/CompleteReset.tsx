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
import { CompleteResetModel } from '@/src/model/completeResetModel';
import DisabledInput from '@/src/utils/DisableInput';

YupPassword(yup);

const validation = yup.object().shape({
  password: yup.string().password().required('Password is required'),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match'),
});

export const CompleteReset = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const year = new Date().getFullYear();
  const [newPassword, setNewPassword] = useState<boolean>(false);
  const [confirmpassword, setConfirmPassword] = useState<string>();
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const changeInputType = () => {
    setPasswordVisible(!passwordVisible);
  };
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<CompleteResetModel>({
    resolver: yupResolver(validation),
    mode: 'all',
  });

  const goBack = () => {
    window.history.back(); // This will navigate back to the previous page
  };

  const onSubmit = () => {};
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack gap="1rem">
              <PrimaryInput<CompleteResetModel>
                label="New Password"
                name="password"
                error={errors.password}
                register={register}
                placeholder="Enter your password"
                type={passwordVisible ? 'text' : 'password'}
                icon={true}
                passwordVisible={passwordVisible}
                changeVisibility={changeInputType}
              />

              <DisabledInput<any>
                label="Confirm Password"
                type={passwordVisible ? 'text' : 'password'}
                icon={true}
                passwordVisible={passwordVisible}
                changeVisibility={() => setPasswordVisible((prev) => !prev)}
                placeholder="Enter your new password"
                defaultValue={''}
                onChange={(e: any) => setConfirmPassword(e.target.value)}
              />
              <SubmitButton
                textContent="Change Password"
                isDisabled={isSubmitting}
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
