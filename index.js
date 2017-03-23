var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;

Restaurant.create({ name: 'Burger King', "address.zipcode": 66666 }, function (err, restaurant) {
  if (err) return handleError(err);
  console.log("made", restaurant.name, 'in', restaurant.address.zipcode);
});

function findByName(restaurant){
  Restaurant.findOne({name: restaurant}, function(err, result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  });
}

function findByZip(zipcode){
  results = [];
  Restaurant.find({}, function(err, docs){
    docs.forEach(function(rest){
      if(rest.address.zipcode === zipcode){
        results.push(rest);
      }
    });
    console.log(results);
  });
}

function update(restaurant, update){
  Restaurant.findOneAndUpdate({name: restaurant}, {name: update}, {new: true}, function(err, docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs);
    }
  });
}

function destroy(restaurant){
  Restaurant.findOneAndRemove({name: restaurant}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs + " deleted");
    }
  });
}
