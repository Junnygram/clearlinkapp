import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import EmptyState from '@/src/Components/EmptyState';

const users = () => {
  return (
    <Box
      display={{ base: 'none', lg: 'block' }}
      pl={{ base: 0, lg: 80 }}
      h="full"
    >
      <EmptyState />
    </Box>
  );
};

export default users;
