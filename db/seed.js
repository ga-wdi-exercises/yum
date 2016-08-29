var Schema = require("../db/schema.js");

var mongoose = require('mongoose');
var Schema = require("./schema.js");

var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

// First we clear the database of existing restaurants and menuitems.
Restaurant.remove({}, function(err){
  console.log(err)
});

MenuItem.remove({}, function(err){
  console.log(err)
});

var becky = new Restaurant({name: "becky"})
var brandon = new Restaurant({name: "brandon"})
var tom = new Restaurant({name: "tom"})

var menuitem1 = new MenuItem({title: "menuitem1!!"})
var menuitem2 = new MenuItem({title: "menuitem2!!"})
var menuitem3 = new MenuItem({title: "menuitem3!!"})
var menuitem4 = new MenuItem({title: "menuitem4!!"})

var restaurants = [diner, foodies, delish]
var menuitems = [menuitem1, menuitem2, menuitem3, menuitem4]

for(var i = 0; i < restaurants.length; i++){
  restaurants[i].menuitems.push(menuitems[i], menuitems[i+1])
  restaurants[i].save(function(err, restaurant){
    if (err){
      console.log(err)
    } else {
      console.log(restaurant);
    }
  })
};

Restaurant.findOne({name: "foodies"}, callback)
Restaurant.findOne({zipcode: ""}, callback)
