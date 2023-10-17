'use client';
import React, { useState } from 'react';
import { FullConversationType } from '@/src/types';
import { useRouter } from 'next/navigation';
import useConversation from '@/src/hooks/useConversation';
import { Box, Flex, Text, IconButton } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import ConversationBox from './ConversationBox';
import { MdOutlineGroupAdd } from 'react-icons/md';

interface ConversationListProps {
  initialItems: FullConversationType[];
}

const ConversationList = ({ initialItems }: ConversationListProps) => {
  const [items, setItems] = useState(initialItems);
  const router = useRouter();
  const { conversationId, isOpen } = useConversation();

  return (
    <>
      {/* <GroupChatModal
      users={users}
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    /> */}
      <Box
        position="fixed"
        insetY={0}
        paddingBottom={20}
        display={{ base: isOpen ? 'none' : 'block', lg: 'block' }}
        left={{ base: isOpen ? '0' : 'unset', lg: '20' }}
        pb={{ base: '20', lg: '0' }}
        w={{ base: isOpen ? 'full' : 'unset', lg: '80' }}
        overflowY="auto"
        borderRight="1px solid gray.200"
      >
        <Box px={5}>
          <Flex justifyContent="space-between" mb={4} pt={4} align="center">
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="bold"
              color="neutral.800"
            >
              Messages
            </Text>
            <IconButton
              // onClick={() => setIsModalOpen(true)}
              aria-label="Add group"
              rounded="full"
              ml="10px"
              bg="gray.100"
              color="gray.600"
              cursor="pointer"
              _hover={{ opacity: 0.75, color: 'black' }}
              transition="opacity 0.2s"
              h={6}
              w={6}
              icon={<MdOutlineGroupAdd />}
            />
          </Flex>

          {items.map((item) => (
            <ConversationBox
              key={item.id}
              data={item}
              selected={conversationId === item.id}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ConversationList;
