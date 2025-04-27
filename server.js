const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000; // Better to use 5000

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jayendramalla26@gmail.com', // your email
        pass: 'bibcyjgucjyeeaet',           // your app password
      },
    });

    await transporter.sendMail({
      from: 'jayendramalla26@gmail.com', // YOUR OWN verified email
      replyTo: email,                    // visitor's email
      to: 'jayendramalla26@gmail.com',   // your email again
      subject: `Portfolio Contact Form: ${name}`,
      text: message,
    });

    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).send('Failed to send email');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
