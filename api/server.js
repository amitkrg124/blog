const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

let contacts = [];

app.post("/api/contact", (req, res) => {
  const { name, mobile, email, message } = req.body;
  const newContact = { name, mobile, email, message };
  contacts.push(newContact);
  res
    .status(201)
    .json({ success: true, message: "Contact added successfully" });
});

app.get("/api/contact", (req, res) => {
  res.json(contacts);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
