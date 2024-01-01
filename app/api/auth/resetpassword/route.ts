import EmailTemplate from '@/src/Components/email-template';
import getCurrentUserEmail from '@/lib/context/getCurrentUserByEmail';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type UserEmailProps = {
  userEmail: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({ userEmail }: UserEmailProps) {
  const currentUser = await getCurrentUserEmail(userEmail);
  try {
    const data = await resend.emails.send({
      from: 'Acme <Clearlink.dev>',
      to: [`${currentUser?.email}`, 'junnexclusive@gmail.com'],
      subject: 'Congratulations Youve successfully signd up',
      react: EmailTemplate({ firstName: `${currentUser?.firstName}` }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
