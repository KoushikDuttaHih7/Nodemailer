const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  // For test sending mails
  let testAccount = await nodemailer.createTestAccount();

  // connect with smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "norbert32@ethereal.email",
      pass: "wDmJWDxAYrft7fNPZK",
    },
  });
  res.send("I am sending mail");
};

module.exports = sendMail;
