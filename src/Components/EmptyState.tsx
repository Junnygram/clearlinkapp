import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';

const EmptyState = () => {
  return (
    // <HStack w="full">
    <Box h="100vh" w="full">
      <Flex
        textAlign="center"
        px={{ base: '1rem', lg: '2rem' }}
        py={{ base: '2.5rem', lg: '1.5rem' }}
        justify="center "
        align="center"
        bgColor="gray.100"
        h="full"
      >
        <Text
          mt={2}
          fontSize="2xl"
          fontWeight="semibold"
          textColor="gray.900"
          flexDir="column"
        >
          {' '}
          Select a chat or start a new conversation
        </Text>
      </Flex>
    </Box>
    // </HStack>
  );
};

export default EmptyState;
