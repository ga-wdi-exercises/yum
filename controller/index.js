var Schema = require("../db/schema.js");
var Restaurant= Schema.Restaurant
var Menu= Schema.Menu

var restaurantsController = {
  index(){
    Restaurant.find({}, (err, restaurant) => {
      console.log(restaurant);
    });
  }
  show(req){
    Restaurant.findOne({name: req.name}, (err, restaurant) => {
      console.log(restaurant);
    });
  }


  // This method takes two arguments: (1) the old instance and (2) what we want to update it with.
  update(req, update){
    Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, (err, restaurant) => {
      if(err) {
        console.log(err)
      }
      else {
        console.log(restaurant);
      }
    });
  }
  destroy(req){
    Restaurant.findOneAndRemove(req, (err, docs) => {
      if(err){
        console.log(err);
      }
      else{
        console.log(docs);
      }
    });
  }
};
