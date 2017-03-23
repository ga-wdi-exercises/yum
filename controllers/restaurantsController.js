var Schema = require("../db/schema.js")
var Restaurant = Schema.Restaurant
var Item = Schema.Item

var restaurantsController = {
  index(){
    Restaurant.find({}, (err, restaurants) => {
      console.log(restaurants)
    })
  },
  show(req){
    Restaurant.findOne({name: req.name}, (err, restaurant) =>{
      console.log(restaurant);
    })
  },
  update(req, update){
    Restaurant.findOneAndUpdate(req, update, {new: true}, (err, restaurant) => {
      if(err){
        console.log(err);
      } else {
        console.log(restaurant);
      }
    })
  },
  destroy(req){
    Restaurant.findOneAndRemove(req, (err, restaurant) => {
      if(err){
        console.log(err);
      } else {
        console.log(restaurant);
      }
    })
  }
}

restaurantsController.index();
restaurantsController.show({name: "Chik-Fil-A"});
