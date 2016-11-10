var express = require("express");
var hbs     = require("express-handlebars");
var mongoose = require("./db/connection");
var parser = require ("body-parser")
var app     = express();
var Schema = require("./db/schema.js");

var Restaurant=Schema.Restaurant
var Menu=Schema.Menu

String.prototype.toObjectId = function() {
  var ObjectId = (require('mongoose').Types.ObjectId);
  return new ObjectId(this.toString());
};

// Every String can be casted in ObjectId now
console.log('545f489dea12346454ae793b'.toObjectId());

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}))


app.get("/", function(req, res){
  console.log("Root Dir")
  Restaurant.find({}).then(restaurants => {
    console.log(restaurants.length)
    for (i=0;i<restaurants.length;i++) {
      console.log(restaurants[i].name)
    }
    res.render("restaurant-index",{restaurants});
  })
});

app.post("/restaurant",function (req,res){
  console.log("Post after form submitted")
  console.log(req.body)
  Restaurant.create(req.body.restaurant , function (err,restaurant){
    if (err){
      console.log(err)
    }
    else {
      console.log("Success")
      res.redirect('/');
    }
  })
})


app.post("/restaurant/update",function (req,res){
  console.log("Post after form submitted")
  console.log("name:",req.body.restaurant.name)
  console.log("address:",req.body.restaurant.street.address)
  console.log("zip:",req.body.restaurant.street.zipcode)
  // res.json(req.body);


  // This method takes two arguments: (1) the old instance and (2) what we want to update it with.

  Restaurant.findOneAndUpdate({_id: req.body.restaurant.id} ,req.body.restaurant
  // {name: req.body.name},
  // {address: {street: req.body.address.street},
  // address: {zipcode: req.body.address.zipcode},
  // yelpurl: req.body.yelpurl}
  ,{new: true}
  , (err, restaurant) => {
    if(err) {
      console.log(err)
    }
    else {
      console.log(restaurant);
       res.redirect('/');
    }
  });


})


app.get("/restaurants/new", function (req,res){
    console.log("New Restaurant")
    var restaurant = new Restaurant
    res.render("restaurant-new",{restaurant});
});

app.get("/restaurant/:id", function (req,res) {
  console.log("SHOW ",req.params.id)
  Restaurant.findOne({_id: req.params.id.toObjectId()} , function (err,restaurant) {
    if (err) {
      console.log(err)}
    else {
      console.log(restaurant.name, "found")
      res.render("restaurant-show",{restaurant});
    }
  })})


  app.get("/restaurant/delete/:id", function (req,res) {
    console.log("delete",req.params.id)
    Restaurant.remove({_id: req.params.id.toObjectId()} , function (err,restaurant) {
      if (err) {
        console.log(err)}
      else {
        console.log(restaurant.name, "found")
         res.redirect('/');
      }
    })})

    app.get("/restaurant/edit/:id", function (req,res) {
      console.log("edit",req.params.id)
      Restaurant.findOne({_id: req.params.id.toObjectId()} , function (err,restaurant) {
        if (err) {
          console.log(err)}
        else {
          console.log(restaurant.name, "found")
          res.render("restaurant-edit",{restaurant});
        }
      })
    })


app.listen(app.get("port"), function(){
  console.log("Yum is Listening!");
});
