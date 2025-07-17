const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendOTP = async (to, name, otp) => {
  await transporter.sendMail({
    from: `"A3Store E-Commerce" <${process.env.EMAIL_SENDER}>`,
    to,
    subject: "Kode OTP Verivikasi Akun",
    text: `Halo ${name}, kode OTP kamu adalah ${otp}. Berlaku selama 10 menit.`,
  });
};

module.exports = {
  sendOTP,
};
