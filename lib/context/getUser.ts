import { getServerSession } from 'next-auth';
import { authOptions } from '../../app/api/auth/[...nextauth]/route';
import prisma from '../prismadb';
import toast from 'react-hot-toast';

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function myUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
    };
  } catch (error: any) {
    toast.error('Please ensure you have a good network ');
    // throw new Error(error);
  }
}
