'use client';

import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { User } from '@prisma/client';
import { CldUploadButton } from 'next-cloudinary';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  Text,
  Flex,
  Image,
  Button,
  Avatar,
  Box,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/toast';
import PrimaryInput from '../utils/PrimaryInput';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: User;
}

interface SettingModel {
  firstName: string | null;
  lastName: string | null;
  image: string | null;
}

const initialSetting: SettingModel = {
  firstName: '',
  lastName: '',
  image: '',
};

const SettingsModal = ({
  isOpen,
  onClose,
  currentUser,
}: SettingsModalProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const [state, setState] = useState(initialSetting);
  console.log(currentUser, '&TEST_CURRENT_USER');

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SettingModel>({
    defaultValues: {
      firstName: currentUser?.firstName,
      lastName: currentUser?.lastName,
      image: currentUser?.imageSrc,
    },
  });

  const image = watch('image');

  const handleUpload = (result: any) => {
    setValue('image', result.info.secure_url, {
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios
      .post('/api/settings', data)
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => toast({ title: 'Something went wrong!', status: 'error' }))
      .finally(() => setIsLoading(false));
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setState({ ...state, [event.target.name]: event.target.value });
  }
  const isAnyFieldEmpty = !state.firstName || !state.lastName || !state.image;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={6}>
            <Text fontWeight="semibold">Profile</Text>
            <Text fontSize="sm" color="gray.600">
              Edit your public information.
            </Text>

            <VStack spacing={8}>
              <PrimaryInput<SettingModel>
                label="last Name"
                type="text"
                placeholder="Enter your first name"
                name="firstName"
                onChange={handleChange}
                error={errors.firstName}
                register={register}
              />
              <PrimaryInput<SettingModel>
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
                name="lastName"
                onChange={handleChange}
                error={errors.lastName}
                register={register}
              />
              <Box w="full">
                <Text fontWeight="medium" fontSize="sm" color="gray.900">
                  Photo
                </Text>
                <Flex alignItems="center" justify="space-between">
                  <Avatar
                    src={`${currentUser?.imageSrc} `}
                    name={`${currentUser?.firstName} ${currentUser?.lastName}`}
                  />
                  <CldUploadButton
                    options={{ maxFiles: 1 }}
                    onUpload={handleUpload}
                    uploadPreset="bqjnebqw"
                  >
                    <Button disabled={isLoading} size="sm" variant="outline">
                      Change
                    </Button>
                  </CldUploadButton>
                </Flex>
              </Box>
            </VStack>
          </VStack>
        </ModalBody>

        <ModalFooter justifyContent="space-between">
          <Button
            disabled={isLoading || isAnyFieldEmpty}
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            disabled={isLoading || isAnyFieldEmpty}
            colorScheme="teal"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default SettingsModal;
