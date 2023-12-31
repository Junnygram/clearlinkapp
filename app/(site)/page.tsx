'use client';
import Banner from '@/src/Components/Banner';
import Header from '@/src/Components/Header';
import HeroSection from '@/src/Components/HeroSection';
import HomeScreen from '@/src/Pages/HomeScreen';
import { Box, Flex, Grid } from '@chakra-ui/react';
import { useState } from 'react';
import Sidebar from '@/src/Components/Sidebar';
import Footer from '@/src/Components/Footer';
import type { Metadata } from 'next';

export default function Home() {
  const [showSide, setShowSide] = useState<boolean>(false);
  return (
    <Flex justify="center">
      <Flex justify="center">
        <Grid position="relative">
          <Box maxW={{ base: 'full', lg: '1300px' }}>
            <Sidebar showSide={showSide} setShowSide={setShowSide} />
            <Header showSide={showSide} setShowSide={setShowSide} />
            <Box as="main" minH={'90vh'}>
              <HomeScreen />
            </Box>
            <Footer />
          </Box>
        </Grid>
      </Flex>
    </Flex>
  );
}
