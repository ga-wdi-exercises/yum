var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant;
var Menu = Schema.Menu;

var restaurantsController = {
  index: function(){
    Restaurant.find({}, function(err, docs){
      console.log(docs);
    });
  },
  show: function(req){
    Restaurant.findOne({"name": req.name}, function(err, docs){
      console.log(docs);
    });
  },

  update: function(req, update){
    Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err, docs){
      if(err){
        console.log(err);
      } else{
        console.log(docs);
      }
    });
  }

  destroy: function(req){
    Student.findOneAndRemove(req, function(err,docs){
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
    });
  }
};

restaurantsController.show({name: "Cookies Corner"})
