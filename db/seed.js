var mongoose = require('mongoose');
var Schema = require("../db/schema.js");

var RestaurantModel = Schema.RestaurantModel
var ItemModel = Schema.ItemModel
//
RestaurantModel.remove({}, function(err){
  console.log(err)
});
ItemModel.remove({}, function(err){
  console.log(err)
});

var frish = new RestaurantModel ({name: "Frish's Cafe", address: "", yelpUrl: "www.yelp.com", items:"item1"});

var item1 = new ItemModel ({title: "Mimosa"});
var item2 = new ItemModel ({title: "Pancakes"});
var item3 = new ItemModel ({title: "French Toast"});
var item4 = new ItemModel ({title: "Waffle"});
var item5 = new ItemModel ({title: "Omellete"});
var item6 = new ItemModel ({title: "Oatmeal"});

var restaurant =[frish];
var items =[item1, item2, item3, item4, item5, item6];

items.forEach(function(item, i){
  item.restaurant.push(restaurant[i], restaurant[i+3])
  item.save(function(err){
    if (err){
      console.log(err)
    }else {
      console.log("An item was saved");
    }
  })
});
