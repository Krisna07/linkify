// config.ts
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,

  auth: {
    user: "noreplylinkify@gmail.com",
    pass: "yintmaegtlmufskl",
  },
});

export default transporter;
