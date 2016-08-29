var Schema = require("../db/schema.js")
var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

//console.log(Restaurant);

var restaurantsController = {
  index: function() {
    Restaurant.find({}, function(err, docs){
      console.log("Err: ", err);
      console.log(docs);
    });
  },
  showByName: function() {
    Restaurant.findOne({name: req.name}, function(err, docs){
      console.log(docs);
    })
  },
  showByZip: function() {
    Restaurant.findOne({address.zipcode: req.zipcode}, function(err, docs){
      console.log(docs);
    });

  },
  update: function() {
    Restaurant.findOneAndUpdate({name: req.name}, {name: update.name}, {new: true}, function(err, docs){
      if(err){
        console.log(err);
      }
      else {
        console.log(docs);
      }
    })
  }
}
restaurantsController.index();
