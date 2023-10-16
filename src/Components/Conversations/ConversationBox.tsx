'use client';
import React, { useCallback, useMemo } from 'react';
import { useSession } from 'next-auth/react';
import { Box, Flex, Text, Avatar, AvatarGroup } from '@chakra-ui/react';
import { format } from 'date-fns';
//  import AvatarGroup from '@/app/components/AvatarGroup'; // If you have a custom AvatarGroup component

import { useRouter } from 'next/navigation';
import useOtherUser from '@/src/hooks/useOtherUser';
import { FullConversationType } from '@/src/types';

interface ConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

const ConversationBox = ({ data, selected }: ConversationBoxProps) => {
  const otherUser = useOtherUser(data);
  const session = useSession();
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [data, router]);

  const lastMessage = useMemo(() => {
    const messages = data.messages || [];

    return messages[messages.length - 1];
  }, [data.messages]);

  const userEmail = useMemo(
    () => session.data?.user?.email,
    [session.data?.user?.email]
  );

  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false;
    }

    const seenArray = lastMessage.seen || [];

    if (!userEmail) {
      return false;
    }

    return seenArray.filter((user) => user.email === userEmail).length !== 0;
  }, [userEmail, lastMessage]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return 'Sent an image';
    }

    if (lastMessage?.body) {
      return lastMessage?.body;
    }

    return 'Started a conversation';
  }, [lastMessage]);

  const groupedAvatar = data.users;
  return (
    <Box
      onClick={handleClick}
      w="full"
      position="relative"
      display="flex"
      alignItems="center"
      gap="3"
      p="3"
      _hover={{ bg: 'neutral.100' }}
      rounded="lg"
      transition="background-color 0.3s"
      cursor="pointer"
      bg={selected ? 'neutral.100' : 'white'}
    >
      {data.isGroup ? (
        //  <AvatarGroup users={data.users} />
        <AvatarGroup>
          {groupedAvatar.map((user, i) => (
            <Avatar key={i} name={user.firstName!} src={user.imageSrc!} />
          ))}
        </AvatarGroup>
      ) : (
        <Avatar src={`${otherUser.imageSrc}`} name={`${otherUser.firstName}`} />
      )}
      <Flex flex="1" minW="0" direction="column">
        <div className="focus:outline-none">
          <span className="absolute inset-0" aria-hidden="true" />
          <Flex justify="space-between" align="center" mb="1">
            <Text fontSize="md" fontWeight="medium" color="gray.900">
              {data.name || otherUser.firstName}
            </Text>
            {lastMessage?.createdAt && (
              <Text fontSize="xs" color="gray.400" fontWeight="light">
                {format(new Date(lastMessage.createdAt), 'p')}
              </Text>
            )}
          </Flex>
          <Text
            isTruncated
            fontSize="sm"
            color={hasSeen ? 'gray.500' : 'black'}
            fontWeight={hasSeen ? 'normal' : 'medium'}
          >
            {lastMessageText}
          </Text>
        </div>
      </Flex>
    </Box>
  );
};

export default ConversationBox;
