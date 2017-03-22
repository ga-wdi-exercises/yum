const express = require('express');
const hbs = require('hbs');
const parser = require('body-parser');
const mongoose = require('./db/connection.js')

//models
const Restaurant = require('./db/models.js').Restaurant;
const MenuItem = require('./db/models.js').MenuItem;

const app = express();

app.set('view engine', 'hbs');
app.set("port", process.env.PORT || 3001);

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

// lists all restaurants at home page.
app.get('/', function(req, res){
  Restaurant.find({}).then( (restaurants) => {
  res.render("index", {restaurants})
  })
});


// create new restaurant
app.post('/', function(req, res){
  Restaurant.create(req.body.restaurant).then( (err, restaurant) => {
    res.redirect("/");
  })
});

// show individual restaurant and their info
app.get('/restaurants/:name', function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant){
    res.render('show', {restaurant})
  })
});


app.listen(app.get("port"), function(){
  console.log('Alive and Active');
});
