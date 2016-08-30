require("../db/schema")
var mongoose = require("mongoose")

var RestaurantModel = mongoose.model("Restaurant")
module.exports = RestaurantModel
