var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var Restaurant = Schema.Restaurant;
var MenuItem = Schema.MenuItem;


Restaurant.create({ name: 'Jeff\'s Jerk Hut', "address.zipcode": 20151 }, function (err, restaurant) {
  if (err) return handleError(err);
  console.log("You made ", restaurant.name, ' located in ', restaurant.address.zipcode);
});


function findName(restaurant){
  Restaurant.findOne({name: restaurant}, function(err, result){
    if(err){
      
      console.log(err);
    }
    else{

      console.log(result);

    }
  });
}


function destroy(resturant){
  Restaurant.findOneAndRemove({name: resturant}, function(err, docs){

    if(err){

      console.log(err);
    }

    else{
      console.log(docs + " has been removed. ");

    }
  });
}
