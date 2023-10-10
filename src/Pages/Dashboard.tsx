'use client';
import TopPage from '@/src/Components/TopPage';
import { Avatar, Box, Button } from '@chakra-ui/react';
import React from 'react';
import { signOut } from 'next-auth/react';
import getCurrentUser from '@/lib/context/getCurrentUser';

// const Dashboard = async () => {
//   const user = await getCurrentUser();
const Dashboard = () => {
  return (
    <Box>
      {/* <Avatar name={`${user?.firstName}`} src="" /> */}
      <Box>
        <TopPage page="yo" details={'Welcome Back '} right={false} />
      </Box>
      <Button onClick={() => signOut()}> Sign Out</Button>
    </Box>
  );
};

export default Dashboard;
