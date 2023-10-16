import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import { Input } from '@chakra-ui/react';

interface MessageInputProps {
  placeholder?: string;
  id: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const MessageInput: React.FC<MessageInputProps> = ({
  placeholder,
  id,
  type,
  required,
  register,
  errors,
}) => {
  return (
    <div className="relative w-full">
      <Input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required })}
        placeholder={placeholder}
        borderColor={errors[id] ? 'red.500' : 'gray.200'}
      />
    </div>
  );
};

export default MessageInput;
