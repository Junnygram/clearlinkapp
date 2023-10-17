'use client';
import getConversationById from '@/lib/context/getConversationById';
import getMessages from '@/lib/context/getMessages';
import Body from '@/src/Components/Conversations/Body';
import Form from '@/src/Components/Conversations/Form';
import EmptyState from '@/src/Components/EmptyState';
import { Box, Flex } from '@chakra-ui/react';
import ChatHeader from '@/src/Components/Conversations/ChatHeader';

interface IParams {
  conversationId: string;
}

const ChatId = async ({ params }: { params: IParams }) => {
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <Flex className="lg:pl-80 h-full">
        <Flex h="full" dir="column">
          <EmptyState />
        </Flex>
      </Flex>
    );
  }

  return (
    <Flex pl={{ lg: '80' }} h="full">
      {/* <Flex h="full" dir="column"> */}
      <ChatHeader conversation={conversation} />
      {/* <Body initialMessages={messages} />
        <Form />
      </Flex> */}
    </Flex>
  );
};
