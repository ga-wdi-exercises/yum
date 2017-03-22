var Schema = require("../db/schema.js");

var MenuItem = Schema.Reminder
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


restaurants.forEach(function(restaurant, i){
  restaurant.menuitems.push(menuitems[i], menuitems[i+1]);
  restaurant.save(function(err){
    if (err){
      console.log(err);
    } else {
    console.log("restaurant up")
  }
  })
})
