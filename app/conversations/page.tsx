'use client';
import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import EmptyState from '@/src/Components/EmptyState';
import useConversation from '@/src/hooks/useConversation';

const Home = () => {
  const { isOpen } = useConversation();
  return (
    <Box display={isOpen ? 'block' : 'none'}>
      <Box
        display={{ base: 'none', lg: 'block' }}
        pl={{ base: 0, lg: 80 }}
        h="full"
      >
        <EmptyState />
      </Box>
    </Box>
  );
};

export default Home;
