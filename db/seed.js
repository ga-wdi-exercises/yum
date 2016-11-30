var Schema = require("../db/schema.js");

var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
});
MenuItem.remove({}, err =>{
  if(err){
    console.log(err)
  }
});


var restaurant1 = new Restaurant({name: "Restaurant1", address: { street: "Wall St.", zipcode: 63141}, yelpUrl: "www.thisisarestauranturl.com" })
var restaurant2 = new Restaurant({name: "Restaurant2", address: { street: "Different St.", zipcode: 63141}, yelpUrl: "www.thisisarestauranturl.com" })
var restaurant3 = new Restaurant({name: "Restaurant3", address: { street: "Yet Another St.", zipcode: 63141}, yelpUrl: "www.thisisarestauranturl.com" })
var restaurant4 = new Restaurant({name: "Restaurant4", address: { street: "More St.", zipcode: 63141}, yelpUrl: "www.thisisarestauranturl.com" })
var restaurant5 = new Restaurant({name: "Restaurant5", address: { street: "Last St.", zipcode: 63141}, yelpUrl: "www.thisisarestauranturl.com" })

var menuitem1 = new MenuItem({title: "Steak"})
var menuitem2 = new MenuItem({title: "Potatos"})
var menuitem3 = new MenuItem({title: "Shrimp"})
var menuitem4 = new MenuItem({title: "Salad"})
var menuitem5 = new MenuItem({title: "Cake"})

var restaurants = [restaurant1,restaurant2,restaurant3,restaurant4,restaurant5]
var menuitems = [menuitem1,menuitem2,menuitem3,menuitem4,menuitem5]

for(var i=0; i<restaurants.length; i++){
  restaurants[i].items.push(menuitems[i], menuitems[i+1])
  restaurants[i].save((err, restaurant) =>{
    if(err){
      console.log(err);
    } else {
      console.log(restaurants);
    }
  })
}
