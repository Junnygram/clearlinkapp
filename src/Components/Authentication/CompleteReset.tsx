// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Flex,
//   Heading,
//   Text,
//   VStack,
//   Image,

// } from '@chakra-ui/react';

// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import YupPassword from 'yup-password';
// import toast from 'react-hot-toast';
// import { useRouter } from 'next/router';
// import { PasswordReset } from '@/src/model/PasswordReset';

// YupPassword(yup);

// const validation = yup.object().shape({
//   newPassword: yup
//     .string()
//     .min(8, 'Password must be at least 8 characters')
//     .required('New password is required'),
// });

// export const CompleteReset = ({ code }: { code: any }) => {
//   const router = useRouter();
//   const [retypePassword, setretypePassword] = useState<boolean>(false);
//   const [confirmpassword, setConfirmPassword] = useState<string>();
//   const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
//   const changeInputType = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const {
//     handleSubmit,
//     register,
//     formState: { errors, isSubmitting },
//   } = useForm<PasswordReset>({
//     resolver: yupResolver(validation),
//     mode: 'all',
//   });

//   };
//   const year = new Date().getFullYear();
//   return (
//     <Flex
//       border="2px hidden red"
//       w="100%"
//       minH="100vh"
//       justify="space-between"
//       align="center"
//       // bgColor="#e0edff"
//     >
//       <Box w="55%" h="100vh" overflow="hidden" pos="relative">
//         <Box w="30%" pos="absolute" top="2rem" left="3rem">
//           <Image src="/assets/studiomart.png" w="full" alt="logo" />
//         </Box
//       </Box>
//       <Flex w="50%" pos="relative" h="100vh" align="center">
//         <Box
//           w="full"
//           bgColor="white"

//           px="4rem"
//           mt=".5rem"
//           py="1rem"

//         >
//           <VStack spacing={0} gap="1.5rem" w="100%" mb="10px">
//             <Heading
//               fontWeight={700}
//               fontSize="30px"

//               color="black"
//               textTransform="capitalize"
//               textAlign="center"
//               mx="auto"
//               w="80%"
//             >
//               Reset Password!
//             </Heading>
//           </VStack>
//           <Box
//             w="100%"
//             h={['100%', '100%', '100%']}
//             // border="2px hidden green"
//             overflow="auto"
//             py="15px"
//             pr="3px"
//           >
//                       {/* <form onSubmit={handleSubmit(onSubmit)}> */}
//                       <form>
//               <VStack gap="1rem">
//                 <PrimaryInput<PasswordReset>
//                   label="New Password"
//                   name="newPassword"
//                   error={errors.newPassword}
//                   register={register}
//                   placeholder="Enter your password"
//                   type={passwordVisible ? 'text' : 'password'}
//                   icon={true}
//                   passwordVisible={passwordVisible}
//                   changeVisibility={changeInputType}
//                 />

//                 {/* <DisabledInput<any>
//                   label="Confirm Password"
//                   type={retypePassword ? 'text' : 'password'}
//                   icon={true}
//                   passwordVisible={retypePassword}
//                   changeVisibility={() => setretypePassword((prev) => !prev)}
//                   placeholder="Enter your new password"
//                   defaultValue={''}
//                   onChange={(e: any) => setConfirmPassword(e.target.value)}
//                 />
//                 <SubmitButton
//                   textContent="Change Password"

//                                   isDisabled={isSubmitting }
//                 />
//               </VStack>
//             </form>

//             <Text
//               fontSize={['14px', '14px']}
//               display={['block', 'block', 'block']}
//               textAlign="center"
//               mt="1rem"
//               color="#3e3e3e"
//               fontWeight="500"
//             >
//                 <Text fontSize="10px">
//                   © {year} ClearLink. All rights reserved.
//                 </Text>
//             </Text>
//           </Box>
//         </Box>
//       </Flex>
//     </Flex>
//   );
//             }
