import myUser from '@/lib/context/getUser';
import { SafeUser } from '@/lib/types';
import { Box } from '@chakra-ui/react';
import React from 'react';

const currentUser = await myUser();

// interface UserMenuProps {
//   myUser: SafeUser | null;
// }

const page = () => {
  return (
    <Box>
      {/* {myUser && (
        // <div className="w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer" onClick={() => setUserMenuOpen(prev => !prev)}>
        <div className="w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer">
          <span>{currentUser.firstName.toUpperCase()} </span>
          <span>{currentUser.lastName.toUpperCase()}</span>
        </div>
        
      )} */}
      Welcome Bbck {currentUser?.firstName}
    </Box>
  );
};

export default page;
