//imports
var express = require("express");

//Instantiate server
var app = express();

//Configure routes
app.get("/", function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("<h1>Bonjour depuis le server</h1>");
});

//Launch server
app.listen(8080, function () {
  console.log("server listenning");
});
