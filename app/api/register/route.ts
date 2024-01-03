import { NextResponse } from 'next/server';
import prisma from '../../../lib/prismadb';
import bcrypt from 'bcrypt';
import { getUserByEmail } from '@/lib/data/user';
import { sendVerificationEmail } from '@/lib/mail';
import { generateVerificationToken } from '@/lib/data/token';

export async function POST(request: Request) {
  const body = await request.json();

  const { firstName, lastName, email, password } = body;
  const hashedPassword = await bcrypt.hash(password, 12);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: 'Email already in use!' };
  }
  const user = await prisma.user.create({
    data: {
      firstName,
      lastName,
      email: email.toLowerCase(),
      hashedPassword,
    },
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token);
  return NextResponse.json(user);
  // return { NextResponse.json(user), success: "Confirmation email sent!" }};
}
