var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem


Restaurant.remove({}, (err) => {
  console.log(err)
})
MenuItem.remove({}, (err) => {
  console.log(err)
})

var chilis = new Restaurant({name: "Chilis", address: {street: "45555 Eastern Plz",zipcode: "20176"},yelpUrl: "https://www.yelp.com/biz/chilis-sterling-5?osq=Chili%27s"})})


var salad = new MenuItem({title: "salad"})
var rice bowl = new MenuItem({title: "rice bowl"})
var soup = new MenuItem({title: "soup"})
var pasta = new MenuItem({title: "pasta"})
var fried pickles = new MenuItem({title: "fried pickles"})
var chips = new MenuItem({title: "chips"})


chilis.items.push(salad, rice bowl, soup, pasta, fried pickles, chips)
chilis.save((err,restaurant) => {
  if (err) {
    console.log(err)
  } else {
    console.log(restaurant)
  }
})
