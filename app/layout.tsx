import { Inter } from 'next/font/google';
import { Providers } from '@/providers';
import { Box } from '@chakra-ui/react';
import { AOSInit } from '@/src/utils/aos';
import ToasterContext from '../lib/ToasterContext';
import Header from '@/src/Components/Header';
import Sidebar from '@/src/Components/Sidebar';
import Footer from '@/src/Components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AOSInit />
      <body>
        <Providers>
          {' '}
          <ToasterContext />
          {children}
        </Providers>
      </body>
    </html>
  );
}
