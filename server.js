const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jayendramalla26@gmail.com', 
        pass: 'bibcyjgucjyeeaet',           
      },
    });

    await transporter.sendMail({
      from: 'jayendramalla26@gmail.com', 
      replyTo: email,                    
      to: 'jayendramalla26@gmail.com',  
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
