'use client';

import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import MessageBox from './MessageBox';
import { find } from 'lodash';
import { Box, Flex } from '@chakra-ui/react';
import { FullMessageType } from '@/src/types';
import useConversation from '@/src/hooks/useConversation';
import { useRouter } from 'next/navigation';
import { pusherClient } from '@/lib/pusher';

interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body = ({ initialMessages = [] }: BodyProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [messages, setMessages] = useState(initialMessages);

  const { conversationId } = useConversation();

  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  useEffect(() => {
    pusherClient.subscribe(conversationId);
    bottomRef?.current?.scrollIntoView();

    const messageHandler = (message: FullMessageType) => {
      axios.post(`/api/conversations/${conversationId}/seen`);

      setMessages((current) => {
        if (find(current, { id: message.id })) {
          router.refresh();
          return current;
        }

        return [...current, message];
      });

      bottomRef?.current?.scrollIntoView();
    };

    const updateMessageHandler = (newMessage: FullMessageType) => {
      setMessages((current) =>
        current.map((currentMessage) => {
          if (currentMessage.id === newMessage.id) {
            return newMessage;
          }

          return currentMessage;
        })
      );
    };

    pusherClient.bind('messages:new', messageHandler);
    pusherClient.bind('message:update', updateMessageHandler);

    return () => {
      pusherClient.unsubscribe(conversationId);
      pusherClient.unbind('messages:new', messageHandler);
      pusherClient.unbind('message:update', updateMessageHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversationId]);

  return (
    <Flex h="full" overflowY="auto" mx="4" flexDir="column">
      {messages.map((message, i) => (
        <MessageBox
          isLast={i === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}
      <Box pt="24" ref={bottomRef} />
    </Flex>
  );
};

export default Body;
