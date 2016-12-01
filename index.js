var mongoose = require('mongoose');
var Schema = require("./db/Schema.js");

var Restaurant = Schema.RestaurantModel;
var MenuItem = Schema.MenuItemModel;

function Restaurant(restaurant, street, zip, yelp){
  restaurant.create({
    name: restaurant,
    address: street,
    zipcode: zipcode,
    yelpUrl: linkYelp
  });
})

function addToMenu(restaurant, food){
  Restaurant.findOne({name: restaurant}, function(err, docs){
    docs.menuItem.push(new MenuItem({title: food}));
    docs.save(function(err, results){
      if(err){
        console.log(error);
      }
      else {
        console.log(result);
      }

    });
  });
function deleteRest(restaurant){
  Restaurant.findOneAndRemove({name: restaurant}, function(err, docs){
    if(err){
      console.log(docs);
    }
    else{
      console.log(docs + "removed");
    }
  });
}
