var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant
var Menu = Schema.Menu

Restaurant.remove({}, err=> {
  if(err){
    console.log(err)
  }
})

Menu.remove({}, err=> {
  if(err){
    console.log(err)
  }
})

var KerenRestaurant = new Restaurant({
  name: "Keren Restaurant",
  address: {
    street: "1780 Florida Ave NW",
    zipcode: 20009
  },
  yelpUrl: "https://www.yelp.com/biz/keren-restaurant-washington"
})

let yumYum = new Menu({
  title: "Yum Yum Sauce"
})

KerenRestaurant.items.push(yumYum);

KerenRestaurant.save(err => {
  if (err){
  console.log(err)
  }
})
