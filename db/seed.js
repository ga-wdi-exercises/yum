var Schema = require("../db/schema.js");


var MenuItem = Schema.MenuItem;
var Restaurant = Schema.Restaurant;

Restaurant.remove({}, function(err){
  console.log(err)
});

MenuItem.remove({}, function(err){
  console.log(err)
})

var inAndOut= new Restaurant(
  {
    name: "In and Out",
    address: {street: "M street", zipcode: 22310, state: "CA"},
    yelp: "inandout.com"
  });

var hamburger = new MenuItem({title: "hamburger"});
var fries = new MenuItem({title: "fries"});

var restaurants = [inAndOut];
var menuitems = [hamburger, fries];

for(var i = 0; i< restaurants.length; i++){
  restaurants[i].menuitems.push(menuitem[i], menuitem[i+1])
  restaurants[i].save(function(err){
    if(err){
      console.log(err)
    } else {
      console.log("restaurant was saved");
    }
  })
}
