'use client';
import {
  Box,
  Flex,
  Text,
  Image,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react';
import React from 'react';

const PriceSection = () => {
  return (
    <Box my="2rem">
      <Flex gap={{ base: '1rem', md: '2rem' }}>
        <Box
          ml={{ base: '1rem', lg: '2rem' }}
          w="50%"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <Text
            pt="1rem"
            fontWeight="600"
            fontSize={{ base: '14px', md: '40px', lg: '38px' }}
            lineHeight={{ base: '15px', md: '36px', lg: '58px' }}
          >
            Ready to clear the path to perfect communication?
          </Text>
          <Box pl="10px" my={{ base: '.5rem', md: '1.2rem' }}>
            <Box>
              {' '}
              <HStack
                align="start"
                fontSize={{ base: '12px', md: '18px' }}
                ml={{ base: '-10px', md: 'unset' }}
              >
                <Image
                  src="/assets/checking.png"
                  alt="any"
                  boxSize="20px"
                  objectFit="contain"
                />
                <Text>30 days free trial</Text>
              </HStack>
            </Box>
            <Box>
              {' '}
              <HStack
                align="start"
                fontSize={{ base: '12px', md: '18px' }}
                ml={{ base: '-10px', md: 'unset' }}
              >
                <Image
                  src="/assets/checking.png"
                  alt="any"
                  boxSize="20px"
                  objectFit="contain"
                />
                <Text>Cancel at any time</Text>
              </HStack>
            </Box>
            <Box>
              {' '}
              <HStack
                align="start"
                fontSize={{ base: '12px', md: '18px' }}
                ml={{ base: '-10px', md: 'unset' }}
              >
                <Image
                  src="/assets/checking.png"
                  alt="any"
                  boxSize="20px"
                  objectFit="contain"
                />
                <Text>Accees to all the features</Text>
              </HStack>
            </Box>

            <Flex
              justify={{ base: '', md: '' }}
              gap="10px"
              w={{ base: 'full', md: '60%', lg: '50%' }}
              fontSize={{ base: '8px', md: '16px' }}
              mt={{ base: '0.5rem', md: '1rem' }}
            >
              <Box
                rounded="10px"
                bgColor="gray.200"
                _hover={{ bgColor: ['#175CD3'], textColor: ['white'] }}
                cursor="pointer"
              >
                {' '}
                <Text p={{ base: '5px', md: '8px' }} align="center">
                  Talk to sales
                </Text>
              </Box>
              <Box
                rounded="10px"
                bgColor="#175CD3"
                textColor="white"
                _hover={{ bgColor: ['gray.200'], textColor: ['black'] }}
                cursor="pointer"
              >
                {' '}
                <Text p={{ base: '5px', md: '8px' }} align="center">
                  Start free trial
                </Text>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box w="50%" data-aos="fade-down" data-aos-delay="400" mr="1rem">
          {' '}
          <Image
            src="/assets/price.png"
            alt="heroImage"
            boxSize="100%"
            objectFit="cover"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default PriceSection;
