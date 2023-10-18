import { Box, Flex, Icon, Link } from '@chakra-ui/react';
import { usePathname, useRouter } from 'next/navigation';

interface MobileItemProps {
  href: string;
  icon: any;
  active?: boolean;
  onClick?: () => void;
}

const MobileItem = ({
  href,
  icon: IconComponent,

  onClick,
}: MobileItemProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const pathname = usePathname();

  return (
    <Link
      onClick={handleClick}
      href={href}
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
      fontSize="sm"
      fontWeight={pathname?.startsWith(href) ? 'bold' : 'normal'}
      color={pathname?.startsWith(href) ? 'black' : 'gray.500'}
      _hover={{
        color: 'black',
        bg: 'gray.100',
      }}
    >
      <Icon as={IconComponent} h={6} w={6} />
    </Link>
  );
};

export default MobileItem;
