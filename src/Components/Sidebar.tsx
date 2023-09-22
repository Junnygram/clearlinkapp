import { Box, Flex, VStack, IconButton, Stack } from '@chakra-ui/react';
import React from 'react';
import SideMenu from '../utils/SideMenu';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

type Side = {
  setShowSide: any;
  showSide: boolean;
};
function Sidebar({ setShowSide, showSide }: Side) {
  // const { logout } = useContext(UserContext);
  const closeSide = () => {
    setShowSide((prev: any) => !prev);
  };

  const navlinks = [
    // { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Resources', href: '/resources' },
    { label: 'Pricings', href: '/pricings' },
    { label: 'SignUp', href: '/signup' },
  ];

  return (
    <Box>
      <VStack
        bgColor="#FFFFFF"
        bottom="2px"
        h="100%"
        w={{
          base: showSide ? '40%' : '0',
        }}
        right={showSide ? '0%' : '-20%'}
        pos="fixed"
        px={{ base: showSide ? '.2rem' : '0', md: 'none' }}
        pt=".5rem"
        zIndex="1"
        align="flex-start"
        boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        transition="all .2s ease-in"
      >
        <Box display={{ base: 'relative', md: 'none' }} w="full" bg="gray.300">
          <IconButton
            size={'md'}
            icon={showSide ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            // onClick={showSide ? closeSide : o}
            onClick={() => setShowSide((prev: any) => !prev)}
          />
        </Box>
        <VStack align="flex-start" justify="space-between" minH="75vh" w="100%">
          <Flex
            flexDir="column"
            align="start"
            gap="1.5rem"
            mt="2rem"
            // mr={{ base: '-2rem' }}
            w="80%"
            mx="auto"
            justify="center"
          >
            <>
              {navlinks.map((x, i) => (
                <Box key={i}>
                  <SideMenu name={x.label} url={x.href} />
                </Box>
              ))}
            </>
          </Flex>
        </VStack>
      </VStack>
    </Box>
  );
}

export default Sidebar;
