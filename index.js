var mongoose = require('mongoose');
var Schema = require('./db/schema.js');
const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get("/", (req, res) => {
  res.sendFile('/Users/jameshughes/wdi/yum/' + 'index.html')
})



var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.create({ name: 'Chabubbly', address: 'Landover St.', zipcode: 22032 }, function (err, restaurant) {
  if (err) return handleError(err);
})

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

function update(restaurant, update) {
  Restaurant.findOneAndUpdate({name: restaurant}, {name: update}, {new: true}, function(err, doc) {
    if(err){
      console.log(err);
    }
    else{
      console.log(doc);
    }
  })
}

  function destroy(restaurant) {
    Restaurant.findOneAndRemove({name: restaurant}, function (err, docs) {
      if(err){
        console.log(err);
      }
      else {
        console.log(docs);
      }
    })
  }


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
