var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var MenuSchema = mongoose.Schema({
  title: String
})

var RestSchema = mongoose.Schema({
  name: String,
  address: {street: String, state: String, zip: Number},
  yelp: String,
  items: [MenuSchema]
})

mongoose.model("MenuSchema", MenuSchema);
mongoose.model("Restaurant", RestaurantSchema)

module.exports = {
  Restaurant: RestaurantModel,
  Menu: MenuModel
}
