var Schema = require("../db/schema.js");

var RestaurantSchema = new mongoose.Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuItemSchema]
})

var cava = new Restaurant({
  name: "Cava",
  address: {
    street: "180 Maple Ave",
    zipcode: "22180"
  },
  yelpUrl: "https://www.yelp.com/biz/cava-vienna?osq=food"
})

var salad = new MenuItem({title: "salad"})
var pita = new MenuItem({title: "pita"})
var tzatziki = new MenuItem({title: "tzatziki"})
var crazyfeta = new MenuItem({title: "crazy feta"})
var hummus = new MenuItem({title: "hummus"})
var falafel = new MenuItem({title: "falafel"})

cava.items.push(salad, pita, tzatziki, crazyfeta, hummus, falafel)
cava.save((err,restaurant) => {
  if (err) {
    console.log(err)
  } else {
    console.log(restaurant)
  }
})
