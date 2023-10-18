'use client';

import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

// import { pusherClient } from "@/app/libs/pusher";

import MessageBox from './MessageBox';

import { find } from 'lodash';
import { Box, Flex } from '@chakra-ui/react';
import { FullMessageType } from '@/src/types';
import useConversation from '@/src/hooks/useConversation';

interface BodyProps {
  initialMessages: FullMessageType[];
}

const Body = ({ initialMessages = [] }: BodyProps) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState(initialMessages);

  const { conversationId } = useConversation();

  // useEffect(() => {
  //   axios.post(`/api/conversations/${conversationId}/seen`);
  // }, [conversationId]);

  // useEffect(() => {
  //   pusherClient.subscribe(conversationId);
  //   bottomRef?.current?.scrollIntoView();

  const messageHandler = (message: FullMessageType) => {
    axios.post(`/api/conversations/${conversationId}/seen`);

    setMessages((current) => {
      if (find(current, { id: message.id })) {
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

  // pusherClient.bind('messages:new', messageHandler)
  // pusherClient.bind('message:update', updateMessageHandler);

  // return () => {
  //   pusherClient.unsubscribe(conversationId)
  //   pusherClient.unbind('messages:new', messageHandler)
  //   pusherClient.unbind('message:update', updateMessageHandler)
  // }
  // }, [conversationId]);

  return (
    <Box display="flex" flex="1" overflowY="auto" h="full" mx="4">
      {/* {messages.map((message, i) => (
        <MessageBox
          isLast={i === messages.length - 1}
          key={message.id}
          data={message}
        />
      ))}
      <Box pt="24" ref={bottomRef} /> */}{' '}
      body
    </Box>
  );
};

export default Body;
