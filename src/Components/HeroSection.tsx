import { Box, Flex, Image, Stack, Text, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <Box
      h="full"
      my="2rem"
      w="90%"
      mx="auto"
      // data-aos="fade-left"
      // data-aos-delay="400"
    >
      <Flex justify="space-between">
        <Box>
          <Stack gap="20px" py="1.5rem">
            <Text
              fontSize={{ base: '24px', md: '48px', lg: '60px' }}
              fontWeight="600"
              textColor="gray.800"
              lineHeight={{ base: '2rem', md: '3rem', lg: '4rem' }}
              letterSpacing={{ base: '1px', md: '3px' }}
            >
              Uniting the world,
              <br /> one video call at a time
            </Text>
            <Text
              fontSize={{ base: '16px', md: '24px' }}
              fontWeight="400"
              textColor="gray.500"
              //   lineHeight="2rem"
            >
              Experinece the future of communication with ClearLink <br />
              Where crystal-clear video conferencing meets
              <br /> unparalleled simplicity
            </Text>
            <Flex gap="10px">
              <Box
                borderRadius="20px"
                p={{ base: '6px', md: '10px' }}
                bgColor="#175CD3"
                textColor="white"
                fontSize={{ base: '10px', md: '18px' }}
                _hover={{ bgColor: ['blue.800'], textColor: ['gray.400'] }}
              >
                <Link href="/register">
                  {' '}
                  <Text textAlign="center"> Start your free trial </Text>{' '}
                </Link>
              </Box>{' '}
              <Box>
                <HStack
                  h="full"
                  my="auto"
                  rounded="10px"
                  fontSize={{ base: '10px', md: '18px' }}
                  _hover={{ bgColor: ['blue.100'], textColor: ['white'] }}
                  cursor="pointer"
                >
                  <Image src="/assets/robot.png" alt="any" />{' '}
                  <Text textColor="#175CD3" textAlign="center">
                    {' '}
                    Disocver AI assistant{' '}
                  </Text>
                </HStack>
              </Box>
            </Flex>
            <Box w={{ base: '70%', md: '50%' }}>
              <Image src="/assets/Userreviews.png" alt="any" />
            </Box>
          </Stack>
        </Box>{' '}
        <Box w="48%">
          <Image
            src="/assets/heroImage.png"
            alt="heroImage"
            boxSize="100%"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
