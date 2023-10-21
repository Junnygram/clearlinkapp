import getConversations from '@/lib/context/getConversations';
import getUsers from '@/lib/context/getUsers';
import ConversationList from '@/src/Components/Conversations/ConversationList';
import UserList from '@/src/Components/UsersComponent/UserList';
import UserSidebar from '@/src/sidebar/UserSidebar';
import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

export default async function ConversationsLayout({
  children,
}: {
  children: ReactNode;
}) {
  const conversations = await getConversations();

  return (
    <Box>
      <UserSidebar>
        <Box h="full">
          <ConversationList initialItems={conversations} />
          {children}
        </Box>
      </UserSidebar>
    </Box>
  );
}
