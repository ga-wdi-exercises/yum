var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Menuitem = mongoose.model('MenuItem');
var Restaurant= mongoose.model('Restaurant');

//Create a new restaurant.
Restaurant.create({name: "Mike's Backery"}, (err, restaurant) => {
  // console.log(restaurant);
})

//Write a function or method that finds a restaurant by name.
Restaurant.findOne({ name: "Rosa Mixicana"}, (err, restaurant) => {
  // console.log(restaurant);
});

//Write a function or method that finds all restaurants by zipCode.
function findByZip(zipcode){
  results = [];
  Restaurant.find({}, function(err, docs){
    docs.forEach(function(rest){
      if(rest.address.zipcode === zipcode){
        results.push(rest);
      }
    });
    // console.log(results);
  });
}
findByZip(20011)

//Create a function that updates a restaurant.
Restaurant.findOneAndUpdate({ name: "Rosa Mixicana"}, {yelpUrl: "www.yelp.com/rosa"}, {new: true}, (err, restaurant) => {
  // console.log(restaurant)
});

//Write a function or method that deletes a restaurant.
Restaurant.findOneAndRemove({name: "Rosa Mixicana"}, function(err, docs){
  if(err){
    console.log(err);
  }
  else{
    // console.log(" Restaurant was deleted!");
  }
});

// //Write methods to add embedded menu item documents for a restaurant of your choosing.
// Restaurant.findOne({name: "Busboys and Poets"}, function(err, restaurant){
//   restaurant.items.push(new Menuitem({title: "candy"}))
//   restaurant.save(function(err, results){
//     if(err){
//       console.log(err)
//     }
//     else{
//       // console.log(results);
//     }
//   })
// });

//Write methods to remove embedded menu item documents for a restaurant of your choosing.
function removeItem(resturant, item){
  Restaurant.findOneAndUpdate({name: resturant}, {
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
removeItem("Busboys and Poets", "Beef")          
