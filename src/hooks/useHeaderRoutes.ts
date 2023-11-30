'use client';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

// const navlinks = [
//   // { label: 'Home', href: '/' },
//   { label: 'Products', href: '/products' },
//   { label: 'Solutions', href: '/solutions' },
//   { label: 'Resources', href: '/resources' },
//   { label: 'Pricings', href: '/pricings' },
//   { label: 'SignUp', href: '/register' },
//   { label: 'Login', href: '/login' },
// ];

const useHeaderRoutes = () => {
  const pathname = usePathname();

  const headerRoutes = useMemo(
    () => [
      {
        id: 1,
        label: 'Products',
        href: '/products',
        active: pathname === '/products',
      },
      {
        id: 2,
        label: 'Solutions',
        href: '/solutions',
        active: pathname === '/solutions',
      },
      {
        id: 3,
        label: 'Resources',
        href: '/resources',
        active: pathname === '/resources',
      },

      {
        id: 4,
        label: 'Pricings',
        href: '/pricings',
        active: pathname === '/pricings',
      },
    ],
    [pathname]
  );

  return headerRoutes;
};

export default useHeaderRoutes;
