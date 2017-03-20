const Schema = require("./schema.js")

const Restaurant = Schema.Restaurant
const Item = Schema.Item

Restaurant.remove({}, err => {
  if (err) {
    console.log(err)
  }
})

Item.remove({}, err => {
  if (err) {
    console.log(err)
  }
})

let bedig = new Restaurant({
  name: "Bedig's",
  address: {
    street: "123 Fictional Street",
    zipcode: "20016"
  },
  yelpUrl: "https://www.yelp.com/not-a-real-url",
  items: [
    {title: "Bedig's Burger"}
    {title: "House Salad"}
  ]
})

let savraj = new Restaurant({
  name: "Savraj's",
  address: {
    street: "456 Fictional Street",
    zipcode: "20016"
  },
  yelpUrl: "https://www.yelp.com/also-not-a-real-url",
  items: [
    {title: "Savraj's Sandwich"}
    {title: "Signature Apple Martini"}
  ]
})
