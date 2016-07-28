var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem


Restaurant.create({name: "Taco Mamacita", "address.street": "123 this street", "address.zipcode": 12345}, function(err, restaurant){
  if (err){
    console.log(err)
  }else {
    console.log(restaurant)
  }
})

function findRestaurantByName(restaurant){
  Restaurant.findOne({name: restaurant}, function(err){
    if (err){
      console.log(err)
    } else {
      console.log(restaurant)
    }
  });
}

function findRestaurantByZipCode(zipcode){
  Restaurant.find({}, function(err, restaurants){
    restaurants.forEach(function(restaurant){
      if(restaurant.address.zipcode === zipcode){
        results.push(restaurant)
      }
    });
    console.log(results);
  });
}

function findRestaurantAndUpdate(restaurant, update){
  Restaurant.findOneAndUpdate({name: restaurant}, {name: update}, {new: true}, function(err, docs){
    if (err){
      console.log(err)
    } else {
      console.log(docs)
    }
  })
}

function deleteRestauarant(restaurant){
  Restaurant.findOneAndRemove({name: restaurant}, function(err, docs){
    if (err){
      console.log(err)
    } else {
      console.log(docs + " deleted");
    }
  });
}

function addMenuItem(restaurant, item){
  Restaurant.findOne({name: restaurant}, function(err, docs){
    docs.items.push(new MenuItem({title: item}))
    docs.save(function(err, item){
      if(err){
        console.log(err)
      } else {
        console.log(item)
      }
    })
  });
}

function removeMenuItem(restaurant, item){
  Restaurant.findOneAndUpdate(req,{
    $pull: {items: {title: item}}
  },
  {new: true}, function(err, docs){
    if(err){
      console.log(err)
    } else {
      console.log(docs);
    }
  });
}
