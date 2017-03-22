var Schema = require("../db/schema.js");
var MenuItem = Schema.MenuItem;
var Restaurant = Schema.Restaurant;

var restaurantsController = {
  index: function(){
    Restaurant.find({}, function(err, docs){
      console.log(docs);
      return docs
    });
  },

}

restaurantsController.index(); 



module.exports = restaurantsController;
