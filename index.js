var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var seedData = require("./db/seed")
var express = require("express")
var parser = require("body-parser")
var app = express()


var RestaurantSchema = new mongoose.Schema(
  {
    name:String,
    address:{
      street:String,
      zip:Number,
    },
    yelpUrl:String,
    items:[ItemSchema],
  }
)
var ItemSchema = new mongoose.Schema(
  {
    title:String,
  }
)

var Restaurant = mongoose.model("Restaurant", RestaurantSchema)
var Item = mongoose.model("Item", ItemSchema)

app.set("port", process.env.PORT || 3000)

app.use(parser.urlencoded({extended:true}))

app.get("/", function(req, res){
  res.render("app-welcome");
});

Restaurant.remove({}).then(function(){
  Restaurant.collection.insert(seedData).then(function(){
    process.exit
  })
})



app.listen(app.get("port"), function(){
  console.log("Let There Be Light!!!");
});
