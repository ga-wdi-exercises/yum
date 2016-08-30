// requires mongoose dependencies
//connection to our database
var mongoose = require('./connection')
var seedData = require("./seeds")
// connects us to the reminders database in mongo
// var conn = mongoose.connect('mongodb://localhost/yum')
// require model definitions
var RestaurantModel = require("Restaurant")
var MenuModel = require("Menu")

//remove any existing restaurants and menus
Restaurant.remove({}).then(function(){
  Restaurant.collection.insert(seedData).then(function(){
    process.exit();
  });
});
Menu.remove({}).then(function(){
  Menu.collection.insert(seedData).then(function(){
    process.exit();
  });
});

var restaurant1 = new RestaurantModel({
  name: "Bertucci's",
  address: {
    street: "2000 Pennsylvania Ave",
    zipCode:  20006
  },
  yelpUrl: "yelp.com/Bertuccis"
})

var item1 = new MenuModel({title: "Shrimp Alfredo"})

var restaurants = [restaurant1]
var menus = [item1]

for(var i = 0; restaurants.length; i++){
  restaurants[i].menus.push(menus[i], menus[i+1])
  restaurants[i].save(function(err){
    if (err){
      console.log(err);
    } else {
      console.log("restaurant was saved");
    }
  })
}
