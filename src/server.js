const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const nconf = require("nconf");

nconf.env().argv();

dotenv.config();
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server running on: http://localhost:${port}`);
