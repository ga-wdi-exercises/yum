var mongoose = require('mongoose')
var Schema = require("../db/schema.js")

var RestaurantModel = Schema.RestaurantModel
var MenuModel = Schema.MenuModel

var restaurantsController = {
  index: function(){
    RestaurantModel.find({}, function(err, docs){
      res.render("restaurants/index", {restaurants: docs})
    })
  },

}



module.exports = restaurantsController
