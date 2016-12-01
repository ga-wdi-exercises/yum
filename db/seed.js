var mongoose = require("../db/connection.js");

var Restaurant = mongoose.model("Restaurant");
var MenuItem = mongoose.model("MenuItem");

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

// PART 3-8
// 4. db.restaurants.find({name: "Restaurant1"}).pretty();
// 5. db.restaurants.find({"address.zipcode": 63141});
// 6. db.restaurants.update({name: "Restaurant1"}, {$set: {"yelpUrl": "www.google.com"}});
// 7. db.restaurants.remove({name: "Restaurant1"});
// 8. db.restaurants.items.update({title: "Steak"}, {$set: {"title": "Meat"}})
// I spent an hour trying to figure #8 out and thats the best I could come up with. Whats the solution here?
