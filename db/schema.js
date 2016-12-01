var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

var MenuSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelp_url: String,
  menu_items: [MenuSchema]
});

var MenuModel = mongoose.model("Menu", MenuSchema);
var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);


module.exports={
  MenuModel: MenuModel,
  RestaurantModel: RestaurantModel
};
