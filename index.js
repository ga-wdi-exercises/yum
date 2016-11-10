var express = require("express")
var app = express();

app.listen(2000, () => {
  console.log("listening on port 2000")
})
app.set("view engine", "hbs");
var bodyParser = require("body-parser");
var mongoose = require("./db/schema.js");

app.get("/", (req,res) => {
  res.send("done")
})
