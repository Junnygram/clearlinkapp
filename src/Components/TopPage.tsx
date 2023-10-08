'use client';
import {
  Box,
  Flex,
  Text,
  Button,
  Circle,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';

import React from 'react';

interface TopPageProps {
  page: string;
  details: string;
  right: boolean;
}

function TopPage({ page, details, right }: TopPageProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      justify="space-between"
      align={{ base: 'start', md: 'center' }}
      w="100%"
      mx="auto"
      py=".7rem"
      px={{ base: '1.5rem', md: '2.5rem' }}
      flexDirection={{ base: 'column', md: 'row' }}
    >
      <Box>
        <Text fontSize="1.5rem" fontWeight="600" mb=".2rem">
          {page}
        </Text>
        <Text>{details}</Text>
      </Box>
      {right && (
        <Button
          bgColor="brand.100"
          color="white"
          p="0 2rem"
          borderRadius="5px"
          onClick={onOpen}
        >
          {/* {device == 'Mobile device' ? '+' : 'Add Services'} */}Add Services
        </Button>
      )}
    </Flex>
  );
}

export default TopPage;
