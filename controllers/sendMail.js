const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  // For test sending mails
  let testAccount = await nodemailer.createTestAccount();

  let transport = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
  res.send("I am sending mail");
};

module.exports = sendMail;
