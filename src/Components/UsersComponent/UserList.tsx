'use client';
import { Box, Text, VStack } from '@chakra-ui/react';
import { User } from '@prisma/client';
import UserBox from './UserBox';

interface UserListProps {
  items: User[];
}

const UserList = ({ items }: UserListProps) => {
  // const UserList = () => {
  return (
    <Box
      position="fixed"
      top={0}
      bottom={20}
      left={{ base: 0, lg: 20 }}
      width={{ base: '100%', lg: 80 }}
      borderRight="1px solid #E2E8F0"
      overflowY="auto"
    >
      <VStack spacing={4} align="start" paddingX={5}>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="gray.700"
          paddingBottom={4}
        >
          People
        </Text>
        {items.map((item) => (
          <UserBox key={item.id} data={item} />
        ))}
      </VStack>
    </Box>
  );
};

export default UserList;
