const express = require('express')
const hbs = require('hbs')
const mongoose = require('./db/connection')
const parser = require('body-parser')

const app = express()

const MenuItem = mongoose.model("MenuItem")
const Restaurant = mongoose.model("Restaurant")

app.set("port", process.env.PORT || 3000)
app.set("view engine", "hbs")
app.engine('.hbs', hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}))

app.use("/assets", express.static("public"))
app.use(parser.urlencoded({extended: true}))

app.get('/restaurants', function(req, res){
  Restaurant.find({}).then((restaurants)=>{
    res.render("index", {
      restaurants: restaurants
    })
  })
})

app.post("/restaurants", function(req, res){
  Restaurant.create(req.body.restaurant).then((restaurant)=>{
    res.redirect('/restaurants/' + restaurant.name)
  })
})

app.post("/restaurants/:name", function(req, res){
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then((restaurant)=>{
    res.redirect("/restaurants/" + restaurant.name)
  })
})

app.post("/restaurants/:name/delete", function(req, res){
  Restaurant.findOneAndRemove({name: req.params.name}).then(()=>{
    res.redirect('/restaurants')
  })
})

app.get("/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then((restaurant)=>{
    res.render("show", {
      restaurant: restaurant
    })
  })
})

// var mongoose = require('mongoose');
// var Schema = require("./db/schema.js");
// var Seeds = require("./db/seed.js")
//
// var Restaurant = Schema.Restaurant
// var MenuItem = Schema.MenuItem
//
//
// Restaurant.create({name: "Medium Rare",  address: {street: "515 8th St SE", zipcode: 20005}, yelpUrl: "https://www.yelp.com/biz/medium-rare-washington-2"}, function(err, restaurant) {
//   restaurant.save((err, restaurant) => {
//     if(err){
//       console.log(err)
//     }
//     else{
//       console.log(restaurant)
//     }
//   })
// })
//
//
// function findbyName(req){
// Restaurant.findOne({name: req.name}, (err, restaurant) => {
//   if(err){
//     console.log(err)
//   }
//     else{
//       console.log(restaurant)
// }
// })
// }
//
// function findByZip(req){
//   Restaurant.findOne({address: {zipcode: req.zipcode}}, (err, restaurant) =>{
//     if(err){
//       console.log(err)
//     }
//     else{
//       console.log(restaurant)
//     }
//   })
// }
//
// function updateRestaurant(req){
//   Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, (err, restaurant)=>{
//     if(err){
//       console.log(err)
//     }
//     else{
//       console.log(restaurant)
//     }
//   })
// }
//
// function deleteRestaurant(req){
//   Restaurant.findOneAndRemove(req, (err, docs)=> {
//     if(err){
//       console.log(err)
//     }
//     else {
//       console.log(docs)
//     }
//   })
// }
//
//
// function addMenuItem(req, item){
//   Restaurant.findOne({name: req.name}, (err, restaurant)=>{
//     restaurant.items.push(item({title: item}))
//     restaurant.save((err, restaurant)=>{
//       if(err){
//         console.log(err)
//       }
//       else{
//         console.log(restaurant)
//       }
//     })
//   })
// }
//
// function removeMenuItem(req, item) {
//   Restaurant.findOneAndUpdate({name: req.name}, {$pull: {items: {title: item}}
//   ((err, restaurant)=> {
//     if(err){
//       console.log(err)
//     }
//     else{
//       console.log(restaurant)
//     }
//   })
//   })
//   }
