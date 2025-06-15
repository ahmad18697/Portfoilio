const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendContactEmail = async (name, email, message) => {
  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    subject: `New message from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #2563eb;">New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <p style="font-size: 0.9rem; color: #6b7280;">
          Sent via your portfolio contact form
        </p>
      </div>
    `,
    replyTo: email
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendContactEmail };