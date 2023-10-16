import { HiPaperAirplane, HiPhoto } from 'react-icons/hi2';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { CldUploadButton } from 'next-cloudinary';

import {
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import useConversation from '@/src/hooks/useConversation';

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
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onUpload={handleUpload}
        uploadPreset="pgc9ehd5"
      >
        <Button size="sm" color="sky.500">
          <HiPhoto size={6} />
        </Button>
      </CldUploadButton>
      {/* <form onSubmit={handleSubmit(onSubmit)} width="100%" display="flex" align="center" spacing={4}>
        <FormControl isInvalid={errors.message}>
          <FormLabel htmlFor="message">Write a message</FormLabel>
          <Input
            id="message"
            {...register("message", { required: true })}
          />
          <FormErrorMessage>{errors.message && "Message is required"}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          size="sm"
          bgColor="sky.500"
          _hover={{ bgColor: "sky.600" }}
        >
          <HiPaperAirplane size={6} color="white" />
        </Button>
      </form> */}
    </Stack>
  );
};

export default Form;
