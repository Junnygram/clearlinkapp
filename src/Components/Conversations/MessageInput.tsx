'use client';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { Box, FormControl, Input } from '@chakra-ui/react';

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
    <>
      <FormControl w="100%">
        <Input
          width="100%"
          rounded="full"
          id={id}
          type={type}
          autoComplete={id}
          {...register(id, { required })}
          placeholder={placeholder}
          borderColor={errors[id] ? 'red.500' : 'gray.200'}
        />
      </FormControl>
    </>
  );
};

export default MessageInput;
