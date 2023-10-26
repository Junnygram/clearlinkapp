import { Box, Flex, Icon, Link, List, ListItem } from '@chakra-ui/react';
import { useRouter, usePathname } from 'next/navigation';

interface DesktopItemProps {
  label?: string;
  icon: any;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

const DesktopItem = ({
  label,
  href,
  icon: IconComponent,
  onClick,
}: DesktopItemProps) => {
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
        >
          <Icon as={IconComponent} h={6} w={6} aria-hidden="true" />
          <span className="sr-only">{label}</span>
        </Link>
      </ListItem>
    </List>
  );
};

export default DesktopItem;
