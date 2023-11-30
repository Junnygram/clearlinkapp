'use client';
import {
  Box,
  Flex,
  HStack,
  Image,
  VStack,
  Text,
  Avatar,
  Grid,
  Stack,
  Spacer,
  Circle,
} from '@chakra-ui/react';
import React from 'react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';

const Content = () => {
  return (
    <Box bgColor="gray.100" my={{ base: '1rem', md: '2rem' }}>
      <Box w="95%" mx="auto" data-aos="fade-up" data-aos-delay="400">
        <Flex gap={{ base: '1rem', md: '2rem' }} p={{ base: '', md: '.5rem' }}>
          <Box w={{ base: '50%', md: '' }}>
            <VStack>
              {' '}
              <Flex flexDir="column">
                <Box>
                  <Image
                    alt="any"
                    src="assets/Shopify.comsvg.png"
                    objectFit="contain"
                    boxSize="40px"
                  />{' '}
                </Box>
                <Box>
                  <Image
                    alt="any"
                    src="assets/Stars.png"
                    objectFit="contain"
                    boxSize="40px"
                  />{' '}
                </Box>
                <Text
                  fontWeight="600"
                  fontSize={{ base: '14px', md: '28px', lg: '38px' }}
                >
                  ClearLink has upgraded our remote meetings. High-quality
                  video, screen sharing, and top-notch security make it
                  essential for our team.
                </Text>
              </Flex>
            </VStack>
            <HStack justify="space-between" my="1rem">
              <Box w="70%">
                <Flex align="flex-start" gap="10px">
                  <Box my="auto">
                    {' '}
                    <Avatar src="/assets/Avatar.png" />{' '}
                  </Box>
                  <Box>
                    <VStack
                      fontSize={{ base: '8px', md: '18px' }}
                      align="start"
                      minW="6rem"
                      ml={{ base: '-5px', md: 'unset' }}
                      my={{ base: '10px', md: '16px' }}
                      lineHeight={{ base: '8px', md: '12px', lg: '16px' }}
                    >
                      <Text fontWeight="500">Sarah Thompson</Text>
                      <Text>Project Manager</Text>
                    </VStack>
                  </Box>
                </Flex>
              </Box>{' '}
              <Box>
                <HStack
                  w="7rem"
                  mx="auto"
                  gap={{ base: '', md: '1rem' }}
                  textColor="#175CD3"
                >
                  {' '}
                  <Circle
                    bgColor="white"
                    p="5px"
                    border="1px solid #d1e9ff"
                    _hover={{ bgColor: 'blue.500' }}
                  >
                    <ArrowBackIcon />
                  </Circle>
                  <Circle
                    bgColor="white"
                    p="5px"
                    border="1px solid #d1e9ff"
                    _hover={{ bgColor: 'blue.500' }}
                  >
                    <ArrowForwardIcon />
                  </Circle>
                </HStack>
              </Box>
            </HStack>
          </Box>
          <Box w={{ base: '50%', md: '' }}>
            <Image
              alt="any"
              src="/assets/Contents.png"
              boxSize="100%"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Content;
