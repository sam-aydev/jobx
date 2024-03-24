import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { subject, name, from, to, body, from1 }: any = await request.json();
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const result = await transport.verify();
    console.log(result);
  } catch (err) {
    console.log(err);
    return;
  }

  const recieveResponse = await transport.sendMail({
    from: from1,
    to: SMTP_EMAIL,
    subject,
    html: body,
  });
  console.log(recieveResponse);
  const sendResponse = await transport.sendMail({
    from: SMTP_EMAIL,
    to,
    subject: `Hi ${name}, Your Message Is Received`,
    html: "Thank you for reaching out to us at JOBEX",
  });

  if (recieveResponse && sendResponse)
    return new NextResponse(JSON.stringify({ sendResponse, recieveResponse }));
}
