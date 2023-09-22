'use client';
import { Box, Flex, Image, HStack, Text, IconButton } from '@chakra-ui/react';

import React from 'react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

type Side = {
  setShowSide: any;
  showSide: boolean;
};

const Header = ({ showSide, setShowSide }: Side) => {
  return (
    <Box
      mt={{ base: '', lg: '1rem' }}
      w={{ base: '100%', lg: '95%' }}
      mx="auto"
    >
      <Box
        borderRadius={{ base: '', lg: '40px' }}
        bg="gray.300"
        p={{ base: '.5rem', md: '1rem' }}
      >
        <Flex justify="space-between" align="center">
          <Box>
            <Image src="/assets/logo.png" alt="logo" />
          </Box>
          <Box
            display={{ base: 'none', md: 'flex' }}
            textColor="gray.500"
            fontSize="14px"
          >
            <HStack>
              <Flex align="center">
                <Text>Products</Text> <ChevronDownIcon />
              </Flex>{' '}
              <Flex align="center">
                {' '}
                <Text>Solutions</Text> <ChevronDownIcon />
              </Flex>{' '}
              <Flex align="center">
                {' '}
                <Text>Resources</Text> <ChevronDownIcon />
              </Flex>{' '}
              <Flex align="center">
                {' '}
                <Text>Pricings </Text>
                <ChevronDownIcon />
              </Flex>
            </HStack>
          </Box>
          <Box display={{ base: 'none', md: 'flex' }} fontSize="14px">
            <Flex gap=".5rem">
              <Box
                bgColor="white"
                textColor="gray.700"
                py="5px"
                px="14px"
                rounded="15px"
              >
                <Text textAlign="center">Talk to sales</Text>
              </Box>

              <Box
                py="5px"
                px="14px"
                rounded="15px"
                bgColor="#175CD3"
                textColor="white"
              >
                {' '}
                <Text textAlign="center"> Sign up for free</Text>
              </Box>
            </Flex>
          </Box>
          <Box display={{ base: 'relative', md: 'none' }}>
            <IconButton
              size={'md'}
              icon={showSide ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              // onClick={showSide ? closeSide : o}
              onClick={() => setShowSide((prev: any) => !prev)}
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Header;
