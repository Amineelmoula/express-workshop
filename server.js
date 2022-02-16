const express = require("express");
const app = express();
app.use(requestTime);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/components/home.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/components/contact.html");
});

app.get("/services", (req, res) => {
  res.sendFile(__dirname + "/components/services.html");
});

var currentdate = new Date();

function requestTime(req, res, next) {
  console.log(req.originalUrl, currentdate.getDay());
  if (
    currentdate.getHours() >= 9 &&
    currentdate.getHours() < 17 &&
    currentdate.getDay() > 0 &&
    currentdate.getDay() < 6
  )
    next();
}

app.listen(5000);
