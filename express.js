const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/view/index.html");
});

app.get("/contact", function(req, res) {
  res.sendFile(__dirname + "/view/contact.html");
});

app.get("/student/:name", function(req, res) {
  res.send("you requested: " + req.params.name);
});
app.listen(3000);
