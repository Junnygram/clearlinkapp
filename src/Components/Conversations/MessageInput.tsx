'use client';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { Box, Input } from '@chakra-ui/react';

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const MessageInput = ({
  placeholder,
  id,
  type,
  required,
  register,
  errors,
}: MessageInputProps) => {
  return (
    <Box pos="relative" w="full">
      <Input
        w="full"
        rounded="full"
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        borderColor={errors[id] ? 'red.500' : 'gray.200'}
      />
    </Box>
  );
};

export default MessageInput;
