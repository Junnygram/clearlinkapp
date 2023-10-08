import { Box, Button } from '@chakra-ui/react';
import React from 'react';

type Props = {
  textContent: string;
  // isLoading: any;
  // isValid?: boolean;
  disabled?: boolean;
  h?: string;
  isDisabled: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SubmitButton = ({
  textContent,
  onClick,
  isDisabled,
  h = '3rem',
}: Props) => {
  return (
    <>
      <Box w="100%" h={h}>
        <Button
          type="submit"
          w="100%"
          h="100%"
          fontWeight={500}
          fontSize="14px"
          bg="#1570FA"
          textTransform="capitalize"
          color="white"
          transition="0.5s linear"
          cursor="pointer"
          // isLoading={isLoading}
          isDisabled={isDisabled}
          onClick={onClick}
          borderRadius="5px"
          _hover={{
            backgroundColor: 'transparent',
            color: '#53b0fb',
            border: '2px solid #1570FA',
          }}
          _focus={{
            outline: 'none',
          }}
        >
          {textContent}
        </Button>
      </Box>
    </>
  );
};

export default SubmitButton;
