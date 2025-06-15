const nodemailer = require('nodemailer');

const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  console.log('Received contact form:', { name, email, message });

  // Create reusable transporter object
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Email content
  const mailOptions = {
    from: `"Contact Form" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `New message from ${name}`,
    text: `You have received a new message:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2 style="color: #2563eb;">New Contact Form Submission</h2>
        <p><strong style="color: #4b5563;">Name:</strong> ${name}</p>
        <p><strong style="color: #4b5563;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong style="color: #4b5563;">Message:</strong></p>
        <div style="background-color: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">
          ${message.replace(/\n/g, '<br>')}
        </div>
        <p style="margin-top: 1rem; font-size: 0.875rem; color: #6b7280;">
          Sent from your website contact form
        </p>
      </div>
    `
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to:', process.env.EMAIL_TO);
    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message',
      error: error.message 
    });
  }
};

module.exports = { submitContactForm };