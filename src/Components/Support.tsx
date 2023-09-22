'use client';
import {
  Box,
  Flex,
  VStack,
  HStack,
  Text,
  Stack,
  Circle,
  Grid,
} from '@chakra-ui/react';
import React from 'react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const Support = () => {
  return (
    <Box my="2rem" w="95%" mx="auto">
      <Flex justify="space-between" gap={{ base: '.5rem', md: '2rem' }}>
        <Box w="50%" data-aos="fade-left" data-aos-delay="400">
          <VStack align="start">
            <Text fontSize={{ base: '10px' }} textColor="#175CD3">
              Support
            </Text>{' '}
            <Text fontSize={{ base: '20px' }} fontWeight="600">
              FAQs
            </Text>{' '}
            <Text>
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please chat to our friendly
              team.
            </Text>
          </VStack>
        </Box>
        <Box w="50%" data-aos="fade-right" data-aos-delay="400">
          <VStack
            fontSize={{ base: '10px' }}
            align="start"
            lineHeight={{ base: '10px', md: 'unset' }}
          >
            <Stack bgColor="gray.100" p="10px" rounded="10px">
              <HStack justify="space-between">
                {' '}
                <Text fontWeight="600">
                  {' '}
                  How many participants can join a ClearLink video conference?
                </Text>
                <Circle border="1px solid black">
                  <MinusIcon />
                </Circle>
              </HStack>

              <Text>
                ClearLink offers flexible meeting options. Depending on your
                subscription plan, you can host meetings with varying numbers of
                participants. Our plans are designed to accommodate small team
                collaborations and large-scale webinars, ensuring you have the
                right fit for your needs.
              </Text>
            </Stack>
            <HStack
              justify="space-between"
              w="99%"
              borderBottom="1px solid black"
              py="5px"
            >
              <Text px="10px" fontWeight="600">
                Can I use ClearLink on multiple devices?
              </Text>
              <Circle border="1px solid black">
                <AddIcon />
              </Circle>{' '}
            </HStack>{' '}
            <HStack
              justify="space-between"
              w="99%"
              borderBottom="1px solid black"
              py="5px"
            >
              <Text px="10px" fontWeight="600">
                Is ClearLink compatible with other video conferencing platforms?
              </Text>
              <Circle border="1px solid black">
                <AddIcon />
              </Circle>{' '}
            </HStack>
            <HStack
              justify="space-between"
              w="99%"
              borderBottom="1px solid black"
              py="5px"
            >
              <Text px="10px" fontWeight="600">
                How does ClearLink ensure the security of my video conferences?
              </Text>
              <Circle border="1px solid black">
                <AddIcon />
              </Circle>{' '}
            </HStack>
            <HStack
              justify="space-between"
              w="99%"
              borderBottom="1px solid black"
              py="5px"
            >
              <Text px="10px" fontWeight="600">
                Do I need to download any software to use ClearLink?
              </Text>
              <Circle border="1px solid black">
                <AddIcon />
              </Circle>{' '}
            </HStack>
          </VStack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Support;
