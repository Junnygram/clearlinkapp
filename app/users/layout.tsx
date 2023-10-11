import getCurrentUser from '@/lib/context/getCurrentUser';
import UserSidebar from '@/src/sidebar/UserSidebar';
import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default async function UsersLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <Box>
      <UserSidebar>
        <Box h="full">{children}</Box>
      </UserSidebar>
    </Box>
  );
}
