'use client';
import { HiPaperAirplane, HiPhoto } from 'react-icons/hi2';
import {
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  UseFormRegisterReturn,
  useForm,
} from 'react-hook-form';
import axios from 'axios';
import { CldUploadButton } from 'next-cloudinary';

import {
  Button,
  Input,
  HStack,
  FormControl,
  FormLabel,
  Flex,
  FormErrorMessage,
  Box,
} from '@chakra-ui/react';
import useConversation from '@/src/hooks/useConversation';
import MessageInput from './MessageInput';

const Form = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue('message', '', { shouldValidate: true });
    axios.post('/api/messages', {
      ...data,
      conversationId: conversationId,
    });
  };

  const handleUpload = (result: any) => {
    axios.post('/api/messages', {
      image: result.info.secure_url,
      conversationId: conversationId,
    });
  };

  return (
    <Flex
      align="center"
      // justify="space-between"
      paddingY={4}
      paddingX={4}
      borderTopWidth="1px"
      gap="2"
    >
      <Box>
        {/* <CldUploadButton
          options={{ maxFiles: 1 }}
          onUpload={handleUpload}
          uploadPreset="pgc9ehd5"
        > */}
        <Button
          size="sm"
          color="white"
          bgColor="blue.200"
          _hover={{ bgColor: 'blue.600' }}
        >
          <HiPhoto size={16} />
        </Button>
        {/* </CldUploadButton> */}
      </Box>
      <Box w="full">
        <form onSubmit={handleSubmit(onSubmit)}>
          <MessageInput
            id="message"
            required
            register={register}
            placeholder="write a message"
            errors={errors}
          />
        </form>
      </Box>
      <Box>
        <Button
          size="sm"
          type="submit"
          bgColor="blue.200"
          _hover={{ bgColor: 'blue.600' }}
        >
          <HiPaperAirplane size={16} color="white" />
        </Button>
      </Box>
    </Flex>
  );
};

export default Form;
