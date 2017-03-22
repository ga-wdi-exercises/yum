var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

//create new
const fogo = Restaurant.create({name: "Fogo Du Chao", address: {street: "123 Eata Way", zipcode: 12345}, yelpUrl: "yelp.com/fogoduchao"})

//find by name
function findByName(resturant) {
  Restaurant.findOne({name: resturant})
}

//find all by zipcode
function findAllByZip(zip) {
  list = []
  Restaurant.find({}, function(data){
    data.forEach(function(resturant){
      if(restaurant.address.zipcode == zip){
        list.push(restaurant)
      }
    })
    console.log(list);
  })
}

//update restaurant
function updateResturant(resturant, newInfo) {
  Restaurant.findOneAndUpdate({name: resturant}, {name: newInfo}, {new: true}, function(info){
    console.log(info);
  })
}

//delete
function destroyResturant(restaurant){
  Restaurant.findOneAndRemove({name: restaurant}, function(info) {
    console.log(info);
  })
}

//add item
function addDish(restaurant, dish) {
  Restaurant.findOne({name: restaurant}, function(meuu) {
    menu.items.push(new MenuItem({title: item}))
    menu.save(function(results){
      console.log(results);
    })
  })
}

//remove item
function removeDish(restaurant, dish) {
  Restaurant.findOneAndUpdate({name: restaurant}, {
    $pull: {items: {title: item} }
  },
  {new: true}, function(info) {
    console.log(info);
  })
}

app.get("/restaurants", function(req, res){
  res.render("restaurants-index", {
    restaurants: restaurants
  })
})
