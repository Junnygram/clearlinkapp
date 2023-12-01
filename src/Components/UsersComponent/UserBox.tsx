import { Box, Text, Avatar } from '@chakra-ui/react';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { User } from '@prisma/client';
import LoadingModal from '@/src/Modals/loadingModal';
// import Avatar from '@/src/sidebar/Avatar';

// import Avatar from "@/app/components/Avatar";
// import LoadingModal from "@/app/components/modals/LoadingModal";

interface UserBoxProps {
  data: User;
}

const UserBox = ({ data }: UserBoxProps) => {
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
      {isLoading && <LoadingModal />}
      <Box
        onClick={handleClick}
        w="full"
        position="relative"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bg="white"
        rounded="lg"
        transition="background-color 0.2s"
        cursor="pointer"
        _hover={{
          color: 'black',
          bg: 'gray.100',
        }}
        _active={{ bgColor: 'gray.200', textColor: 'black' }}
      >
        <Avatar name={`${data.imageSrc}`} src={`${data.imageSrc}`} />
        <Box minW={0} flex="1">
          <Box className="focus:outline-none">
            <Text fontSize="sm" fontWeight="medium" color="gray.900" ml={2}>
              {data.firstName} {data?.lastName}
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default UserBox;
