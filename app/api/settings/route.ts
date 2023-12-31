import getCurrentUser from '@/lib/context/getCurrentUser';
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prismadb';

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { firstName, lastName, image } = body;

    if (!currentUser?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        imageSrc: image,
        firstName: firstName,
        lastName: lastName,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error, 'ERROR_MESSAGES');
    return new NextResponse('Error', { status: 500 });
  }
}
