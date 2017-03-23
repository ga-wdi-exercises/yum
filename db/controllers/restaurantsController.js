var mongoose = require('mongoose')
var Schema = require("../db/schema.js")

var RestaurantModel = Schema.RestaurantModel
var MenuModel = Schema.MenuModel

var restaurantsController = {
  index: function(){
    RestaurantModel.find({}, function(err, docs){
      res.render("restaurants/index", {restaurants: docs})
    })
  },



Restaurant.create({ name: 'Jimmy Johns', address: {street: "777 6th St NW",zipcode: 20005}, yelpUrl: "https://www.yelp.com/biz/jimmy-johns", items: [{title: "sandwitch"}]},function(err, restaurant){
if (err){
  console.log(err)
}else{
  console.log(restaurant);
}

});


// Find restaurant by name
function findByName(restaurant){
Restaurant.findOne({name: restaurant}, function(err, thisrestaurant){
  if(err){
    console.log(err);
  }
  else{
    console.log(thisrestaurant);
  }
});
}

// find Restaurant with zipcode
function findByZipcode(zipcode){
resaurantsWithSameZipcode = [];
Restaurant.find({}, function(err, restaurants){
  restaurants.forEach(function(restaurant){
    if(restaurant.address.zipcode === zipcode){
      resaurantsWithSameZipcode.push(restaurant);
    }
  });
  console.log(restaurant);
});
}

// Update a restaurant
function updateRestaurant(restaurant, update){
  Restaurant.findOneAndUpdate({name: restaurant}, {name: update}, {new: true}, function(err, docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs);
    }
  });
}

// Delete a restaurant
function destroyRestaurant(restaurant){
  Restaurant.findOneAndRemove({name: restaurant}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs + "deleted!");
    }
  });
}


// Add items
function addItem(restaurant, item){
  Restaurant.findOne({name: restaurant}, function(err, docs){
    docs.items.push(new MenuItem({title: item}))
    docs.save(function(err, results){
      if(err){
        console.log(err)
      }
      else{
        console.log(results);
      }
    })
  });
}

// Remove items
function removeItem(restaurant, item){
  Restaurant.findOneAndUpdate({name: restaurant}, {
    $pull: { items: {title: item} }
  },
  {new: true}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  });
}
}

module.exports = restaurantsController
