var Schema = require("../db/schema.js");
var Restaurant = Schema.RestaurantModel;
var MenuItem = Schema.MenuItemModel;


Restaurant.remove({}, function(err){
  if (err){
    console.log(err)
  } else {
    console.log("Restaurant Schema reset")
  }
})

MenuItem.remove({}, function(err){
  if (err){
    console.log(err)
  } else {
    console.log("MenuItem Schema reset")
  }
})

var restaurantA = new Restaurant({
  name: "A Restaurant",
  address: {
    street: "1000 AAA AAA st",
    state: "AA",
    zipcode: "20001"
  },
  yelpUrl: "http://www.aaa.com"
})
var restaurantB = new Restaurant({
  name: "B Restaurant",
  address: {
    street: "1000 BBB BBB st",
    state: "BB",
    zipcode: "20001"
  },
  yelpUrl: "http://www.bbb.com"
})
var restaurantC = new Restaurant({
  name: "C Restaurant",
  address: {
    street: "1000 CCC CCC st",
    state: "CC",
    zipcode: "20001"
  },
  yelpUrl: "http://www.ccc.com"
})

var item1 = new MenuItem({title: "Steak"})
var item2 = new MenuItem({title: "Milkshake"})
var item3 = new MenuItem({title: "Pasta"})
var item4 = new MenuItem({title: "Salad"})

var restaurants = [restaurantA,restaurantB, restaurantC]
var items = [item1, item2, item3, item4]



for(let i = 0; i < items.length; i++){
  let array = items[i]
  restaurants.forEach(function(restaurant){
    restaurant.items.push(array)
    restaurant.save(function(err, restaurant){
      if(err){
        console.log(err)
      } else {
        console.log(restaurant)
      }
    })
  })
}
