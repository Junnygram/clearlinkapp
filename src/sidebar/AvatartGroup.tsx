// import React from "react";
// import { Avatar, Flex } from "@chakra-ui/react";

// interface AvatarGroupProps {
//   users?: User[];
// }

// const AvatarGroup = ({ users = [] }: AvatarGroupProps) => {
//   const slicedUsers = users.slice(0, 3);

//   const positionMap = {
//     0: "top-0 left-[12px]",
//     1: "bottom-0",
//     2: "bottom-0 right-0",
//   };

//   return (
//     <Flex position="relative" h="11" w="11">
//       {slicedUsers.map((user, index) => (
//         <Avatar
//           key={user.id}
//           size="sm"
//           position="absolute"
//           className={`rounded-full overflow-hidden ${positionMap[index as keyof typeof positionMap]}`}
//           src={user?.image || "/images/placeholder.jpg"}
//           alt="Avatar"
//         />
//       )}
//     </Flex>
//   );
// };

// export default AvatarGroup;
