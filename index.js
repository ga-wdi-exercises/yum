var express = require("express");
var parser  = require("body-parser");
var hbs     = require("express-handlebars");
var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var app     = express();

var Restaurant = mongoose.model("Restaurant");
app.listen(4000, () => {
  console.log("app listening on port 4000");
});

// app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));


//index of all restaurants
app.get("/", function(req, res){
  Restaurant.find({}).then(function(restaurants){
  res.render("restaurant-index", {
    restaurants: restaurants
  });
});
});

//show page for restaurant
app.get("/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant){
    res.render("show", {
      restaurant: restaurant
    })
  })
})

//not sure how to test these 
function findByName(restaurant){
  Restaurant.findOne({name: restaurant}, function(err, result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  });
}

function findByZip(zipcode){
  Restaurant.findOne({zipCode: zipcode}, function(err, result){
  if(err){
    console.log(err);
  }
  else{
    console.log(result);
  }
});
}

//idk
function update(resturant){
  Restaurant.findOneAndUpdate({name: resturant}, req.body.restaurant)
}

function destroy(restaurant){
  Restaurant.findOneAndRemove({name: restaurant})
  };
