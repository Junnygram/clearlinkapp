'use client';
import myUser from '@/lib/context/getUser';
import TopPage from '@/src/Components/TopPage';
import { Avatar, Box, Button } from '@chakra-ui/react';
import React from 'react';
import { signOut } from 'next-auth/react';

// const Dashboard = async () => {
//   const currentUser = await myUser();
const Dashboard = () => {
  return (
    <Box>
      {/* <Avatar name={`${currentUser?.firstName}`} src="" /> */}
      <Box>
        {/* <TopPage
          page={`${currentUser?.firstName}`}
          details={'Welcome Back '}
          right={false}
        /> */}
      </Box>
      <Button onClick={() => signOut()}> Sign Out</Button>
    </Box>
  );
};

export default Dashboard;
