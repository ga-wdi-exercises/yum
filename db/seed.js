var Schema = require("../db/schema.js");

var Menu = Schema.Menu
var Restaurant = Schema.Restaurant

Restaurant.remove({}, err => {
  if(err) {
    console.log(err)
  }
});

Menu.remove({}, => {
  if(err){
    console.log(err)
  }
});
var resto1 = new Restaurant({name: "Taco Bamba", address: {street: "164 Maple Avenue W", zipcode: 22180  }, yelpUrl: "https://www.yelp.com/biz/taco-bamba-vienna"})
var resto2 = new Restaurant({name: "Daikaya", address: {street: "705 6th St NW", zipcode: 20001 }, yelpUrl: "https://www.yelp.com/biz/daikaya-ramen-shop-washington"})
var resto3 = new Restaurant({name: "Astro Doughnuts", address: {street: "Leesburg Pike", zipcode: 22043 }, yelpUrl: "https://www.yelp.com/biz/astro-doughnuts-and-fried-chicken-falls-church"})
var resto4 = new Restaurant({name: "Capital Grille ", address: {street: "601 Pennsylvania Ave. NW", zipcode: 20004 }, yelpUrl: "https://www.yelp.com/biz/the-capital-grille-washington-2"})

var menu1 = new Menu({title: "Black Pearl Tilapia Taco"})
var menu2 = new Menu({title: "Seared Enoki Mushrooms"})
var menu3 = new Menu({title: "Honey Sriracha Buffalo Wings"})
var menu4 = new Menu({title: "Porcini Rubbed Bone-in Ribeye with 15-year Aged Balsamic"})
// astro.save((err, restaurant) => {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(restaurant);
//   }
// })
