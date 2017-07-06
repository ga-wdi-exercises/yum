var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var express = require("express");
var hbs     = require("express-handlebars");
var parser = require("body-parser")

var Restaurant = mongoose.model("Restaurant")

var app     = express();

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended:true}))

app.get("/", function(req, res){
  Restaurant.find({}).then((restaurants)=>{
    res.render("index",{
      restaurant: restaurant
    })
  })
});

app.get("/:name", function(req, res){
  Restaurant.findOne({name:req.params.name}).then((restaurant)=>{
    res.render("show",{
      restaurant:restaurant
    })
  })
});

app.post("/:name/edit", function(req,res) {
  Restaurant.findOneAndUpdate({name:req.params.name},req.body.restaurant,{new:true}).then(()=>{
    res.redirect("/"+ restaurant.name)
    })
})
app.post("/:name/delete", function(req,res) {
  Restaurant.findOneAndRemove({name:req.params.name}).then(()=>{
    res.redirect("/")
    })
})
