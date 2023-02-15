const express = require("express");
const app = express();
const port = 5000;

const sendMail = require("./controllers/sendMail");

app.get("/", (req, res) => res.send("Hello Server!"));

app.get("/mail", sendMail);

app.listen(port, () => console.log(`app listening on port ${port}!`));
