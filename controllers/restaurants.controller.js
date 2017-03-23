var Schema = require("../db/schema.js");
var RestaurantModel = Schema.RestaurantModel
var ItemModel = Schema.ItemModel

var restaurantsController = {
  index: function(){
    RestaurantModel.find({}, function(err, docs){
      console.log(docs);
      return docs
    });
  },
  show: function(req){
    RestaurantModel.findOne({"name": req.name}, function(err, docs){
      console.log(docs);
    })
  },
  update: function(req, update){
    RestaurantModel.findOneAndUpdate(req, update, {new: true}, function(err, docs){
      if(err){
        console.log(err)
      }
      else{
        console.log(docs);
      }
    });
  },
  destroy: function(req){
    RestaurantModel.findOneAndRemove(req, function(err, docs){
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
    });
  }
  // removeItem: function(req, project){
  //   RestaurantModel.findOneAndUpdate(req, {
  //     $pull: { items: {body: project.body} }
  //   },
  //   {new: true}, function(err, docs){
  //     if(err){
  //       console.log(err);
  //     }
  //     else{
  //       console.log(docs);
  //     }
  //   });
  // }
}

// module.exports = restaurantsController: restaurantsController;
