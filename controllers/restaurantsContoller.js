var Schema = require("../db/schema.js");
var RestaurantModel = Schema.RestaurantModel;
var MenuItemModel = Schema.MenuItemModel;

var resaurantsController = {
  index: function(){
    RestaurantModel.find({}, function(err, docs){
      console.log(docs);
      return docs;
    });
  },
  show: function(req){
    RestaurantModel.findOne({"name": req.name}, function(err, docs){
      console.log(docs);
      return docs;
    });
  },
  update: function(req, update){
    RestaurantModel.findOneAndUpdate(req, update, {new: true},function(err, docs){
      if(err){
        console.log(err);
      } else {
        console.log(docs);
      }
    });
  },
  destory: function(req){
    RestaurantModel.findOneAndRemove(req, function(err, docs){
      if (err) {
        console.log(err);
      } else {
        console.log(docs);
      }
    });
  },
  destoryAll: function(req){
    RestaurantModel.find({}, function(err, docs){
      if (err) {
        console.log(err);
      } else {
        docs.forEach(function(restaurant){
          if (restaurant.name === req.name) {
            restaurant.remove().then(function(results){
              console.log(results);
            });
          }
        });
      }
    });
  },
  removeMenuItem: function(req, project){
    RestaurantModel.findOneAndUpdate(req, {
      $pull: { menuItems: {body: project.body} }
    },
    {new: true}, function(err, docs){
      if (err) {
        console.log(err);
      } else {
        console.log(docs);
      }
    });
  }
};

module.exports = restaurantsController;
