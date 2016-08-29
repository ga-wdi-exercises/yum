var Restaurant = require("../db/schema.js");

var restaurantsController = {

  index: function(req, res){
    Restaurant.find({}, function(err, docs){
      res.render("../views/restaurants/index.hbs", {restaurants: docs})
    })
  }
}

module.exports = restaurantsController;
