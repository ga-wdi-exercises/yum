var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var MenuSchema = Schema({
  title: String
});

var RestaurantSchema = Schema({
  name: String,
  address: {
    street: String,
    state: String,
    zipcode: Number
  },
  yelp: String,
  items: [MenuSchema]
});

mongoose.model("Menu", MenuSchema);
mongoose.model("Restaurant", RestaurantSchema);
