'use client';
import {
  Box,
  Flex,
  Icon,
  VStack,
  Avatar,
  Spacer,
  Center,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { useState } from 'react';
import { User } from '@prisma/client';
import DesktopItem from './DesktopItem';
import useRoutes from '../hooks/useRoutes';
import getCurrentUser from '@/lib/context/getCurrentUser';

interface DesktopSidebarProps {
  currentUser: User;
}

const DesktopSidebar = ({ currentUser }: DesktopSidebarProps) => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = useState(false);
  console.log({ currentUser }, 'TEST');

  return (
    <Box display={{ base: 'none', lg: 'unset' }}>
      {/* <SettingsModal
          currentUser={currentUser}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        /> */}
      <Flex
        flexDir="column"
        justify="space-between"
        h="100vh"
        bg="white"
        borderRight="1px"
        borderRightColor="gray.200"
        w="20"
        position={{ lg: 'fixed' }}
        insetY={{ lg: 0 }}
        left={{ lg: 0 }}
        zIndex={{ lg: 40 }}
        overflowY={{ lg: 'auto' }}
        px={{ xl: 6 }}
        pb={{ lg: 4 }}
      >
        <VStack spacing={1} mt={4} align="center">
          {routes.map((item) => (
            <Box key={item.label}>
              <DesktopItem
                href={item.href}
                // label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            </Box>
          ))}
        </VStack>
        <VStack spacing={4} mt={4} align="center">
          <Center
            cursor="pointer"
            _hover={{ opacity: 0.75 }}
            onClick={() => setIsOpen(true)}
          >
            {/* <Avatar
              src={`${currentUser.imageSrc ? currentUser.imageSrc : ''}`}
            /> */}
            <Avatar
              src={`${currentUser?.imageSrc}`}
              name={`${currentUser?.firstName}`}
            />
          </Center>
        </VStack>
      </Flex>
    </Box>
  );
};

export default DesktopSidebar;
