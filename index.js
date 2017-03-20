var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var Seeds = require("./db/seed.js")

var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem


Restaurant.create({name: "Medium Rare",  address: {street: "515 8th St SE", zipcode: 20005}, yelpUrl: "https://www.yelp.com/biz/medium-rare-washington-2"}, function(err, restaurant) {
  restaurant.save((err, restaurant) => {
    if(err){
      console.log(err)
    }
    else{
      console.log(restaurant)
    }
  })
})


function findbyName(req){
Restaurant.findOne({name: req.name}, (err, restaurant) => {
  if(err){
    console.log(err)
  }
    else{
      console.log(restaurant)
}
})
}

function findByZip(req){
  Restaurant.find({address: {zipcode: req.zipcode}}, (err, restaurant) =>{
    if(err){
      console.log(err)
    }
    else{
      console.log(restaurant)
    }
  })
}

function updateRestaurant(req){
  Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, (err, restaurant)=>{
    if(err){
      console.log(err)
    }
    else{
      console.log(restaurant)
    }
  })
}

function deleteRestaurant(req){
  Restaurant.findOneAndRemove(req, (err, docs)=> {
    if(err){
      console.log(err)
    }
    else {
      console.log(docs)
    }
  })
}


function addMenuItem(req, item){
  Restaurant.findOne({name: req.name}, (err, restaurant)=>{
    restaurant.items.push(item({title: item}))
    restaurant.save((err, restaurant)=>{
      if(err){
        console.log(err)
      }
      else{
        console.log(restaurant)
      }
    })
  })
}

function removeMenuItem(req, item) {
  Restaurant.findOneAndUpdate({name: req.name}, {$pull: {items: {title: item}}
  ((err, restaurant)=> {
    if(err){
      console.log(err)
    }
    else{
      console.log(restaurant)
    }
  })
  })
  }
