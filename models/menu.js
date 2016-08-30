require("../db/schema")
var mongoose = require('mongoose')


//exporting the functionality of the mongoose models so the file can act as the model definition
//these model definitions allow the interface to map documents in the mongoDB to objects in the app
var MenuModel = mongoose.model("Menu")
module.exports = MenuModel
