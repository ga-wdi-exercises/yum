var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.RestaurantModel;
var MenuItem = Schema.MenuItemModel;

// create a new Restaurant
function addRestaurant(restaurant, street, zip, yelp){
  Restaurant.create({
    name: restaurant,
    address: {
      street: street,
      zipcode: zip
    },
    yelpUrl: yelp
  });
} // end create a restaurant
addRestaurant("Jimmy's New York Pizza", "156 Enterprise St", 20164, "https://www.yelp.com/biz/jimmys-new-york-pizza-sterling");

// find a restaurant by name
function findByName(restaurant){
  Restaurant.findOne({name: restaurant},
  function(err, result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  });
} // end findByName
findByName("Masa Luna");

// finds all restaurants by zipcode
function findByZip(zip){
  allRestaurants = [];
  Restaurant.find({}, function(err, docs){
    docs.forEach(function(restaurant){
      if(restaurant.address.zipcode == zip){
        allRestaurants.push(restaurant);
      }
    });
    console.log("All Restaurants at " + zip + ": " + allRestaurants);
  });
} // end findByZip
findByZip(20164);

// update a restaurant
function updateRestaurantName(restaurant, newName){
  Restaurant.findOneAndUpdate({name: restaurant}, {name: newName}, {new: true}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log("Changed to: " + docs);
    }
  });
} // end updateRestaurantName
updateRestaurantName("Jimmy's New York Pizza", "Jimmy's NY Pizza");

// delete a restaurant
function deleteRestaurant(restaurant){
  Restaurant.findOneAndRemove({name: restaurant}, function(err, docs){
    if(err){
      console.log(docs);
    }
    else{
      console.log(docs + " removed");
    }
  });
}// end deleteRestaurant
deleteRestaurant("Jimmy's NY Pizza");

// add or remove embedded menu items for a specified restaurant
function addToMenu(restaurant, food){
  Restaurant.findOne({name: restaurant}, function(err, docs){
    docs.menuItem.push(new MenuItem({title: food}));
    docs.save(function(err, results){
      if(err){
        console.log(err);
      }
      else{
        console.log(results);
      }
    });
  });
} // end add to menu
addToMenu("Jimmy's NY Pizza", "Cheese Pizza");
