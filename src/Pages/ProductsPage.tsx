'use client';
import { Box, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

const ProductsPage = () => {
  const [showSide, setShowSide] = useState<boolean>(false);
  return (
    <Flex justify={{ base: '', lg: 'center' }}>
      <Box w="full">
        <Sidebar showSide={showSide} setShowSide={setShowSide} />
        <Header showSide={showSide} setShowSide={setShowSide} />
        <Box as="main" minH={'90vh'}>
          <Box px={8}>Products page</Box>
        </Box>
        <Footer />
      </Box>
    </Flex>
  );
};

export default ProductsPage;
