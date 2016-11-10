var express = require("express")
var app = express();
var Restaurant = mongoose.model("Restaurant")
var bodyParser = require("body-parser");
var mongoose = require("./db/schema.js");

app.listen(2000, () => {
  console.log("listening on port 2000")
})
app.set("view engine", "hbs");

app.get("/", (req,res) => {
  res.send("done")
})

app.get("/restaurants", (req,res) => {
Restaurant.find({}).then(restaurants => {
  res.render("index", {restaurants})
})
})
