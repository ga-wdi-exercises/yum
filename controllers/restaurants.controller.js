var mongoose = require("mongoose");
var Schema = require("../db/schema.js")
var Restaurant = Schema.Restaurant;
var Address = Schema.Adress;
var MenuItem = Schema.MenuItem;

var restaurantsController = {
  index: function(){
    Restaurant.find({}, function(err,restaurants){
      if (err){
        console.log(err);
      }else{
        console.log(restaurants);
        return restaurants;
      }
    })
  },
  show: function(req){
    Restaurant.findOne({"name": req.name}, function(err,restaurants){
      if (err){
        console.log(err);
      }else{
        console.log(restaurants);
        return restaurants;
      }
    })
  },
  update: function(name,newname){
    Restaurant.findOneAndUpdate(name, newname,{new: true}, function(err,restaurants){
      if (err){
        console.log(err);
      }else{
        console.log(restaurants);
      }
    })
  },
  create: function(newrestaurant){
    Restaurant.create(newrestaurant, function(err,newrestaurant){
      if (err){
        console.log(err);
      }else{
        console.log(newrestaurant)
      }
    })
  },
  destroy: function(removeName){
    Restaurant.findOneAndRemove({removeName}, function(err,restaurants){
      if (err){
        console.log(err);
      }else{
        console.log(restaurants);
      }
    })
  },
}

restaurantsController.index();
restaurantsController.show({name: "Chinese"})
restaurantsController.update({name: "Chinese"}, {name: "Saneeze"});
restaurantsController.create({name: "Bad", yelpUrl: "yelp4.com", address: {street: "Main", zipcode: "12345"}, items: {title: "Yucky", title: "No Good"}})
restaurantsController.destroy({name: "Bad"})
restaurantsController.index();
