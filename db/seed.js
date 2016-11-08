var Schema = require("./db/schema.js");
var mongoose = require("./models")
var Restaurant = mongoose.model("Restaurant")


Restaurant.create({name: "Uniontown Grill", address: {street: "111 Eat St" , zipcode: 20009 }, yelpUrl: "www.eat.com"}, items: [MenuSchema])
Menu.create({title: "Uniontown Grill"})
itmes.push(Menu)
