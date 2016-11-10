var Schema = require("./schema.js");
var mongoose = require("./models")
var Restaurant = mongoose.model("Restaurant")

var Restaurant = Schema.Restaurant
var Menu = Schema.Menu

Restaurant.remove({}, err => {
  if (err) {
    console.log(err)
  }
})

Menu.remove({}, err => {
  if (err) {
    console.log(err)
  }
})

var sushi = Menu.create({title: "Sushi"})
var pizza = Menu.create({title: "Pizza"})

Restaurant.create({name: "Uniontown Grill", address: {street: "111 Eat St" , zipcode: 20009 }, yelpUrl: "www.eat.com"})


process.exit()
