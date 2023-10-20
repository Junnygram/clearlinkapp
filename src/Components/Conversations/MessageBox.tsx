import { useState } from 'react';
import { format } from 'date-fns';
import { useSession } from 'next-auth/react';

import ImageModal from './ImageModal';

import {
  Box,
  Flex,
  Text,
  Image,
  Avatar,
  HStack,
  VStack,
  Grid,
} from '@chakra-ui/react';
import { FullMessageType } from '@/src/types';

interface MessageBoxProps {
  data: FullMessageType;
  isLast?: boolean;
}

const MessageBox = ({ data, isLast }: MessageBoxProps) => {
  const session = useSession();
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const isOwn = session.data?.user?.email === data?.sender?.email;
  const seenList = (data.seen || [])
    .filter((user) => user.email !== data?.sender?.email)
    .map((user) => user.firstName)
    .join(', ');

  return (
    <Flex
      justify={isOwn ? 'end ' : 'unset'}
      gap="3"
      p="4"
      alignItems="center"
      w="full"
    >
      <Box order={isOwn ? '2' : 'unset'}>
        <Avatar
          name={data.sender.firstName!}
          src={data.sender.imageSrc!}
          size="sm"
        />
      </Box>

      <Flex flexDir="column" gap="2" align={isOwn ? 'end' : ''} flex={1}>
        <Flex gap="1" justify="center" align="center">
          <Text textColor="gray.500" fontSize="sm">
            {data.sender.firstName}
          </Text>
          <Text textColor="gray.400" fontSize="sm">
            {format(new Date(data.createdAt), 'p')}
          </Text>
        </Flex>
        <Box
          fontSize="sm"
          textColor="white"
          overflow="hidden"
          bgColor={isOwn ? 'blue.100' : ''}
          borderRadius={data.image ? ' ' : '10px'}
          p={data.image ? '0' : '2px 4px'}
          position="relative"
        >
          {/* <ImageModal
            src={data.image}
            isOpen={imageModalOpen}
            onClose={() => setImageModalOpen(false)}
          /> */}
          {data.image ? (
            <Image
              alt="Image"
              height="288px"
              width="288px"
              cursor="pointer"
              onClick={() => setImageModalOpen(true)}
              src={data.image}
              objectFit="cover"
              _hover={{
                transform: 'scale(1.1)',
                transition: 'transform 0.2s',
              }}
            />
          ) : (
            <Text>{data.body}</Text>
          )}
        </Box>
        {isLast && isOwn && seenList.length > 0 && (
          <Text fontSize="xs" fontWeight="300" textColor="gray.500">
            {`Seen by ${seenList}`}
          </Text>
        )}
      </Flex>
    </Flex>
  );
};

export default MessageBox;
