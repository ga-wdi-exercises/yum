var Schema = require("../db/schema.js");

const Restaurant = Schema.Restaurant
const MenuItem = Schema.MenuItem
// 
// const Restaurant = mongoose.model("Restaurant")
// const MenuItem = mongoose.model("MenuItem")

Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
})

MenuItem.remove({}, err => {
  if(err){
    console.log(err)
  }
})

const fogo = new Restaurant({name: "Fogo Du Chao", address: {street: "123 Eata Way", zipcode: 12345}, yelpUrl: "yelp.com/fogoduchao"})
