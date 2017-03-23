var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;

Restaurant.create({
  name: 'Ruth Chris',
  "address.street": "Annapolis Rd",
  "address.zipCode": 21113,
  yelpUrl: "http://www.yelp.com/ruth-chris-odenton"},
  function (err, restaurant){
    if(err){
      return handleError(err);
    }
    console.log("Created" + restaurant.name);
  }
);

function findByName(req){
  Restaurant.findOne({name: req.name}, function(err, restaurant){
    if(err){
      console.log(err);
    }
    else{
      console.log(restaurant);
    }
  });
}

function findByZip(req){
  Restaurant.find({address: {zipCode: req.zipCode}}, function(err, restaurants){
    if(err){
      console.log(err);
    }
    else{
      console.log(restaurants);
    }
  });
}

function updateRestaurant(req, update){
  Restaurant.findOneAndUpdate({name: req.name}, {name: update}, {new: true}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  });
}

function destroy(req){
  Restaurant.findOneAndRemove({name: req.name}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  });
}

function addItem(req, item){
  Restaurant.findOne({name: req.name}, function(err, docs){
    docs.items.push(new MenuItem({title: item}));
    docs.save(function(err, results){
      if(err){
        console.log(err);
      }
      else{
        console.log(results);
      }
    });
  });
}

function removeItem(req, item){
  Restaurant.findOneAndUpdate({name: req.name}, {
    $pull: {items: {title: item}}
  }, {new: true}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  });
}
