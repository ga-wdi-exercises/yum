var Schema = require("../db/schema.js");

var Restaurant= Schema.Restaurant
var Menu= Schema.Menu

// First we clear the database of existing restaurant and menus.
Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
});

Menu.remove({}, err => {
  if(err){
    console.log(err)
  }
});

// Create/generate a new instance of objects (Restaurant and Menu)with a constructor function!
var enate = new Restaurant({name: "Kitfo", yelpUrl: "www.google.com"});
var abate = new Restaurant({name: "Genfo", yelpUrl: "www.yahoo.com"});
var ayate = new Restaurant({name: "Dabo", yelpUrl: "www.hotmail.com"});

var menu1 = new Menu({title: "sample menu"});
var menu2 = new Menu({title: "sample menu1"});
var menu3 = new Menu({title: "sample menu2"});


var restaurants = [enate, abate, ayate]
var menus = [menu1, menu2, menu3]

// Now we add that menu to a restaurant's collection / array of restaurants.
// enate.menus.push(menu1)

// In order to save that menu to the restaurant, we need to call `.save` on the restaurants -- not the menu.
// enate.save((err, restaurant) => {
//   if(err){
//     console.log(err)
//   } else {
//     console.log(restaurant + " was saved to our db!");
//   }
// });
// Here we assign some menus to each restaurant.
for(var i = 0; i < restaurants.length; i++){
  // restaurants[i].menus.push(menus[i])
  restaurants[i].save((err, restaurant) => {
    if (err){
      console.log(err)
    } else {
      console.log(restaurant);
    }
  })
};
