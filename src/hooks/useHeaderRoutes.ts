'use client';
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

const useHeaderRoutes = () => {
  const pathname = usePathname();

  const headerRoutes = useMemo(
    () => [
      {
        key: 1,
        label: 'Products',
        href: '/products',
        active: pathname === '/products',
      },
      {
        key: 2,
        label: 'Solutions',
        href: '/solutions',
        active: pathname === '/solutions',
      },
      {
        key: 3,
        label: 'Resources',
        href: '/resources',
        active: pathname === '/resources',
      },

      {
        key: 4,
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
