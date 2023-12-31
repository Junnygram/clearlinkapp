'use client';
import { Box, Flex } from '@chakra-ui/react';
import useRoutes from '../hooks/useRoutes';
import useConversation from '../hooks/useConversation';
import MobileItem from './MobileItem';

const MobileFooter = () => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) {
    return null;
  }

  return (
    <Flex
      position="fixed"
      justify="space-between"
      w="full"
      bottom="0"
      zIndex="40"
      align="center"
      bg="white"
      borderTop="1px"
      borderTopColor="gray.200"
      display={{ base: 'flex', lg: 'none' }}
    >
      {routes.map((route) => (
        <Box key={route.href}>
          <MobileItem
            href={route.href}
            active={route.active}
            icon={route.icon}
            onClick={route.onClick}
          />
        </Box>
      ))}
    </Flex>
  );
};

export default MobileFooter;
