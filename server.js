const express = require("express");
const app = express();
var currentdate = new Date();
function requestTime(req, res, next) {
  // console.log(req.originalUrl, currentdate.getDay());
  if (
    currentdate.getHours() >= 9 &&
    currentdate.getHours() < 17 &&
    currentdate.getDay() > 0 &&
    currentdate.getDay() < 6
  )
    next();
  else {
    res.send("<h1>we are closed </h1>");
  }
}
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

app.listen(5000);
