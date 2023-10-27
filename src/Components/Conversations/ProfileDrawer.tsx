'use client';
import useOtherUser from '@/src/hooks/useOtherUser';
import { Box } from '@chakra-ui/react';
import { Conversation, User } from '@prisma/client';
import React from 'react';
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
import { BsBorderWidth } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

interface ProfileDrawerProps {
  data: Conversation & {
    users: User[];
  };
  isOpen: boolean;
  onClose: () => void;
}
const ProfileDrawer = ({ data, isOpen, onClose }: ProfileDrawerProps) => {
  const otherUser = useOtherUser(data);
  // const { isOpen, onClose } = useDisclosure();

  return (
    <Box w="full">
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        trapFocus={false}
      >
        <DrawerContent maxW={{ base: '60%', lg: '20%' }}>
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
          <DrawerBody w="full" px="0rem">
            drawerbody
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default ProfileDrawer;
