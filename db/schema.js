var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId


var RestaurantSchema = mongoose.Schema({
  name: String,
  address: { street: String, state: String, zipcode: Number },
  yelp: String
});

var RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);

module.exports = {
  Restaurant: RestaurantModel
};
