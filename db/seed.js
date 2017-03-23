var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant
var MenuItems = Schema.MenuItems

Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
});

MenuItems.remove({}, err => {
  if(err){
    console.log(err)
  }
});

var bonchon = new Restaurant({name:"Bonchon",address: {street: "23324 Florida Ave", zipcode: 34432},yelp: "https://www.yelp.com/biz/bonchon-chicken-annandale-annandale"})
var seoulsoondae = new Restaurant({name:"Seoul Soondae",address: {street: "4231 Markham St", zipcode: 22003},yelp: "https://www.yelp.com/biz/seoul-soondae-restaurant-annandale?osq=Seoul+sundae"})

var menuitem1 = new MenuItems({title: "double fried chicken"})
var menuitem2 = new MenuItems({title: "jokbal"})

var restaurants = [bonchon, seoulsoondae]
var menuitems = [menuitem1, menuitem2]

restaurants.forEach((restaurant, i) => {
  restaurant.menuitems.push(menuitems[i], menuitems[i+1])
  restaurant.save((err, restaurant) => {
    if(err) {
      console.log(err)
    }else {
      console.log(restaurant);
    }
  })
})
