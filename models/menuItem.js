require("../db/schema")
var mongoose = require("mongoose")

var MenuItemModel = mongoose.model("MenuItem")
module.exports = MenuItemModel
