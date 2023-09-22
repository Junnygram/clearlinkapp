import {
  Box,
  Flex,
  VStack,
  Stack,
  Image,
  Text,
  HStack,
} from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box data-aos="fade-up" data-aos-delay="400">
      <Flex
        w="90%"
        mx="auto"
        fontWeight="600"
        px=".2rem"
        gap={{ base: '.5rem', lg: '2rem' }}
        justify="space-between"
      >
        {' '}
        <VStack align="start">
          <Box>
            <Image
              alt="any"
              src="assets/logo.png"
              objectFit="contain"
              boxSize={{ base: '50px', md: '60px' }}
            />{' '}
          </Box>

          <Text
            fontWeight="400"
            fontSize={{ base: '10px', md: '18px' }}
            mt={{ base: '-.5rem' }}
          >
            ClearLink is your gateway to effortless, high-quality <br /> video
            conferencing. Join us in shaping <br /> the future of communication!
          </Text>
        </VStack>
        <VStack align="start" lineHeight="16px" mt="1rem">
          <Text fontSize={{ base: '10px' }} w="full">
            Product
          </Text>
          <Text fontSize={{ base: '12px' }}>Overview</Text>
          <Text fontSize={{ base: '12px' }}>Features</Text>
          <Text fontSize={{ base: '12px' }}>Solutions</Text>
          <Text fontSize={{ base: '12px' }}>Tutorials</Text>
          <Text fontSize={{ base: '12px' }}>Pricing</Text>
        </VStack>{' '}
        <VStack align="start" lineHeight="16px" mt="1rem" minW="4rem">
          <Text fontSize={{ base: '10px' }}>Company</Text>
          <Text fontSize={{ base: '12px' }}>About us</Text>
          <Text fontSize={{ base: '12px' }}>Careers</Text>
          <Text fontSize={{ base: '12px' }}>Press</Text>
          <Text fontSize={{ base: '12px' }}>News</Text>
          <Text fontSize={{ base: '12px' }}>Contact</Text>
        </VStack>{' '}
        <VStack align="start" lineHeight="16px" mt="1rem" minW="5rem">
          <Text fontSize={{ base: '10px' }}>Resources</Text>
          <Text fontSize={{ base: '12px' }}>Blog</Text>
          <Text fontSize={{ base: '12px' }}>Events</Text>
          <Text fontSize={{ base: '12px' }}>Help centre</Text>
          <Text fontSize={{ base: '12px' }}>Tutorials</Text>
          <Text fontSize={{ base: '12px' }}>Support</Text>
        </VStack>
        {/* <Box display={{ base: 'none', md: 'unset' }}> */}
        <Box>
          {' '}
          <VStack align="start" minW="3rem" mt="1rem">
            <Text fontSize={{ base: '8px' }} w="full" textColor="#175CD3">
              Get the app
            </Text>
            <Box>
              <Image
                alt="any"
                src="assets/app.png"
                objectFit="contain"
                boxSize={{ base: '100%', md: 'auto' }}
              />{' '}
            </Box>
            <Box>
              <Image
                alt="any"
                src="assets/google.png"
                objectFit="contain"
                boxSize={{ base: '100%', md: 'auto' }}
              />{' '}
            </Box>
          </VStack>
        </Box>
      </Flex>
      <Flex
        justify="space-between"
        bg="gray.50"
        py="1rem"
        my="1.5rem"
        px={{ base: '2rem', md: '4rem' }}
      >
        <Box>
          <Text fontSize="10px">© {year} ClearLink. All rights reserved.</Text>
        </Box>
        <Box>
          <HStack>
            <Box>
              {' '}
              <Image
                alt="any"
                src="assets/linked.png"
                objectFit="contain"
                boxSize={{ base: '10px' }}
              />{' '}
            </Box>
            <Box>
              {' '}
              <Image
                alt="any"
                src="assets/insta.png"
                objectFit="contain"
                boxSize={{ base: '10px' }}
              />{' '}
            </Box>
            <Box>
              {' '}
              <Image
                alt="any"
                src="assets/twitter.png"
                objectFit="contain"
                boxSize={{ base: '10px' }}
              />{' '}
            </Box>

            <Box>
              {' '}
              <Image
                alt="any"
                src="assets/face.png"
                objectFit="contain"
                boxSize={{ base: '10px' }}
              />{' '}
            </Box>
            <Box>
              {' '}
              <Image
                alt="any"
                src="assets/git.png"
                objectFit="contain"
                boxSize={{ base: '10px' }}
              />{' '}
            </Box>

            <Box>
              {' '}
              <Image
                alt="any"
                src="assets/youtube.png"
                objectFit="contain"
                boxSize={{ base: '10px' }}
              />{' '}
            </Box>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Footer;
