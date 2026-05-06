import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { subject, body } = await request.json();

    if (!subject || !body) {
      return NextResponse.json({ error: 'Subject and body are required' }, { status: 400 });
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('❌ SMTP_USER or SMTP_PASS is missing in .env.local');
      return NextResponse.json(
        { error: 'Email service is not configured. Please set SMTP_USER and SMTP_PASS in .env.local' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Format body as clean HTML
    const htmlBody = body
      .split('\n')
      .map((line: string) => `<p style="margin:4px 0;font-family:monospace;">${line}</p>`)
      .join('');

    const info = await transporter.sendMail({
      from: `"Silver Wings Defence Website" <${process.env.SMTP_USER}>`,
      to: 'info@silverwingsdefence.com',
      replyTo: process.env.SMTP_USER,
      subject: subject,
      text: body,
      html: `
        <div style="background:#05070a;color:#e1e2e7;padding:32px;font-family:monospace;max-width:640px;border-left:4px solid #afc8f0;">
          <h2 style="color:#afc8f0;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:24px;">
            ${subject}
          </h2>
          <div style="border-top:1px solid #43474e;padding-top:20px;line-height:1.8;">
            ${htmlBody}
          </div>
          <p style="color:#8e9198;font-size:11px;margin-top:32px;border-top:1px solid #43474e;padding-top:12px;">
            This message was sent via the Silver Wings Defence secure contact portal.
          </p>
        </div>
      `,
    });

    console.log('✅ Email sent:', info.messageId);
    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('❌ Error sending email:', message);
    return NextResponse.json({ error: 'Failed to send email', details: message }, { status: 500 });
  }
}
