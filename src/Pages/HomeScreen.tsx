import { Box } from '@chakra-ui/react';
import React from 'react';
import Banner from '../Components/Banner';
import HeroSection from '../Components/HeroSection';
import ImpressionBanner from '../Components/ImpressionBanner';
import Content from '../Components/Content';
import Footer from '../Components/Footer';
import PriceSection from '../Components/PriceSection';
import Support from '../Components/Support';

const HomeScreen = () => {
  return (
    <Box px={{ lg: '1rem' }}>
      <HeroSection />
      <Banner />
      <ImpressionBanner />
      <Content />
      <Support />
      <PriceSection />
    </Box>
  );
};

export default HomeScreen;
