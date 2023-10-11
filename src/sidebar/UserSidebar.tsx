import { Box, Flex, VStack } from '@chakra-ui/react';

import DesktopSidebar from './DesktopSidebar';
import MobileFooter from './MobileFooter';
import getCurrentUser from '@/lib/context/getCurrentUser';

async function UserSidebar({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  return (
    <Flex h="full">
      <DesktopSidebar currentUser={currentUser!} />
      {/* <DesktopSidebar currentUser={currentUser!} /> */}
      <MobileFooter />
      <Box pl={{ base: 0, lg: 20 }} h="full" w="full">
        <VStack spacing={0} align="stretch" h="full">
          {children}
        </VStack>
      </Box>
    </Flex>
  );
}

export default UserSidebar;
