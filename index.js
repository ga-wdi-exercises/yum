var mongoose = require('mongoose');
var Schema = require("./db/schema.js");


var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var Item = mongoose.model("Item", ItemSchema);


Restaurant.create({ name: "Left or Right", address: { street: "Ok Street", state: "DC", zipcode: 20001, }, yelp: "http://www.yelp.com/biz/cookies-corner-washington"}, function (err, restaurant){
  if (err) return (err);
  console.log(restaurant.name, "at ", restaurant.address.state);
});

function restaurantByName(restaurant){
  Restaurant.findOne({name: restaurant}, function(err, result){
    if(err){
      console.log(err);
    }
    else{
      console.log(result);
    }
  });
}

function restaurantByZip(zipcode){
  results = [];
  Restaurant.find({}, function(err, docs){
    docs.forEach(function(restaurant){
      if(restaurant.address.zipcode === zipcode){
        results.push(restaurant)
      }
    });
    console.log(results);
  });
}

function update(restaurant, update){
  Restaurant.findOneAndUpdate({name: restaurant}, {name: update}, {new: true}, function(err, docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(restaurant.name);
    }
  });
}
