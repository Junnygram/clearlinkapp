'use client';
import useOtherUser from '@/src/hooks/useOtherUser';
import { Avatar, AvatarGroup, Box, ModalOverlay } from '@chakra-ui/react';
import { Conversation, User } from '@prisma/client';
import React, { useMemo, useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  Text,
  DrawerOverlay,
  Flex,
  DrawerHeader,
  HStack,
  Link,
  useDisclosure,
  Collapse,
  VStack,
  Image,
} from '@chakra-ui/react';
import { IoMdClose } from 'react-icons/io';
import { IoClose, IoTrash } from 'react-icons/io5';
// import useActiveList from '@/src/hooks/useActiveList';
import { format } from 'date-fns';
import ConfirmModal from './ConformModal';

interface ProfileDrawerProps {
  data: Conversation & {
    users: User[];
  };
  isOpen: boolean;
  onClose: () => void;
  ModalOpen?: boolean;
  ModalOnClose?: () => void;
}
const ProfileDrawer = ({
  data,
  isOpen,
  onClose,
  ModalOpen,
  ModalOnClose,
}: ProfileDrawerProps) => {
  const otherUser = useOtherUser(data);

  const groupedHeaderAvatar = data.users;

  const joinedDate = useMemo(() => {
    return format(new Date(otherUser.createdAt), 'PP');
  }, [otherUser.createdAt]);

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const fullName = `${otherUser.firstName} ${otherUser.lastName}`;
  const title = useMemo(() => {
    return data.name || fullName;
  }, [data.name, fullName]);

  // const { members } = useActiveList();
  // const isActive = members.indexOf(otherUser?.email!) !== -1;

  const [overlay, setOverlay] = useState(<OverlayOne />);
  const statusText = useMemo(() => {
    if (data.isGroup) {
      return `${data.users.length} members`;
    }

    //   return isActive ? 'Active' : 'Offline';
    // }, [data, isActive]);
    return 'Active';
  }, [data]);

  return (
    <Box w="full">
      <ConfirmModal
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        trapFocus={false}
      >
        <DrawerContent maxW={{ base: '45%', lg: '20%' }}>
          <DrawerHeader px="3">
            <HStack
              align="center"
              justify="space-between"
              paddingY="3"
              boxShadow="sm"
              borderBottom="1px solid"
              borderColor="gray.300"
            >
              <Link href="/conversations">
                <HStack>
                  <Box w="10rem">
                    <Image src="/assets/logo.png" w="full" alt="logo" />
                  </Box>
                </HStack>
              </Link>
              <Box
                onClick={onClose}
                p="1"
                cursor="pointer"
                rounded="md"
                bgColor="black"
                color="white"
              >
                <IoMdClose />
              </Box>
            </HStack>
          </DrawerHeader>
          <DrawerBody w="85%" mx="auto" px="0rem" justifyContent="center">
            <Box>
              <Flex justify="center" align="center" flexDir="column" gap="1rem">
                {' '}
                {/* <Avatar name={otherUser.firstName!} src={otherUser.imageSrc!} /> */}
                <Box>
                  {data.isGroup ? (
                    <AvatarGroup>
                      {groupedHeaderAvatar.map((user, i) => (
                        <Avatar
                          key={i}
                          name={user.firstName!}
                          src={user.imageSrc!}
                        />
                      ))}
                    </AvatarGroup>
                  ) : (
                    <Avatar
                      //name={otherUser.firstName!}
                      src={otherUser.imageSrc!}
                      name={`${otherUser.firstName!} ${otherUser.lastName!}`}
                    />
                  )}
                </Box>
                <Box>{title}</Box>
                <Box>{statusText}</Box>
                <Box
                  onClick={() => {
                    setOverlay(<OverlayOne />);
                    setIsConfirmModalOpen(true);
                  }}
                >
                  {/* <Box> */}
                  <VStack>
                    <IoTrash size={20} />
                    <Text>Delete</Text>
                  </VStack>
                </Box>
                <Box>
                  {!data.isGroup && (
                    <Box>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.500"
                        w="40"
                      >
                        Email
                      </Text>
                      <Text fontSize="sm" color="gray.900">
                        {otherUser.email}
                      </Text>
                    </Box>
                  )}
                </Box>
                {!data.isGroup && (
                  <>
                    <Box>
                      <Text
                        fontSize="sm"
                        fontWeight="medium"
                        color="gray.500"
                        w="40"
                      >
                        Joined
                      </Text>
                      <Text fontSize="sm" color="gray.900">
                        <time dateTime={joinedDate}>{joinedDate}</time>
                      </Text>
                    </Box>
                  </>
                )}
              </Flex>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default ProfileDrawer;
