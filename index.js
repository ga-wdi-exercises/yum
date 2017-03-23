const express = require('express');
const hbs = require('hbs');
const parser = require('body-parser');
const mongoose = require('./db/connection.js')

//models
const Restaurant = require('./db/models.js').Restaurant;
const MenuItem = require('./db/models.js').MenuItem;

const app = express();

// allows us to view on local host using handlebars/hbs
app.set('view engine', 'hbs');

// the port that gets visited
app.set("port", process.env.PORT || 3001);

app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

// lists all restaurants at home page.
app.get('/', function(req, res){
  Restaurant.find({}).then( (restaurants) => {
  res.render("index", {restaurants})
  });
});


// create new restaurant
app.post('/', function(req, res){
  Restaurant.create(req.body.restaurant).then( (err, restaurant) => {
    res.redirect("/");
  });
});

// show individual restaurant and their info
app.get('/restaurants/:name', function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant){
    res.render('show', {restaurant})
  });
});

// update individual restaurant
app.post('/restaurants/:name', function(req, res){
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then((restaurant) =>{
    res.redirect(`/restaurants/${restaurant.name}`)
  });
});

// delete individual restaurant
app.post('/restaurants/:name/delete', function(req, res){
  Restaurant.findOneAndRemove({name: req.params.name}).then(() => {
    res.redirect('/');
  });
});

// add menu item for restaurant
app.post('/restaurants/:name/items', function(req, res){

  Restaurant.findOneAndUpdate({name: req.params.name}, {$push: {items: req.body.item}}).then( function(err, restaurant){
      res.redirect(`/restaurants/${restaurant.name}`);
  });

});

// delete menu item for a restaurant
app.post('/restaurants/:name/items/:title/delete', function(req, res){

  Restaurant.findOneAndUpdate({name: req.params.name},{$pull: {items: {title: req.params.title}}}).then((restaurant) => {
    res.redirect(`/restaurants/${restaurant.name}`);
  });

});

// references to activate when this port get visited
app.listen(app.get("port"), function(){
  console.log('Alive and Active');
});
