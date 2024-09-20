// config.ts
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: process.env.MAILER_EMAIL,
    pass: process.env.MAILER_PASSKEY,
  },
} as SMTPTransport.Options);

type SendEmailto = {
  sender: Mail.Address;
  receiver: Mail.Address[];
  subject?: string;
  message: string;
};

export const sendEmail = async (dto: SendEmailto) => {
  const { sender, receiver, subject, message } = dto;
  return await transporter.sendMail({
    from: sender,
    to: receiver,
    subject: subject,
    html: message,
    text: message,
  });
};

// const mailOptions = {
//   from: process.env.MAILER_EMAIL,
//   to: MailingOption.receiver,
//   subject: "Test email",
//   text: MailingOption.message,
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     return error;
//   } else {
//     return "Email sent: " + info.response;
//   }
// });

// import type { NextApiRequest, NextApiResponse } from "next";

// import { Resend } from "resend";
// import { EmailTemplate } from "../components/Global_components/EmailTemplate";

// const resend = new Resend(process.env.RESEND_API);

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const { data, error } = await resend.emails.send({
//     from: process.env.MAILER_EMAIL as string,
//     to: ["krisnachhetri07@gmail.com"],
//     subject: "Test Email",
//     react: EmailTemplate({ firstName: "John" }),
//   });

//   if (error) {
//     return res.status(400).json(error);
//   }

//   res.status(200).json(data);
// };
