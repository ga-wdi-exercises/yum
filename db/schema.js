var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema

var RestaurantSchema = new mongoose.Schema(
  {
    name: String,
    address:{
      street: String,
      zipcode: Number
    },
    yelpURL: String
  }
)


//
// var Menu_itemSchema = new mongoose.Schema({
//     title: String
//   }
// )

mongoose.model("Restaurant", RestaurantSchema);
// mongoose.model("Menu_item", Menu_itemSchema)
//
// module.exports = {
//   Restaurant: Restaurant,
//   // Menu_item: Menu_itemModel
// }
