import {
  Box,
  Stack,
  Flex,
  Text,
  HStack,
  Image,
  VStack,
  Grid,
} from '@chakra-ui/react';
import React from 'react';

const ImpressionBanner = () => {
  return (
    <Box my="2rem" w="90%" mx="auto">
      <Stack textAlign="start">
        <Box pos="relative">
          <Text textColor="#175CD3" fontWeight="600" fontSize="18px">
            The ClearLink Advantage
          </Text>{' '}
          <Text fontWeight="600" fontSize={{ base: '28px', md: '48px' }}>
            Why choose ClearLink?
          </Text>{' '}
          <Text>
            In a world where connection is everything, ClearLink takes the lead.
            Our cutting-edge video conferencing app offers
          </Text>
          <Box
            display={{ base: 'none', lg: 'unset' }}
            pos="absolute"
            top="30px"
            right="170px"
          >
            <Image src="/assets/Handarrow.png" alt="any" boxSize="120px" />
          </Box>
        </Box>
        <Flex justify="space-between" mt="1rem">
          <HStack w="60%">
            <Grid templateColumns="repeat(2, 1fr)" gap={{ base: '2', md: '6' }}>
              <Flex flexDir="column">
                <Box>
                  <Image alt="any" src="assets/camera.png" />{' '}
                </Box>
                <Text fontWeight="600" fontSize={{ base: '12px', md: '22px' }}>
                  Crystal-clear HD video
                </Text>
                <Text fontWeight="400" fontSize={{ base: '10px', md: '18px' }}>
                  No more pixelation or blurriness – just stunning, lifelike
                  clarity that brings your team closer in meetings.
                </Text>
              </Flex>
              <Flex flexDir="column">
                <Box>
                  <Image alt="any" src="assets/voice.png" />{' '}
                </Box>
                <Text fontWeight="600" fontSize={{ base: '12px', md: '22px' }}>
                  Noise-canceling audio
                </Text>
                <Text fontWeight="400" fontSize={{ base: '10px', md: '18px' }}>
                  Say goodbye to distractions with our advanced audio tech for
                  crisp, interruption-free conversations.
                </Text>
              </Flex>
              <Flex flexDir="column">
                <Box>
                  <Image alt="any" src="assets/zap.png" />{' '}
                </Box>
                <Text fontWeight="600" fontSize={{ base: '12px', md: '22px' }}>
                  Scheduling made easy
                </Text>
                <Text fontWeight="400" fontSize={{ base: '10px', md: '18px' }}>
                  Streamline your agenda with ClearLink&apos;s intuitive
                  scheduling. Set up meetings, send invitations, and receive
                  reminders in one place.
                </Text>
              </Flex>
              <Flex flexDir="column">
                <Box>
                  <Image alt="any" src="assets/zapp.png" />{' '}
                </Box>
                <Text fontWeight="600" fontSize={{ base: '12px', md: '22px' }}>
                  Bank-grade security
                </Text>
                <Text fontWeight="400" fontSize={{ base: '10px', md: '18px' }}>
                  Your privacy is our priority with bank-grade security
                  protocols safeguarding your meetings and data from unwanted
                  intruders.
                </Text>
              </Flex>
            </Grid>
          </HStack>{' '}
          <Box w="35%">
            <Image
              alt="any"
              src="/assets/Rectangle.png"
              boxSize="100%"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

export default ImpressionBanner;
