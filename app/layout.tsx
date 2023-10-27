import { Inter } from 'next/font/google';
import { Providers } from '@/providers';
import { AOSInit } from '@/src/utils/aos';
import ToasterContext from '../lib/ToasterContext';
import AuthContext from '@/lib/context/AuthContext';
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
        <AuthContext>
          <Providers>
            {' '}
            <ToasterContext />
            {children}
          </Providers>
        </AuthContext>
      </body>
    </html>
  );
}
