import { getServerSession } from 'next-auth';
import { authOptions } from '../../app/api/auth/[...nextauth]/route';
import prisma from '../prismadb';
import toast from 'react-hot-toast';
import { getSession } from './getSession';

const getCurrentUser = async () => {
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
      // createdAt: currentUser.createdAt.toISOString(),
      // updatedAt: currentUser.updatedAt.toISOString(),
    };
  } catch (error: any) {
    return null;
    // throw new Error(error);
  }
};

export default getCurrentUser;
