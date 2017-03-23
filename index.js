var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var RestaurantModel = Schema.RestaurantModel;
var MenuItemModel = Schema.MenuItemModel;

var RestaurantController = {
  function(){
    RestaurantModel.find({}, function(err, docs){
      console.log(docs);
      return docs;
    });
  }

function findName(req){
  RestaurantModel.fineOne({"name": req.name}, function(err, docs){
    console.log(docs);
    return docs;
  });
},

function findZip(req){
  Resturant.find({address: {zipcode: req.zipcode}}, (err, restaurant) =>{
    if(err){
      console.log(err);
    } else {
      console.log(docs);
    }
  })
}
function update(req, update){
  RestaurantModel.findOneAndUpdate(req, update, {new: true},function(err, docs){
    if(err){
      console.log(err);
    } else{
      console.log(docs);
    }
  });
},
function delete(req){
  RestaurantModel.findOneAndRemove(req, function(err, docs){
    if(err){
      console.log(err);
    } else{
      console.log(docs);
    }
  });
},
function deleteAll(req){
  RestaurantModel.find({}, function(err, docs){
    if (err) {
      console.log(err);
    } else {
      docs.forEach(function(restaurant){
        if (restaurant.name === req.name){
          restaurant.remove().then(function(results){
            console.log(results);
          });
        }
      });
    }
  });
},
function removeMenuItem(req, project){
  RestaurantModel.findOneAndUpdate(req, {
    $pull: { menuItems: {body: project.body}}
  }, {new: true}, function(err, docs){
    if (err) {
      console.log(err);
    } else {
      console.log(docs);
    }
  });
}
};
