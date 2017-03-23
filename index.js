const express  = require("express");
const parser   = require("body-parser");
const hbs      = require("express-handlebars");
const mongoose = require("./db/connection");
// var Schema = require("./db/schema.js");

const app = express();

var Restaurant = mongoose.model("Restaurant")
var MenuItem = mongoose.model("MenuItem")

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}))

app.get("/", function(req,res){
  res.render("welcome");
});


// app.get("/", function(req,res) {
//   Restaurant.find({}).then( (restaurants) => {
//     res.render()
//   })
// })
app.listen(app.get("port"), function() {
  console.log("It's Aliiivee!!")
})
