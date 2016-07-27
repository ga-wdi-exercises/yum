var mongoose = require("mongoose");
var Schema = require("./schema.js");
var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;

Restaurant.remove({}, function(err){
  if(err){
    console.log(err);
  }
})

Menu.remove({}, function(err){
  if(err){
    console.log(err);
  }
})

var ricebar = new Restaurant({name: "Rice Bar", address: {street: "1020 19th St NW, Washington, DC", zipcode: "20036"}, yelpUrl: "http://www.yelp.com/biz/rice-bar-washington"})

var item1 = new Menu({title: "Bulgogi"})
var item2 = new Menu({title: "Brown Rice"})
var item3 = new Menu({title: "Seaweed"})

var restaurants = [ricebar];
var items = [item1, item2, item3];

for (var i=0; i < restaurants.length; i++){
  restaurants[i].items.push(items[i])
  restaurants[i].save(function(err, restaurant){
    if (err){
      console.log(err)
    } else {
      console.log(restaurant)
    }
  })
};
