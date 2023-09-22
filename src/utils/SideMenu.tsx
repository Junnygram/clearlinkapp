import { Box, Flex } from '@chakra-ui/react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type MenuProps = {
  name: string;
  url: string;
  close?: any;
  icon?: any;
};

export const SideMenu = ({ name, url, close, icon }: MenuProps) => {
  const pathname = usePathname();

  return (
    <Link href={url} passHref>
      <Flex
        borderRadius="10px"
        bgColor={pathname?.startsWith(url) ? '#03045E' : 'transparent'}
        textColor={pathname?.startsWith(url) ? 'white' : ''}
        _hover={{ bgColor: ['#175CD3'], textColor: ['white'] }}
        _activeLink={{ bgColor: 'blue' }}
        lineHeight="16px"
        align="center"
        gap="7px"
        justify="center"
        w="7rem"
        mx="auto"
        p="10px"
        //   pathname == url ? 'text-[#d8a642]' : 'text-slate-950'
        // }
      >
        <Box display={{ lg: 'none' }}>{icon}</Box>
        {name}
      </Flex>
      {close}
    </Link>
  );
};

export default SideMenu;
