//Dependencies
var express = require("express");
var hbs     = require("express-handlebars");
var parser = require("body-parser");
var mongoose = require('mongoose');

//Initializing an Express app
var app     = express();

//Schema and Models
var Schema = require("./db/schema.js");

var Menuitem = mongoose.model('MenuItem');
var Restaurant= mongoose.model('Restaurant');

//Setting the server, handle bars, and body parser
app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));

//configure the parser to support html forms
app.use(parser.urlencoded({extended: true}))

//Setting the sever
app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});

//Routes











//----------------------------------------------
//Part 1

//Create a new restaurant.
Restaurant.create({name: "Mike's Backery"}, (err, restaurant) => {
  // console.log(restaurant);
})

//Write a function or method that finds a restaurant by name.
Restaurant.findOne({ name: "Rosa Mixicana"}, (err, restaurant) => {
  // console.log(restaurant);
});

//Write a function or method that finds all restaurants by zipCode.
function findByZip(zipcode){
  results = [];
  Restaurant.find({}, function(err, docs){
    docs.forEach(function(rest){
      if(rest.address.zipcode === zipcode){
        results.push(rest);
      }
    });
    // console.log(results);
  });
}
findByZip(20011)

//Create a function that updates a restaurant.
Restaurant.findOneAndUpdate({ name: "Rosa Mixicana"}, {yelpUrl: "www.yelp.com/rosa"}, {new: true}, (err, restaurant) => {
  // console.log(restaurant)
});

//Write a function or method that deletes a restaurant.
Restaurant.findOneAndRemove({name: "Rosa Mixicana"}, function(err, docs){
  if(err){
    console.log(err);
  }
  else{
    // console.log(" Restaurant was deleted!");
  }
});

// //Write methods to add embedded menu item documents for a restaurant of your choosing.
// Restaurant.findOne({name: "Busboys and Poets"}, function(err, restaurant){
//   restaurant.items.push(new Menuitem({title: "candy"}))
//   restaurant.save(function(err, results){
//     if(err){
//       console.log(err)
//     }
//     else{
//       // console.log(results);
//     }
//   })
// });

//Write methods to remove embedded menu item documents for a restaurant of your choosing.
function removeItem(resturant, item){
  Restaurant.findOneAndUpdate({name: resturant}, {
    $pull: { items: {title: item} }
  },
  {new: true}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  });
}
removeItem("Busboys and Poets", "Beef")
