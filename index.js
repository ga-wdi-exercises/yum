var express = require("express");
var app = express();

var mongoose = require("mongoose");
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;

//create:

var newRest(restaurant) => {
  Restaurant.create({name: name, address: {street: street, state: state, zip: zip}, yelp: yelp}, (err, docs) =>{
    if(err){
      console.log(err);
    } else {
      console.log("new restaurant:", restaurant.name);
    }
  })
}

//find restaurant:

var findRest(restaurant) => {
  Restaurant.findOne({name: restaurant}, (err, result) => {
    if(err){
      console.log(err);
    } else {
      console.log(result);
    }
  })
}

//find by zip:

var findRestZip(zip) => {
  results = [];
  Restaurant.find({}, (err, docs) => {
    docs.forEach((rest) => {
      if(rest.address.zip === zip){
        results.push(rest);
      }
    })
    console.log(results);
  })
}

//update:

var update (restaurant, update) => {
  Restaurant.findOneAndUpdate({name: restaurant}, {name: update}, {new: true}, (err, docs) => {
    if(err){
      console.log(err);
    } else {
      console.log(docs);
    }
  })
}


//delete:

var destroy (restaurant) => {
  Restaurant.findOneAndRemove({name: Restaurant}, (err, docs){
    if(err){
      console.log(err);
    } else {
      console.log(docs);
    }
  })
}

app.listen(4000, () => {
  console.log("listening on port 4000");
})
