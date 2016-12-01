var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId

 var RestaurantSchema = new Schema({
   name: String,
   address: {"street": String, "zipcode_property": Number},
   yelp_url: String,
   items: [ItemSchema]
 })


 var MenuSchema = new Schema({
   title: String
 })
