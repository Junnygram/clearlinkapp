'use client';
import {
  Box,
  Text,
  IconButton,
  Icon,
  AvatarGroup,
  Avatar,
} from '@chakra-ui/react';
import { HiChevronLeft } from 'react-icons/hi';
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Conversation, User } from '@prisma/client';
import useOtherUser from '@/src/hooks/useOtherUser';
import useActiveList from '@/src/hooks/useActiveList';

interface HeaderProps {
  conversation: Conversation & {
    users: User[];
  };
}

const ChatHeader = ({ conversation }: HeaderProps) => {
  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // const { members } = useActiveList();
  // const isActive = members.indexOf(otherUser?.email!) !== -1;
  // const statusText = useMemo(() => {
  //   if (conversation.isGroup) {
  //     return `${conversation.users.length} members`;
  //   }

  //   return isActive ? 'Active' : 'Offline';
  // }, [conversation, isActive]);

  const groupedHeaderAvatar = conversation.users;
  return (
    <>
      {/* <ProfileDrawer
        data={conversation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      /> */}
      <Box
        bg="white"
        w="full"
        display="flex"
        borderBottom="1px"
        borderBottomColor="gray.200"
        paddingY="3"
        paddingX="4"
        justifyContent="space-between"
        alignItems="center"
        boxShadow="sm"
      >
        <Box display="flex" alignItems="center" gap="3">
          <Link href="/conversations" passHref>
            <Box
              display={{ base: 'block', lg: 'none' }}
              color="sky.500"
              _hover={{ color: 'blue.200' }}
              transition="color 0.2s"
              cursor="pointer"
            >
              <HiChevronLeft size={20} />
            </Box>
          </Link>
          {conversation.isGroup ? (
            <AvatarGroup>
              {groupedHeaderAvatar.map((user, i) => (
                <Avatar key={i} name={user.firstName!} src={user.imageSrc!} />
              ))}
            </AvatarGroup>
          ) : (
            <Avatar
              src={`${otherUser.imageSrc}`}
              name={`${otherUser.firstName}`}
            />
          )}

          <Box display="flex" flexDirection="column">
            <Text>
              {conversation.name || otherUser.firstName} {otherUser?.lastName}
            </Text>
            <Text fontSize="sm" fontWeight="light" color="neutral.500">
              {/* {statusText} */}
            </Text>
          </Box>
        </Box>
        {/* <IconButton
          colorScheme="sky"
          icon={<Icon as={HiEllipsisHorizontal} />}
          onClick={() => setDrawerOpen(true)}
          _hover={{ color: 'blue.200' }}
          transition="color 0.2s"
          aria-label="icon"
          boxSize={6}
        /> */}
        <HiEllipsisHorizontal size={20} />
      </Box>
    </>
  );
};

export default ChatHeader;
