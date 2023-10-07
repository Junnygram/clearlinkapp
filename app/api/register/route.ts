import { NextResponse } from 'next/server';
import prisma from '../../../lib/prismadb';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  const body = await request.json();

  // const { firstName, lastName, email, password } = body;

  const firstName: string = body.firstName;
  const lastName: string = body.lastName;
  const email: string = body.email;
  const password: string = body.password;
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email: email.toLowerCase(),
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
