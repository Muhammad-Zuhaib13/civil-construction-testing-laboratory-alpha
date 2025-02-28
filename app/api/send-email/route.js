import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { firstName, lastName, phoneNumber, email, yourMessage } = await req.json();

    if (!email || !firstName || !lastName || !phoneNumber || !yourMessage) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Use App Password if using Gmail
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "muhammadzohaib578@gmail.com, mehdiraza1232016@gmail.com", 
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      text: `Name: ${firstName} ${lastName}\nPhone: ${phoneNumber}\nEmail: ${email}\nMessage: ${yourMessage}`,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully', info }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send email', details: error.message }, { status: 500 });
  }
}
