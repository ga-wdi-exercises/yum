var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){
  console.log("You are connected to Mongodb!")
})

var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId

var RestaurantSchema = new Schema ({
  name: String,
  address:{
    street: String,
    zipcode: Number
  },
  yelp: String,
  items: [ItemSchema]
});

var ItemSchema = new Schema ({
  title: String
})

var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var ItemModel = mongoose.model("Item", ItemSchema);

module.exports ={
  RestaurantModel: RestaurantModel,
  ItemModel: ItemModel
};
