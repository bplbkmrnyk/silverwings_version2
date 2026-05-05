import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { subject, body } = await request.json();

    if (!subject || !body) {
      return NextResponse.json({ error: 'Subject and body are required' }, { status: 400 });
    }

    // Since we don't have the real SMTP credentials, we will log a warning if they are missing
    // In order for this to actually send an email, the user needs to provide SMTP credentials in .env.local
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("⚠️ SMTP credentials are not configured in environment variables.");
      console.warn("⚠️ The email will be simulated in the console output.");
      console.log("--------------------------------------------------");
      console.log(`TO: info@silverwingsdefence.com`);
      console.log(`SUBJECT: ${subject}`);
      console.log(`BODY:\n${body}`);
      console.log("--------------------------------------------------");
      
      return NextResponse.json({ success: true, message: 'Simulated email sent' }, { status: 200 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com', // Replace with your SMTP host
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Silver Wings Web System" <${process.env.SMTP_USER}>`,
      to: 'info@silverwingsdefence.com',
      subject: subject,
      text: body,
    });

    console.log('Message sent: %s', info.messageId);
    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
  }
}
