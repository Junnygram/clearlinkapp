// import { NextApiRequest, NextApiResponse } from 'next';
// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { token } = req.query;
//   const { newPassword } = req.body;

//   try {
//     const resetToken = await prisma.passwordResetToken.findUnique({
//       where: { token: token as string },
//     });

//     if (!resetToken || new Date() > resetToken.expiresAt) {
//       return res.status(401).json({ message: 'Invalid or expired token' });
//     }

//     // Update the user's password
//     await prisma.user.update({
//       where: { id: resetToken.userId },
//       data: { password: newPassword },
//     });

//     // Delete the used reset token
//     await prisma.passwordResetToken.delete({
//       where: { token: token as string },
//     });

//     return res.status(200).json({ message: 'Password reset successful' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Internal server error' });
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// // Import nodemailer at the top of your file
// import nodemailer from 'nodemailer';

// // Create a transporter with your SMTP credentials
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'your-email@gmail.com',
//     pass: 'your-email-password',
//   },
// });

// ...

//   // Send the reset email
//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: user.email,
//     subject: 'Password Reset Request',
//     text: `Click the following link to reset your password: ${resetTokenLink}`,
//   };

//   await transporter.sendMail(mailOptions);
