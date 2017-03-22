// var Schema = require("../db/schema.js");

const Restaurant = require('./models.js').Restaurant
const MenuItem = require('./models.js').MenuItem

// destroy prior seeds/extrenous data
Restaurant.remove({}, err => {
  if (err) {
    console.log(err);
  }
})

MenuItem.remove({}, err => {
  if (err) {
    console.log(err);
  }
})


// seed data
var restaurant1 = new Restaurant({name: "Eric's", address: {street: "2314 Willow Street", zipcode: 27150 }, yelpUrl: "#"});
var restaurant2 = new Restaurant({name: "Andy's", address: {street: "1243 H Street", zipcode: 12351 }, yelpUrl: "#"});
var restaurant3 = new Restaurant({name: "Joe's", address: {street: "859 Rose Pedal Lane", zipcode: 38924 }, yelpUrl: "#"});


var pizza = new MenuItem({title: "Pizza"});
var fries = new MenuItem({title: "Fries"});
var spfries = new MenuItem({title: "Sweet Potato Fries"});
var burger = new MenuItem({title: "Hamburger"});
var cburg = new MenuItem({title: "Cheeseburger"});
var beans = new MenuItem({title: "Green Beans"});
var slaw = new MenuItem({title: "Cole Slaw"});
var curry = new MenuItem({title: "Curry"});

var restaurants = [restaurant1, restaurant2, restaurant3];
var items = [pizza,fries,spfries,burger,cburg,beans,slaw,curry];

for(var i=0; i<restaurants.length; i++){
  restaurants[i].items.push(items[i], items[i+1]);
    restaurants[i].save((err,restaurant) => {
      if (err) {
      console.log(err);
      } else {
      console.log(restaurant);
      }
    })
};
