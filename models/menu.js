require("../db/schema")
var mongoose = require('mongoose')

var MenuModel = mongoose.model("Menu")
module.exports = MenuModel
