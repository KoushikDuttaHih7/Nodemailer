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

  let info = await transporter.sendMail({
    from: '"Koushik" <norbert32@ethereal.email>', // sender address
    to: "iamkoushik1999@gmail.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world", // plain text body
    html: "<b>Hello world</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  res.json(info);
};

module.exports = sendMail;
