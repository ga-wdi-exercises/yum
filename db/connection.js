// // storing mongoose in a variable
// var mongoose = require("mongoose")
//
// // maps to mongoDB collection & defines the shape of the documents within that collection.
// var RestaurantSchema = new Schema({
//   name: String,
//   address: {
//     street: String,
//     zipCode: Number
//   },
//   yelpUrl: String,
//   items: [MenuSchema]
// })
//
// //define Schema for menus
// var MenuSchema = new Schema ({
//   title: String
// })
//
// // the schema is useless so far
// // we need to create a model using it
// // to use our schema definition, convert RestaurantSchema into a model so it can be used
// mongoose.model("Restaurant", RestaurantSchema)
// mongoose.model("Menu", MenuSchema)
// mongoose.connect("mongodb://localhost/yum")
//
// // make this available to our users in our Node applications
// module.exports = mongoose;
