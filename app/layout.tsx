'use client';
import type { Metadata } from 'next';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import { Providers } from '@/providers';
import Header from '@/src/Components/Header';
import { Box } from '@chakra-ui/react';
import Sidebar from '@/src/Components/Sidebar';
import Footer from '@/src/Components/Footer';
import { AOSInit } from '@/src/utils/aos';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showSide, setShowSide] = useState<boolean>(false);

  return (
    <html lang="en">
      <AOSInit />
      <body>
        <Providers>
          <Box>
            <Header showSide={showSide} setShowSide={setShowSide} />
            <Sidebar showSide={showSide} setShowSide={setShowSide} />
            <Box>{children}</Box>
          </Box>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
