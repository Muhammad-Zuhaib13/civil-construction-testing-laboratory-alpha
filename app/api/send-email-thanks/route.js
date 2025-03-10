import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path";

export async function POST(req) {
  try {
    const { firstName, lastName, phoneNumber, email, yourMessage } =
      await req.json();

    if (!email || !firstName || !lastName || !phoneNumber || !yourMessage) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD, // Use App Password if using Gmail
      },
    });

    // Get absolute path to image
    const imagePath = path.join(
      process.cwd(),
      "public/assets/icons/Logo-CCTL.png"
    );
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email, // Send email to the person who submitted the form
      subject: "Thanks for Your Submission",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #FB6542; text-align: center; font-size: 24px; text-shadow: 1px 1px 5px rgba(0,0,0,0.1);">Thanks for Your Submission</h2>
          <hr style="margin: 20px 0; border: 1px solid #ddd;">
    
          <p style="font-size: 18px; text-align: center;">Dear <strong>${firstName} ${lastName}</strong>,</p>
          <p style="font-size: 16px; text-align: center;">Thank you for reaching out! We have received your details and will get back to you shortly.</p>
    
          <hr style="margin: 20px 0; border: 1px solid #ddd;">
    
          <div style="display:grid; gap:12px">
            <p style="font-size: 16px; color: #555;">For any urgent queries, feel free to contact us:</p>
            <div style="display:grid; gap:20px">
              <p style="font-size: 16px; margin: 0;">📞 <strong>Mobile:</strong> 0312-9047134</p>
              <p style="font-size: 16px; margin: 0;">💬 <strong>WhatsApp:</strong> 0347-9008870</p>
              <p style="font-size: 16px; margin: 0;">📧 <strong>Email:</strong>cctl1472@gmail.com | g.abbasskd@gmail.com</p>
               <p style="font-size: 16px; margin: 0;">
              🌐 <strong>Website:</strong> 
              <a href="https://civil-construction-testing-laboratory-alpha-j1vk.vercel.app/" style="color: #007bff; text-decoration: none;">
                Civil Construction Testing Laboratory
              </a>
            </p>
            </div>
          </div>
          <div style="text-align: left; margin-top: 20px;">
            <img src="cid:logo" style="width: 80px; height: 75px; border-radius: 50%; box-shadow: 2px 2px 10px rgba(0,0,0,0.1);" alt="Company Logo">
          </div>
          <p style="text-align: center; font-size: 14px; color: #777; margin-top: 20px;">We appreciate your interest. Have a great day! 😊</p>
        </div>
      `,
      attachments: [
        {
          filename: "logo.png",
          path: imagePath,
          cid: "logo",
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully", info },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
