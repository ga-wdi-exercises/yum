var Schema = require("./schema.js");

var Restaurant = Schema.Restaurant
var MenuItem =  Schema.MenuItem

Restaurant.remove({}, err => {
  if (err){
    console.log(err)
  }
});

MenuItem.remove({}, err => {
  if (err){
    console.log(err)
  }
});
var pickle = MenuItem.create({title: "Pickle Pot"})
var tots=  MenuItem.create({title: "House Tots"})

Restaurant.create({name: "Bluejacket", address:{street:"300 half street", zipcode: 20003}, yelpUrl: "https://www.yelp.com/biz/bluejacket-washington", items:[pickle, tots]})

process.exit();
