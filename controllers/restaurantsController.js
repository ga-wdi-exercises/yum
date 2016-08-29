var Schema = require("../db/schema.js")
var Restaurant = Schema.Restaurant
var MenuItem = Schema.MenuItem

var restaurantsController = {
  index: function() {
    Restaurant.find({}, function(err, docs){
      console.log(docs);
    });
  }
}
restaurantsController.index();
