'use client ';
import * as React from 'react';
import prisma from '../../lib/prismadb';
import getCurrentUser from '@/lib/context/getCurrentUser';

interface EmailTemplateProps {
  firstName: string;
}

const EmailTemplate = async ({}: EmailTemplateProps) => {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <h1>Welcome, {currentUser?.firstName}!</h1>
    </div>
  );
};
export default EmailTemplate;
