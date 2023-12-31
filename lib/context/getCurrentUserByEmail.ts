import prisma from '../prismadb';
import getCurrentUser from './getCurrentUser';

const getCurrentUserEmail = async (userEmail: string) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser?.email) {
      return null;
    }

    const user = await prisma.user.findUnique({
      where: {
        email: currentUser.email,
      },
    });

    return user;
  } catch (error: any) {
    console.log(error, 'SERVER_ERROR');
    return null;
  }
};

export default getCurrentUserEmail;
