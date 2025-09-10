require("dotenv").config();
const express = require("express");
const basicAuth = require("express-basic-auth");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use(
  "/secret",
  basicAuth({
    users: { [process.env.USERNAME]: process.env.PASSWORD },
    challenge: true,
  })
);

app.get("/secret", (req, res) => {
  res.send(process.env.SECRET_MESSAGE);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
