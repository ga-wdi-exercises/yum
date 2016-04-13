var mongoose = require('mongoose');
var Schema = require("./db/schema");

var RestaurantModel = Schema.RestaurantModel
var MenuModel = Schema.MenuModel

RestaurantModel.create({ name: 'El Chucho', "address.zipcode": 20001 }, function (err, restaurant) {
  if(err){
    console.log(err)
  }
  else{
    console.log(restaurant)
  }
});

function findByName(restaurant){
  RestaurantModel.findOne({name: restaurant}, function(err, docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs)
    }
  });
};

function findByZip(zipcode){
  var rests = [];
  RestaurantModel.find({}, function(err, docs){
    docs.forEach(function(restaurant){
      if(restaurant.address.zipcode == zipcode){
        rests.push(restaurant)
      }
    });
    console.log(rests);
  });
};

function updateRestaurant(restaurant, newname){
  RestaurantModel.findOneAndUpdate({name: restaurant}, {name: newname}, {new: true}, function(err, docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs);
    }
  });
};

function deleteRestaurant(restaurant){
  RestaurantModel.findOneAndRemove({name: restaurant}, function(err, docs){
    if(err){
      console.log(err)
    }
    else{
      console.log(docs);
    }
  });
};

function addMenuItem(restaurant, menu_item){
  RestaurantModel.findOne({name: restaurant}, function(err, docs){
    console.log("mmk: " + docs);
    docs.menu_items.push(new MenuModel({title: menu_item}))
    docs.save(function(err,results){
      if(err){
        console.log(err)
      }
      else{
        console.log(results);
      }
    })
  });
};

function removeMenuItem(resturant, menu_item){
  RestaurantModel.findOneAndUpdate({name: resturant}, {
    $pull: { menu_items: {title: menu_item} }
  },
  {new: true}, function(err, docs){
    if(err){
      console.log(err);
    }
    else{
      console.log(docs);
    }
  });
};

findByName('El Chucho');
findByZip(74105);
addMenuItem('El Chucho', 'tacos');
addMenuItem('El Chucho', 'guac');
removeMenuItem('El Chucho', 'guac');
updateRestaurant('El Chucho', 'El Chucho Pucho');
deleteRestaurant('El Chucho Pucho');
