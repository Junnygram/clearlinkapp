import getUsers from '@/lib/context/getUsers';
import UserList from '@/src/Components/UsersComponent/UserList';
import UserSidebar from '@/src/sidebar/UserSidebar';
import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default async function UsersLayout({
  children,
}: {
  children: ReactNode;
}) {
  const users = await getUsers();

  return (
    <Box>
      <UserSidebar>
        <Box h="full">
          <UserList items={users!} />
          {children}
        </Box>
      </UserSidebar>
    </Box>
  );
}
