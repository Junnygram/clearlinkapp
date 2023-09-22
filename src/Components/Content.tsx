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
    <Box bgColor="gray.100">
      <Box w="95%" mx="auto" data-aos="fade-up" data-aos-delay="400">
        <Flex
          gap={{ base: '1rem', md: '2rem' }}
          p={{ base: '1rem', md: '2rem' }}
        >
          <Box my="auto" w={{ base: '50%', md: 'unset' }}>
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
                  fontSize={{ base: '18px', md: '40px', lg: '48px' }}
                >
                  ClearLink has upgraded our remote meetings. High-quality
                  video, screen sharing, andtop-notch security make it essential
                  for our team.
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
                    <VStack fontSize="10px" align="start" minW="6rem">
                      <Text fontWeight="500">Sarah Thompson</Text>
                      <Text>Project Manager Open Saucery</Text>
                    </VStack>
                  </Box>
                </Flex>
              </Box>{' '}
              <Box>
                <HStack
                  w="7rem"
                  mx="auto"
                  gap="1rem"
                  textColor="#175CD3"
                  // _hover={{ textColor='gray.200' }}
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

          {/* <Box w={{ base: '125%', md: '150%' }} m="auto"> */}
          <Box w={{ base: '150%', md: '' }}>
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
