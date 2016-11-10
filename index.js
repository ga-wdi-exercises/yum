var express = require('express')
var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var MenuItem = Schema.MenuItem
var Restaurant = Schema.Restaurant

var app = express()

app.set('view engine', 'hbs')


app.get('/restaurants', (req, res) => {
  Restaurant.find({}).then((restaurants) => {
    res.render('index', { restaurants })
  })
})


app.listen(3000, () => {
  console.log('app listening on http://localhost:3000')
})
