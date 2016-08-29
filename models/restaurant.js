require("../db/schema");
var mongoose = require("mongoose");

var RestuarantModel = mongoose.model("Restaurant");

module.exports = RestuarantModel;
