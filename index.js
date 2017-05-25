var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var hbs        = require("express-handlebars");
var express    = require("express");
var parser = require("body-parser");

var app        = express();

var Restaurant = Schema.RestaurantModel;
var MenuItem = Schema.MenuItemModel;

app.set("port", process.env.PORT || 4000);

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use(parser.json());


//find a restaurant by name
function restaurantByName(restaurantName){
  Restaurant.findOne({name: restaurantName}, function(err, result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  })
}

//find all restaurants by zipcode
function restaurantByZipcode(restaurantZipcode){
  let restaurantList = []
  Restaurant.find({}, function(err, restaurants){
    restaurants.forEach(function(restaurant){
      if(restaurant.address.zipcode == restaurantZipcode){
        restaurantList.push(restaurant)
      }
    })
    console.log(restaurantList)
  })
}

// Updating resturant
function update(resturant, update){
  Restaurant.findOneAndUpdate({name: resturant}, {name: update}, {new: true}, function(err, docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs);
    }
  });
}

// Deleting resturant
function destroy(resturant){
  Restaurant.findOneAndRemove({name: resturant}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs + " was deleted!");
    }
  });
}
