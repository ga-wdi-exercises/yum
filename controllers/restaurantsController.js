var Schema = require("../db/schema.js");
var MenuItem = Schema.MenuItem;
var Restaurant = Schema.Restaurant;

var restaurantsController = {
  index: function(req, res){
    Restaurant.find({}, function(err, docs){
      console.log(docs);
      return docs
    });
  },
  show: function(req){
    Restaurant.findOne({"name": req.name}, function(err, docs){
      console.log(docs);
      return docs;
    });
  }

}

// restaurantsController.index();
// restaurantsController.show({name: "chinaOne"});




module.exports = restaurantsController;
