import UserSidebar from '@/src/sidebar/UserSidebar';
import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default async function ConversationsLayout({
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
