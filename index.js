var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

// Create a new restaurant

var Restaurant = Schema.RestaurantModel;
Restaurant.create({
  name: "Whitlows",
  address: {
    street: "4300 Wilson Blvd",
    zipcode: 22201
  },
  yelp_url: "Whitlows.yelp.com",
  items: []
}, function(err, docs) {
  if (err) {
    console.log(err);
  } else {
    console.log(docs);
  }
});

// Write a function or method that finds a restaurant by name
function findByName(name) {
  Restaurant.findOne({name: name}, function(err, results) {
    if (err) {
      console.log(err);
    } else {
      console.log(results);
    }
  });
}

// Create a function that updates a restaurant

function update(name, newName) {
  Restaurant.findOneAndUpdate({name: name}, {name: newName}, {new: true}, function(err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
    }
  });
}

// Write a function or method that deletes a restaurant

function destroy(name) {
  Restaurant.findOneAndRemove({name: name}, function(err, docs) {
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
    }
  });
}

// Write methods to add and remove embedded menu item documents for a restaurant of your choosing.

function addMenuItem(name, item) {
  var restaurant = Restaurant.findOne({name: name}, function(err, rest) {
    if (err) {
      console.log(err);
    } else {
      var count = 0;
      rest.items.forEach(function(i) {
        if (item === i.title) {
          count++;
          console.log("Item already listed!")
        }
      });
      if (count === 0) {
        rest.items.push({title: item});
      }
      console.log(rest);
    }
  });
}

function removeMenuItem(name, item) {
  var restaurant = Restaurant.findOne({name: name}, function(err, rest) {
    if (err) {
      console.log(err);
    } else {
      rest.items.forEach(function(it, i) {
        if (item === it.title) {
          rest.items.splice(i, 1);
          console.log("Item removed!");
        }
      });
      console.log(rest);
    }
  });
}


// Call these methods to test

// findByName("Pupatella");
// update("Pupatella", "Sweet Pizza");
// destroy("Chipotle");
// addMenuItem("Chipotle", "Quesadilla");
// removeMenuItem("Chipotle", "Tacos");
