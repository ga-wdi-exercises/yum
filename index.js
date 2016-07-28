var mongoose = require('mongoose');
var Schema = require('./db/schema.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get("/", (req, res) => {
  res.sendFile('/Users/jameshughes/wdi/yum/' + 'index.html')
})



var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

app.post('/restaurants', function (req, res) {
  Restaurant.create(req.body.restaurant).then(function (restaurant) {
    res.redirect('/restaurants/' + restaurant.name);
  });
});

function findByName(restaurant) {
  Restaurant.findOne({ name: restaurant }, function(err, restaurant) {
    if (err){
      console.log(err);
    }
    else{
      console.log(restaurant);
    }
  });
}

function findByZip(zipcode) {
  Restaurant.find({}), function(err, docs) {
    if (err){
      console.log(err);
    }
    else{
      console.log(zipcode);
    }
  }
}



app.post("/restaurants/:name/delete", function(req, res) {
  Restaurant.findOneAndRemove({name: req.params.name}).then(function() {
    res.redirect("/restaurants")
  });
});

app.post('/restaurants/:name', function(req, res) {
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then(function(err, doc) {
    res.redirect('/restaurants/' + restaurant.name);
  });
});


function addItem(restaurant, item){
  Restaurant.findOne({name: restaurant}, function(err, docs) {
    docs.item.push(new MenuItem({title: item}))
    docs.save(function (err, results) {
      if (err) {
        console.log(err);
      }
      else {
        console.log(results);
      }
    })
  });
}

function removeItem(restaurant, item) {
  Restaurant.findOneAndUpdate({name: restaurant}, {
    'pull': { items: {title: item} }
  }, { 'new': true },
  function(err, docs){
    if(err){
      console.log(err);
    }
    else {
      console.log(docs);
    }
  });
}
