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
  Stack,
  FormControl,
  FormLabel,
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
    <Stack
      direction="row"
      align="center"
      paddingY={4}
      paddingX={4}
      bg="white"
      borderTopWidth="1px"
      width="100%"
    >
      <Box>
        <CldUploadButton
          options={{ maxFiles: 1 }}
          onUpload={handleUpload}
          uploadPreset="pgc9ehd5"
        >
          <Button size="sm" color="blue.200">
            <HiPhoto size={16} />
          </Button>
        </CldUploadButton>
      </Box>
      <Box>
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
    </Stack>
  );
};

export default Form;
