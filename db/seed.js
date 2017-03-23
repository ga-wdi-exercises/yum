// var Schema = require("../db/schema.js");

const Restaurant = require("./schema.js").Restaurant
const Menu = require("./schema.js").Menu

Restaurant.remove({}).then(() => {
  process.exit();
});

var BbMenuPizza = new Menu ({title:"Pizza"});
var BbMenuPizza = new Menu ({title: "English"});

var BbPizza = new Restaurant({
  name: "BB'S PIZZA, THE BEST PIZZA IN THE WORLD CRAIG!",
  address: {street: "123 Tioga", zipcode: 111111},
  yelpUrl: "https://www.yelp.com/",
});

var BbPizza = new Restaurant({
  name: "BB's English",
  address: {street: "14th Street", zipcode: 000000},
  yelpUrl: "https://www.yelp.com/"
});

var foodRestaurants = [BbPizza, BbEnglish];
