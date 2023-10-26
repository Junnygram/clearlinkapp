'use client';
import Footer from '@/src/Components/Footer';
import Header from '@/src/Components/Header';
import Sidebar from '@/src/Components/Sidebar';
import HomeScreen from '@/src/Pages/HomeScreen';
import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';

const ResourcesPage = () => {
  const [showSide, setShowSide] = useState<boolean>(false);

  return (
    <Flex justify={{ base: '', lg: 'center' }}>
      <Box w="full">
        <Sidebar showSide={showSide} setShowSide={setShowSide} />
        <Header showSide={showSide} setShowSide={setShowSide} />
        <Box as="main" minH={'90vh'}>
          <Box px={8}>Resources page</Box>
        </Box>
        <Footer />
      </Box>
    </Flex>
  );
};

export default ResourcesPage;
