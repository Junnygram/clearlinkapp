import myUser from '@/lib/context/getCurrentUser';
import TopPage from '@/src/Components/TopPage';
import Dashboard from '@/src/Pages/Dashboard';
import { Avatar, Box } from '@chakra-ui/react';
import React from 'react';

const page = () => {
  return (
    <Box>
      <Dashboard />
    </Box>
  );
};

export default page;
