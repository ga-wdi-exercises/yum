var Schema = require("../db/schema.js")
var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

console.log(Restaurant);

var restaurantsController = {
  index: function() {
    Restaurant.find({}, function(err, docs){
      console.log("Err: ", err);
      console.log(docs);
    });
  }
}
restaurantsController.index();
