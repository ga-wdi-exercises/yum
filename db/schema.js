var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/menu_items");

var db = mongoose.connection;

db.on("error", function(err){
  console.log(err);
});

db.once("open", function() {
  console.log("Connected to MongoDB!");

});

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var MenuItemSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipCode: Number
  },
  yelp_url: String,
  items: [MenuItemSchema]
});

var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
var MenuItemModel = mongoose.model("Item", MenuItemSchema);

module.exports = {
  RestaurantModel: RestaurantModel,
  MenuItemModel: MenuItemModel
};
