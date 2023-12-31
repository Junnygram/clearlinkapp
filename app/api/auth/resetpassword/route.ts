import EmailTemplate from '@/src/Components/email-template';
import getCurrentUserEmail from '@/lib/context/getCurrentUserByEmail';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  const currentUser = await getCurrentUserEmail();
  try {
    const data = await resend.emails.send({
      from: 'Acme <Clearlink.dev>',
      to: [`${currentUser?.email}`],
      subject: 'Congratulations Youve successfully signd up',
      react: EmailTemplate({ firstName: `${currentUser?.firstName}` }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
