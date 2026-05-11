import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const EMAIL_TO = process.env.EMAIL_TO || "nocut.ng@gmail.com";
const EMAIL_FROM = process.env.EMAIL_FROM || "no-reply@nocut.ng";
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

function validateEmail(email: unknown) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { message: "SMTP configuration is missing. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS." },
      { status: 500 }
    );
  }

  const body = await request.json().catch(() => null);
  const email = body?.email;

  if (!validateEmail(email)) {
    return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: "New NoCut.NG waitlist signup",
      text: `New waitlist signup: ${email}`,
      html: `<p>New waitlist signup:</p><p><strong>${email}</strong></p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send waitlist email:", error);
    return NextResponse.json(
      { message: "Failed to deliver email. Check SMTP settings." },
      { status: 500 }
    );
  }
}
