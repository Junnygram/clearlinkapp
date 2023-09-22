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
    <Box my="2rem" w="95%" mx="auto">
      <Stack textAlign="start" pt={{ base: '1rem', md: '2rem' }}>
        <Flex>
          {' '}
          <Box w="65%">
            <Stack>
              <Text
                textColor="#175CD3"
                fontWeight="600"
                fontSize={{ base: '6px', md: '14px', lg: '18px' }}
              >
                The ClearLink Advantage
              </Text>{' '}
              <Text
                fontWeight="600"
                fontSize={{ base: '14px', md: '28px', lg: '48px' }}
              >
                Why choose ClearLink?
              </Text>{' '}
              <Text fontSize={{ base: '6px', md: '12px', lg: '24px' }}>
                In a world where connection is everything, ClearLink takes the
                lead. Our cutting-edge video conferencing app offers
              </Text>
            </Stack>{' '}
          </Box>
          <Box w="35%">
            {' '}
            <Box left="50%">
              {' '}
              <Box>
                {' '}
                <Image
                  src="/assets/Handarrow.png"
                  alt="any"
                  boxSize={{ base: '40px', md: '80px' }}
                />{' '}
              </Box>
            </Box>
          </Box>
        </Flex>
        <Flex
          justify="space-between"
          mt="1rem"
          gap={{ base: '1rem', md: '1.5rem' }}
        >
          <HStack w="50%">
            <Grid
              templateColumns="repeat(2, 1fr)"
              gap={{ base: '2', md: '4', lg: '6' }}
            >
              <Flex flexDir="column">
                <Box>
                  <Image
                    alt="any"
                    src="assets/camera.png"
                    boxSize={{ base: '20px', md: '40px' }}
                  />{' '}
                </Box>
                <Text
                  fontWeight="600"
                  fontSize={{ base: '6px', md: '15px', lg: '22px' }}
                >
                  Crystal-clear HD video
                </Text>
                <Text
                  fontWeight="400"
                  fontSize={{ base: '6px', md: '12px', lg: '24px' }}
                >
                  No more pixelation or blurriness – just stunning, lifelike
                  clarity that brings your team closer in meetings.
                </Text>
              </Flex>
              <Flex flexDir="column">
                <Box>
                  <Image
                    alt="any"
                    src="assets/voice.png"
                    boxSize={{ base: '20px', md: '40px' }}
                  />{' '}
                </Box>
                <Text
                  fontWeight="600"
                  fontSize={{ base: '6px', md: '15px', lg: '22px' }}
                >
                  Noise-canceling audio
                </Text>
                <Text
                  fontWeight="400"
                  fontSize={{ base: '6px', md: '12px', lg: '24px' }}
                >
                  Say goodbye to distractions with our advanced audio tech for
                  crisp, interruption-free conversations.
                </Text>
              </Flex>
              <Flex flexDir="column">
                <Box>
                  <Image
                    alt="any"
                    src="assets/zap.png"
                    boxSize={{ base: '20px', md: '40px' }}
                  />{' '}
                </Box>
                <Text
                  fontWeight="600"
                  fontSize={{ base: '6px', md: '15px', lg: '22px' }}
                >
                  Scheduling made easy
                </Text>
                <Text
                  fontWeight="400"
                  fontSize={{ base: '6px', md: '12px', lg: '24px' }}
                >
                  Streamline your agenda with ClearLink&apos;s intuitive
                  scheduling. Set up meetings, send invitations, and receive
                  reminders in one place.
                </Text>
              </Flex>
              <Flex flexDir="column">
                <Box>
                  <Image
                    alt="any"
                    src="assets/zapp.png"
                    boxSize={{ base: '20px', md: '40px' }}
                  />{' '}
                </Box>
                <Text
                  fontWeight="600"
                  fontSize={{ base: '6px', md: '15px', lg: '22px' }}
                >
                  Bank-grade security
                </Text>
                <Text
                  fontWeight="400"
                  fontSize={{ base: '6px', md: '12px', lg: '24px' }}
                >
                  Your privacy is our priority with bank-grade security
                  protocols safeguarding your meetings and data from unwanted
                  intruders.
                </Text>
              </Flex>
            </Grid>
          </HStack>{' '}
          <Box w="50%">
            <Image
              alt="any"
              src="/assets/Rectangle.png"
              boxSize="100%"
              objectFit="contain"
            />
          </Box>
        </Flex>
      </Stack>
    </Box>
  );
};

export default ImpressionBanner;
