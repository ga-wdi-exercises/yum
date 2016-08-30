require("../db/schema")
var mongoose = require("mongoose")

var ItemModel = mongoose.model("Item")
module.exports = ItemModel

//we're exporting functionality of these models so the file can act as the model definition, so we now have an interface that maps documents in our mongoDB to objects in the applicaiton
