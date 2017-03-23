// const express = require('express');
// const Restaurant = require('./db/models.js').Restaurant
var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var restaurantController = require("./controllers/restaurants.controller.js");


// const app = express()
//
// app.set('view ending', 'hbs')
//
// app.listen(3001, () => {
//   console.log('Express started on port 3001')
// })
//
// app.get('/restaurants', (req, res) => {
//   Restaurant.find({}, (err, restaurants) => {
//     res.render('index', { restaurants })
//   })
// })
//
// app.get('/:name', (req, res) => {
//   Restaurant.findOne({ name: req.params.name }, (err, restaurant) => {
//     res.redirect('index')
//   }
// )
// })
