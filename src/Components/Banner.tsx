import { Box, HStack, Image, VStack, Text } from '@chakra-ui/react';
import React from 'react';

const Banner = () => {
  return (
    <Box p="1rem" w="90%" mx="auto">
      <VStack
        h={{ base: 'auto', md: '2rem' }}
        my="auto"
        gap={{ base: '1rem', md: '1.5rem' }}
      >
        <Box h="60%" my="auto">
          <Text
            textColor="gray.600"
            textAlign="center"
            fontSize={{ base: '8px', md: '14px' }}
          >
            Join 1,500+ companies already video conferencing the ClearLink way{' '}
          </Text>
        </Box>
        <HStack
          mx={{ base: '1rem', md: '2rem' }}
          gap={{ base: '1rem', md: '2rem' }}
        >
          <Box>
            <Image alt="any" src="/assets/Shopify.comsvg.png" />
          </Box>
          <Box>
            <Image alt="any" src="/assets/Coinbasesvg.png" />
          </Box>
          <Box>
            <Image alt="any" src="/assets/Dropboxsvg.png" />
          </Box>
          <Box>
            <Image alt="any" src="/assets/Intercomsvg.png" />
          </Box>
          <Box>
            <Image alt="any" src="/assets/Marvelsvg.png" />
          </Box>
          <Box>
            <Image alt="any" src="/assets/Group.png" />
          </Box>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Banner;
