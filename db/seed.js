var Schema = require("../db/schema.js");

var MenuItem = Schema.MenuItem
var Restaurant = Schema.Restaurant

MenuItem.remove({}, err => {
  if (err){
    console.log(err);
  }
})

Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
})

var eggrolls = new MenuItem({title: "eggrolls"});
var orangeChicken = new MenuItem({title: "orange chicken"});
var chickenLoMein = new MenuItem({title: "chicken lomein"});

var chinaOne = new Restaurant({name: "China One", address: "78 Shell Shore Road", zipcode: 12345, yelpUrl: "www.chinaone.com"});
var greatWall = new Restaurant({name: "Great Wall", address: "123 Richmond Way", zipcode: 54321, yelpUrl: "www.greatwall.com"});

var menuItems = [eggrolls, orangeChicken, chickenLoMein];
var restaurants = [chinaOne, greatWall];

restaurants.forEach(function(restaurant, i){
  restaurant.items.push(menuItems[i], menuItems[i+1]);
  restaurant.save(function(err){
    if (err){
      console.log(err);
    } else {
    console.log("restaurant up")
  }
  })
})
