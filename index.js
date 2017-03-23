const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const mongoose = require('./db/connection');

const Restaurant = require('./db/models.js');
const MenuItem = require('./db/models.js');

const app = express();

app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 3001);

app.use("/assets", express.static("public"));
app.use(bodyParser.urlencoded({extened: true}));

app.get('/', function(req,res){
  Restaurant.find({}).then(function(restaurants){
    res.render("index", {restaurants: restaurants});
  });
});

app.post('/', function(req, res){
  Restaurant.create(req.body.restaurant).then(function(err, restaurant){
    res.redirect("/");
  });
});

app.get('/restaurants/:name', function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant){
    res.render('show', {restaurant: restaurant})
  });
});

app.post('/restaurants/:name', function(req, res){
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then(function(restaurant){
    res.redirect(`/restaurants/${restaurant.name}`)
  });
});

app.post('/restaurants/:name/delete', function(req, res){
  Restaurant.findOneAndRemove({name: req.params.name}).then(function(){
    res.redirect('/');
  });
});

app.listen(app.get("port"), function(){
  console.log('Its Alive!');
});
