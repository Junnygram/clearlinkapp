import { Box, Image, Badge } from '@chakra-ui/react';
import { User } from '@prisma/client';
// import useActiveList from "../hooks/useActiveList";

interface AvatarProps {
  user?: User;
}

const Avatar = ({ user }: AvatarProps) => {
  //   const { members } = useActiveList();
  //   const isActive = members.includes(user?.email || "");

  return (
    <Box position="relative" display="inline-block">
      <Box
        position="relative"
        borderRadius="full"
        overflow="hidden"
        h="9"
        w="9"
        // md={{ h: "11", w: "11" }}
      >
        <Image
          objectFit="cover"
          src={user?.imageSrc || '/assets/placeholder.jpg'}
          alt="Avatar"
        />
      </Box>
      {/* {isActive ? (
        <Badge
          position="absolute"
          borderRadius="full"
          bg="green.500"
          borderWidth="2px"
          borderColor="white"
          top="0"
          right="0"
          h="2"
          w="2"
        //   md={{ h: "3", w: "3" }}
        />
      ) : null} */}
    </Box>
  );
};

export default Avatar;
