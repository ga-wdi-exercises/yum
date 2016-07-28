var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId

 var MenuItemSchema = mongoose.Schema({
   title: String
 });



module.exports = {
  Restaurant: RestaurantModel,
  MenuItem: MenuItemModel
