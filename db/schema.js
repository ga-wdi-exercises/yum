var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.on('error', function(err){
  console.log(err)
});

db.once('opne', function() {
  console.log('Connected to MongoDB!!');
});

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

var ItemSchema = new Schema ({
  title: String
})

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [ {type: Schema.ObjecId, ref: "Item"}]
});

var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var ItemModel = mongoose.model("Item", ItemSchema);

module.exports = {
  RestaurantModel: RestaurantModel,
  ItemModel: ItemModel
};
