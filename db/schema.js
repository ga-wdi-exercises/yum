var mongoose = require('mongoose')

var Schema = mongoose.Schema

var MenuItemSchema = new Schema({
  title: String
})

var RestaurantSchema = new Schema({
    name: String,
    address: {
      street: String,
      zipcode: Number
    },
    yelpUrl: String,
    items: [ MenuItemSchema ]
  })



var Restaurant = mongoose.model("Restaurant", RestaurantSchema)
var MenuItem = mongoose.model("MenuItem", MenuItemSchema)

module.exports = {
  Restaurant: Restaurant,
  MenuItem: MenuItem
}
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/yum');
// var mongoose = mongoose.connection;
// mongoose.on('error', console.error.bind(console, 'connection error:'));
//
// // db.once('open', () => {
// //   console.log("database has been connected!");
// // });
//
// var Schema = mongoose.Schema,
//   ObjectId = Schema.ObjectId
//
// var MenuItemSchema =  mongoose.Schema ({
//   title: String
// })
//
// var RestaurantSchema =  mongoose.Schema({
//   name: String,
//   address: {
//     street: String,
//     zipcode: Number
//   },
//   yelpUrl: String,
//   items: [ MenuItemSchema ]
// })
//
// const MenuItemModel = mongoose.model('MenuItem', MenuItemSchema)
// const RestaurantModel = mongoose.model('Restaurant', RestaurantSchema)
//
//
// module.exports = {
//   Restaurant: RestaurantModel,
//   MenuItem: MenuItemModel
// }
