var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open',function(){
  console.log("database has been connected!")
});

var Schema = mongoose.Schema
  ObjectId = Schema.ObjectId

var MenuItemSchema = new Schema ({
  title: String
})
var RestaurantSchema = new Schema ({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuItemSchema]
});

mongoose.model("Menu", MenuItemSchema);
mongoose.model("Restaurant", RestaurantSchema);

module.exports = mongoose;
