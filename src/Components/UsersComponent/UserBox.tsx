import { Box, Text } from '@chakra-ui/react';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@prisma/client';
import Avatar from '@/src/sidebar/Avatar';

// import Avatar from "@/app/components/Avatar";
// import LoadingModal from "@/app/components/modals/LoadingModal";

interface UserBoxProps {
  data: User;
}

const UserBox: React.FC<UserBoxProps> = ({ data }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useCallback(() => {
    setIsLoading(true);

    axios
      .post('/api/conversations', { userId: data.id })
      .then((response) => {
        router.push(`/conversations/${response.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [data, router]);

  return (
    <>
      {/* {isLoading && <LoadingModal />} */}
      <Box
        onClick={handleClick}
        w="full"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bg="white"
        p={3}
        _hover={{ bg: 'neutral.100' }}
        rounded="lg"
        transition="background-color 0.2s"
        cursor="pointer"
      >
        <Avatar user={data} />
        <Box minW={0} flex="1">
          <Box className="focus:outline-none">
            <Text fontSize="sm" fontWeight="medium" color="gray.900">
              {data.firstName}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserBox;
