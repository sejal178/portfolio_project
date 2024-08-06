const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sejalvijay0319@gmail.com',
    pass: 'hjsw owiw lebp fryn'
  }
});

app.post('/send', (req, res) => {
  const { email, message } = req.body;
  const mailOptions = {
    from: email,
    to: 'sejalvijay0319@gmail.com',
    subject: `Contact Form Submission from ${email}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
    }
    else{
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
    
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
