// config.ts
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,

  auth: {
    user: process.env.MAILADDRESS,
    pass: process.env.MAILPASSWORD,
  },
});
const generateRandomCode = () => {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const code = `${generateRandomCode()}`;
const mailOptions = {
  from: process.env.MAILADDRESS,
  to: "chillouthills@gmail.com",
  subject: "Verify your account ",
  text: `Please verify your account with this code: ${code}`,
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    return console.log(error);
  } else {
    console.log(info);
  }
});
