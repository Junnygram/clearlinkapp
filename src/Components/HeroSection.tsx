import { Box, Flex, Image, Stack, Text, HStack } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <Box
      h="full"
      mt="2rem"
      mb="1rem"
      w={{ base: '93%', md: '95%' }}
      mx="auto"
      px={{ base: '', lg: '10px' }}
    >
      <Flex>
        <Box w="50%">
          {' '}
          <Stack gap={{ base: '10px', md: '20px', lg: '30px' }}>
            <Text
              fontSize={{ base: '14px', md: '28px', lg: '48px' }}
              fontWeight="600"
              textColor="gray.800"
              lineHeight={{ base: '1.2rem', md: '2.2rem', lg: '4rem' }}
              letterSpacing={{ base: '1px', md: '3px' }}
            >
              Uniting the world,
              <br /> one video call at a time
            </Text>

            <Text
              fontSize={{ base: '9px', md: '12px', lg: '24px' }}
              fontWeight="400"
              textColor="gray.500"
              //   lineHeight="2rem"
            >
              Experinece the future of communication with ClearLink Where
              crystal-clear video conferencing meets unparalleled simplicity
            </Text>

            <Flex gap="10px">
              <Box
                borderRadius="20px"
                p={{ base: '6px', md: '10px' }}
                bgColor="#175CD3"
                textColor="white"
                fontSize={{ base: '6px', md: '14px', lg: '18px' }}
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
                  fontSize={{ base: '6px', md: '14px', lg: '18px' }}
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
        </Box>
        <Box w="50%">
          {' '}
          <Box w="full">
            <Image
              src="/assets/heroImage.png"
              alt="heroImage"
              boxSize="100%"
              objectFit="cover"
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeroSection;
