var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem

Restaurant.remove({}, err => {
  if(err){
    console.log(err);
  }
});
MenuItem.remove({}, err => {
  if(err){
    console.log(err);
  }
});

var jJohns = new Restaurant(
  {
    name: "Jimmy Johns",
    address: {
      street: "1101 14th Street NW",
      zipcode: 20005
    },
    yelpUrl:"https://www.yelp.com/biz/jimmy-johns-washington?osq=jimmy+johns+14th+street"
  }
)
var cCafe = new Restaurant(
  {
    name: "Cornerstone Cafe",
    address: {
      street: "1501 M Street NW",
      zipcode: 20005
    },
    yelpUrl:"https://www.yelp.com/biz/cornerstone-cafe-washington"
  }
)
var lMadison = new Restaurant(
  {
    name: "Lowes Madison",
    address: {
      street: "1177 15th Street NW",
      zipcode: 20005
    },
    yelpUrl:"https://www.yelp.com/biz/loews-madison-washington?hrid=FkZ7AF7ZiomAqF58bUPjsw&rh_type=phrase&rh_ident=postscript_bar"
  }
)

var sandwhich = new MenuItem({title: "Sandwhich"})
var steak = new MenuItem({title: "Steak"})
var vodka = new MenuItem({title: "Vodka"})
var burger = new MenuItem({title: "Hamburger"})

var restaurants = [jJohns, cCafe, lMadison]
var items = [sandwhich, steak, vodka, burger]

for (let i = 0; i < restaurants.length; i++){
  restaurants[i].items.push(items[i], items[i+1]);
  restaurants[i].save((err, restaurants) => {
    if (err){
      console.log(err);
    }else {
      console.log(restaurants);
    }
  })
}
