//imports
let express = require("express");
let bodyParser = require("body-parser");
let apiRouter = require("./apiRouter").router;

//Instantiate server
let app = express();

//Body parser configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Configure routes
app.get("/", function (req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send("<h1>Bonjour depuis le server</h1>");
});

app.use("/api/", apiRouter);

//Launch server
app.listen(8080, function () {
  console.log("server listenning");
});
