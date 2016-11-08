
var mongoose = require("./connection");
var Schema = require("./schema.js");

var Restaurant=Schema.Restaurant
var Menu=Schema.Menu

console.log("Now Running Seeds.js")


Restaurant.collection.remove({});

var menu1 = new Menu({title:"Dinner Menu"});
var restaurant1 = new Restaurant ( {
  name: "Glory Days Grill",
  address: {street: " Fox Mill Center, 2567 John Milton Dr, Herndon, VA", zipcode:
  20171},
  yelpurl: "https://www.yelp.com/biz/glory-days-grill-herndon",
  items: [menu1]
});

restaurant1.save((err, restaurant) => {
  if(err){
    console.error(err)
  } else {
    console.log(restaurant)
    process.exit()
  }
})

var restaurant2 = new Restaurant ( {
  name: "China King",
  address: {street: "2415 Centreville Rd Ste B6 Herndon, VA", zipcode:
  20171},
  yelpurl: "https://www.yelp.com/biz/china-king-herndon",
  items: [menu1]
});

restaurant2.save((err, restaurant) => {
  if(err){
    console.error(err)
  } else {
    console.log(restaurant)
    process.exit()
  }
})
