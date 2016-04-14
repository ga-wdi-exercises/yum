var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var Restaurant = Schema.RestaurantModel;
var MenuItem = Schema.MenuItemModel;

function index() {
  Restaurant.find({}, function(err, restaurants){
    console.log(restaurants);
  })
}
// 3. Create a new restaurant
function create(name, street, zipcode){
  restaurant = new Restaurant();
  restaurant.name = name;
  restaurant.address.street = street;
  restaurant.address.zipcode = zipcode;
  restaurant.save();
  console.log(restaurant)
  return restaurant;
}

// 4. Write a function or method that finds a restaurant by name
function findByName(name){
  Restaurant.find({"name": name}, function(err, restaurant){
    console.log(restaurant);
  })
}

// 5. Write a function or method that finds all restaurants by zipCode
function findByZipCode(zip){
  Restaurant.find({"address.zipcode": zip}, function(err, restaurants){
    console.log(restaurants);
  })
}

// 6. Create a function that updates a restaurant
function update(req, update){
  console.log(req.name);
  Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err, author){
      if(err){
        console.log(err)
      }else{
        console.log(author);
      }
    });
}

// 7. Write a function or method that deletes a restaurant
function destroy(req){
  console.log(req.name + " was deleted");
    Restaurant.findOneAndRemove(req, function(err, restaurant){
      if(err){
        console.log(err);
      }else{
        console.log(restaurants)
      }
    })
    console.log('restaurants left: ' + index());
}

// 8. Write methods to add and remove embedded menu item documents for a restaurant of your choosing.
function addMenuItem(name, itemTitle){
    var food = new MenuItem({title: itemTitle});
    var place = findByName(name);
    place.items.push(food);
    console.log(place);
}

// create('Yums', '1234 h st.', 20009);
// index();
// findByName('Maketto');
// findByZipCode(20009);
// update({name: null}, {name: 'newNameIs'});
// addMenuItem('Impala', 'taco');
