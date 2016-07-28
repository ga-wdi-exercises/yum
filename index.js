var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

// Create a new restaurant
Restaurant.create({ name: 'Cookies-R-Us', "address.zipcode": 20001 }, function (err, restaurant) {
  // Return an error if we can't create it
  if (err) return handleError(err);
  // Report the restaurent was created
  console.log("We created", restaurant.name, 'in', restaurant.address.zipcode);
});

// Find by name
function findByName(restaurant){
  // Search for a single restaurant that matches a name
  // if more than one match, it returns the first
  Restaurant.findOne({name: restaurant}, function(err, result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  });
}

// Find all by zip
function findByZip(zipcode){
// Find all restaurants in a given zip code
  results = [];
  Restaurant.find({}, function(err, docs){
  // "find" a list of every resturant

    docs.forEach(function(rest){
      // Go through the list
      if(rest.address.zipcode === zipcode){
        // Save every restaurant in the given zip
        results.push(rest);
      }
    });
    console.log(results);
  });
}

// Updating resturant
function update(resturant, update){
  // Find a restaurent named name and change it's name to update
  // if more than one match the namnem update the first
  Restaurant.findOneAndUpdate({name: resturant}, {name: update}, {new: true}, function(err, docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs);
    }
  });
}

// Deleting resturant
function destroy(resturant){
  // delete a restaurant named restaurant
  // Again, if more than one match, delete the first
  Restaurant.findOneAndRemove({name : resturant}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs + " was deleted!");
    }
  });
}

// Add sub document
function addItem(resturant, item){
  // Add a new menu item named item to a restaunrant named restaurant

  // Find the restautent to be added
  Restaurant.findOne({name: resturant}, function(err, docs){

    // Add the new menu item
    docs.items.push(new MenuItem({title: item}))

    // And commit it to the db
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

// Remove sub document

// Delete a menu item from a restaurant
function removeItem(resturant, item){
  // Find the restaurant that matches the name
  Restaurant.findOneAndUpdate({name: resturant}, {

    // Delete the named item from its menu
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
