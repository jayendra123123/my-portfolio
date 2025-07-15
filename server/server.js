// server.js
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3019;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Portfolio backend is running.");
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("All fields are required.");
  }

  // Create transporter with debug options
  const transporter = nodemailer.createTransport(
    {
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    },
    {
      // Enable debug output
      logger: true,
      debug: true,
    }
  );

  // Verify connection configuration
  transporter.verify((error, success) => {
    if (error) {
      console.error("Error verifying transporter:", error);
    } else {
      console.log("Server is ready to send messages");
    }
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact Form: ${name}`,
      text: `
You have a new contact form submission:

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.status(200).send("Email sent successfully.");
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).send("Failed to send email. Check server logs for details.");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
