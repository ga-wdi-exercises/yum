//require dependency
var mongoose = require("mongoose")
//connect to db in mongo
var conn = mongoose.connect("mongodb://localhost/restaurants_db")
//require model definitions from earlier
var RestaurantModel = require("../models/restaurant")
var ItemModel = require("../models/item")
//removes any existing instances from our db
RestaurantModel.remove({}, function(err){
})
ItemModel.remove({}, function(err){
})

var item1 = new ItemModel({title: "BLT"})
var item2 = new ItemModel({title: "Pie"})
var item3 = new ItemModel({title: "PBJ"})
var item4 = new ItemModel({title: "WTF"})

var diner1 = new RestaurantModel({name: "Diner#1", address: {street: "123 Random St", zipcode: 12345}, yelpUrl: "www.yelp.com"})
var diner2 = new RestaurantModel({name: "Diner#2", address: {street: "876 Derp St", zipcode: 54321}, yelpUrl: "www.yelp.com"})

var restaurants = [diner1, diner2]
var items = [item1, item2, item3, item4]

for(var i = 0; i < restaurants.length; i++){
  restaurants[i].items.push(items[i], items[i+1])
  restaurants[i].save(function(err, restaurant){
    if(err){
      console.log(err);
    } else {
      console.log("restaurant was saved");
    }
  })
};
