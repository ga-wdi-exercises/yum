var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var MenuItem = Schema.Menu;

// Finds restaurant by name
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

function update(resturant, update){
  Restaurant.findOneAndUpdate({name: resturant}, {name: update}, {new: true}, function(err, docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs);
    }
  });
}

// Deletes resturant
function destroy(resturant){
  Restaurant.findOneAndRemove({name: resturant}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs + " was deleted!");
    }
  });
}

// Add menu reference
function addMenu(resturant, foods){
  Restaurant.findOne({name: resturant}, function(err, docs){
    docs.items.push(new Menu({name: foods}))
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
