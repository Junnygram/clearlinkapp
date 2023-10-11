// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
// import { User } from '@prisma/client';
// import { CldUploadButton } from 'next-cloudinary';
// import {
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalFooter,
//   ModalBody,
//   ModalCloseButton,
//   VStack,
//   Text,
//   Flex,
//   Image,
//   Button,
// } from '@chakra-ui/react';
// import { useToast } from '@chakra-ui/toast';

// import Input from '../inputs/Input';

// interface SettingsModalProps {
//   isOpen?: boolean;
//   onClose: () => void;
//   currentUser: User;
// }

// const SettingsModal: React.FC<SettingsModalProps> = ({
//   isOpen,
//   onClose,
//   currentUser = {},
// }) => {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);
//   const toast = useToast();

//   console.log(currentUser, '&TEST_CURRENT_USER');

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     watch,
//     formState: { errors },
//   } = useForm<FieldValues>({
//     defaultValues: {
//       name: currentUser?.name,
//       image: currentUser?.image,
//     },
//   });

//   const image = watch('image');

//   const handleUpload = (result: any) => {
//     setValue('image', result.info.secure_url, {
//       shouldValidate: true,
//     });
//   };

//   const onSubmit: SubmitHandler<FieldValues> = (data) => {
//     setIsLoading(true);

//     // Replace this with your API endpoint.
//     axios
//       .post('/api/settings', data)
//       .then(() => {
//         router.replace(router.asPath); // Use replace instead of refresh for Next.js
//         onClose();
//       })
//       .catch(() => toast({ title: 'Something went wrong!', status: 'error' }))
//       .finally(() => setIsLoading(false));
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose}>
//       <ModalOverlay />
//       <ModalContent>
//         <ModalHeader>Edit Profile</ModalHeader>
//         <ModalCloseButton />
//         <ModalBody>
//           <VStack spacing={12}>
//             <Text fontWeight="semibold">Profile</Text>
//             <Text fontSize="sm" color="gray.600">
//               Edit your public information.
//             </Text>

//             <VStack spacing={8}>
//               <Input
//                 disabled={isLoading}
//                 label="Name"
//                 id="name"
//                 errors={errors}
//                 required
//                 register={register}
//               />
//               <Flex alignItems="center">
//                 <Text fontWeight="medium" fontSize="sm" color="gray.900">
//                   Photo
//                 </Text>
//                 <Flex alignItems="center" mt={2}>
//                   <Image
//                     width="48"
//                     height="48"
//                     borderRadius="full"
//                     src={
//                       image || currentUser?.image || '/images/placeholder.jpg'
//                     }
//                     alt="Avatar"
//                   />
//                   <CldUploadButton
//                     options={{ maxFiles: 1 }}
//                     onUpload={handleUpload}
//                     uploadPreset="pgc9ehd5"
//                   >
//                     <Button disabled={isLoading} size="sm" variant="outline">
//                       Change
//                     </Button>
//                   </CldUploadButton>
//                 </Flex>
//               </Flex>
//             </VStack>
//           </VStack>
//         </ModalBody>

//         <ModalFooter justifyContent="space-between">
//           <Button disabled={isLoading} variant="outline" onClick={onClose}>
//             Cancel
//           </Button>
//           <Button
//             disabled={isLoading}
//             colorScheme="teal"
//             onClick={handleSubmit(onSubmit)}
//           >
//             Save
//           </Button>
//         </ModalFooter>
//       </ModalContent>
//     </Modal>
//   );
// };

// export default SettingsModal;
