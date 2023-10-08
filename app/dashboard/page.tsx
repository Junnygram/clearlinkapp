import myUser from '@/lib/context/getUser';
import { SafeUser } from '@/lib/types';
import TopPage from '@/src/Components/TopPage';
import { Avatar, Box } from '@chakra-ui/react';
import React from 'react';

const page = async () => {
  const currentUser = await myUser();

  return (
    <Box>
      <Avatar name={`${currentUser?.firstName}`} src="" />
      <Box>
        <TopPage
          page={`${currentUser?.firstName}`}
          details={'Welcome Back '}
          right={false}
        />
      </Box>
    </Box>
  );
};

export default page;
