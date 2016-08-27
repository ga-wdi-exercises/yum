var Schema = require("../db/schema.js")
var Restaurant = Schema.Restaurant
var Item = Schema.Item

var restaurantsController = {
  index: function(){
      Restaurants.find({}, function(err, docs){
        console.log(docs)
      })
  },
  showByName: function(req){
    Restaurant.findOne({"name": req.name}, function(err, docs) {
      console.log(docs);
    })
  },
  showByZip: function(req){
    Restaurant.find({"address.zipcode": req.zipcode}, function(err, docs){
      console.log(docs)
    })
  },
  update: function(req, update){
    Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err,docs){
      if(err){
        console.log(err)
      } else {
        console.log(docs)
      }
    })
  }

}

restaurantsController.update({name: "Blue 44"}, {name: "Blue 45"})
