var Schema = require("../db/schema.js");

var Item = Schema.Item
var Restaurant = Schema.Restaurant

Item.remove({}, (err) => {
  console.log(err)
})

Restaurant.remove({}, (err) => {
  console.log(err)
})

var burrito = new Item({ title: "Burrito" })
var burritoBowl = new Item({ title: "Burrito Bowl" })
var tacos = new Item({ title: "Tacos" })

var chipotle = new Restaurant({
  name: "Chipotle",
  address: {
    street: "1010 Vermont Ave NW",
    zipcode: "20071"
  },
  yelpUrl: "https://www.yelp.com/biz/chipotle-mexican-grill-washington-25"
})

var restaurants = [chipotle]
var items = [burrito, burritoBowl, tacos]

restaurants.forEach((restaurant, i) => {
  restaurant.items.push(items[i], items[i+1], items[i+2])
  restaurant.save((err, resturant) => {
    if (err) { console.log(err) }
    else { console.log(resturant) }
  })
})

process.exit()
