// import { Flex } from '@chakra-ui/react';
// import Link from 'next/link';

// interface DesktopItemProps {
//   label: string;
//   icon: any;
//   href: string;
//   onClick?: () => void;
//   active?: boolean;
// }

// const DesktopItem: React.FC<DesktopItemProps> = ({
//   label,
//   href,
//   icon: Icon,
//   active,
//   onClick,
// }) => {
//   const handleClick = () => {
//     if (onClick) {
//       return onClick();
//     }
//   };

//   return (
//     <li onClick={handleClick} key={label}>
//       <Flex
//         borderRadius="0.3rem"
//         fontSize="0.875rem"
//         textColor="gray.500"
//         _hover={{
//           textColor: 'black',
//           bgColor: 'gray.100',
//         }}
//         _active={{
//           bgColor: 'gray.100',
//           textColor: 'black',
//         }}
//       >
//         <Link href={href}>
//           <Icon className="h-6 w-6 shrink-0" aria-hidden="true" />
//           <span className="sr-only">{label}</span>
//         </Link>
//       </Flex>
//     </li>
//   );
// };

// export default DesktopItem;

import { Box, Flex, Icon, Link, List, ListItem } from '@chakra-ui/react';
import { useRouter, usePathname } from 'next/navigation';

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  href,
  icon: IconComponent,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const pathname = usePathname();

  return (
    <List>
      <ListItem onClick={handleClick} key={label} marginY=".4rem">
        <Link
          href={href}
          display="flex"
          alignItems="center"
          rounded="md"
          p={3}
          fontSize="sm"
          fontWeight={pathname?.startsWith(href) ? 'bold' : 'normal'}
          color={pathname?.startsWith(href) ? 'black' : 'gray.500'}
          _hover={{
            color: 'black',
            bg: 'gray.100',
          }}
          _active={{ bgColor: 'gray.100', textColor: 'black' }}
        >
          <Icon as={IconComponent} h={6} w={6} aria-hidden="true" />
          <span className="sr-only">{label}</span>
        </Link>
      </ListItem>
    </List>
  );
};

export default DesktopItem;
