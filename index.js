var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
mongoose.connect('mongodb://localhost/yum')
var restaurantController = require("./controllers/restaurant.controller.js");
var itemsController = require("./controllers/items.controller.js");

var Restaurant = Schema.Restaurant;
var Item = Schema.Item;

Restaurant.create({name: "Malloys", address: "123 Sesame Street,MD 21114", yelpUrl: "www.yelp.com", items:""});
malloys.save, function (err){
  if (err){
    console.log(err);
  } else {
    console.log('yum');
  }
};

function findRestaurant(){
  RestaurantModel.findOne({"name": req.name}, function(err, doc){
    console.log(docs);
  });
 }

function zipFind(){
  RestaurantModel.find({}, function(err, docs){
    console.log(docs);
  });
}

function update (req, update) {
  RestaurantModel.findOneAndUpdate(req, update, {new: true}, function(err, docs){
    if(err){
      console.log(err)
    } else{
      console.log(docs);
    }
  });
 }

function destroy() {
  RestaurantModel.findOneAndRemove(req, function(err, docs){
    if(err){
      console.log(err)
    } else{
      console.log(docs);
    }
  });
 }

restaurantController.show({name: "malloys"});
restaurantController.show({zip: "21114"});
restaurantController.update({name: "malloys"}, {name: "Irish Channel"});
restaurantController.destroy({name: "malloys"});
