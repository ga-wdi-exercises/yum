var Schema = require("../db/schema.js");
var MenuItem = Schema.MenuItem
var Restaurant = Schema.Restaurant

Restaurant.remove({}, () => {
})
MenuItem.remove({}, () => {
})

var chipotle = new Restaurant({
  name: "Chipotle",
  address: {
    street: "1234 Burrito Way",
    zipcode: 34567,
  },
  phone_number: "222.444.5555",
})

var burrito = new MenuItem({
  name: "Burrito",
  price: 7.99,
})

chipotle.items.push(burrito)
chipotle.save()

var mcdonalds = new Restaurant({
  name: "McDonald's",
  address: {
    street: "8349 Burger Lane",
    zipcode: 43567,
  },
  phone_number: "222.222.9999",
})

var cheeseburger = new MenuItem({
  name: "Quarter Pounder",
  price: 4.99,
})

mcdonalds.items.push(cheeseburger)
mcdonalds.save()

var chicfila = new Restaurant({
  name: "Chic-fil-A",
  address: {
    street: "1234 Nugget Ave",
    zipcode: 34533,
  },
  phone_number: "111.333.5555",
})

var nuggets = new MenuItem({
  name: "12-piece Chicken Nuggets",
  price: 5.99,
})

chicfila.items.push(nuggets)
chicfila.save()
