var mongoose = require('mongoose')

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId

var MenuSchema = new Schema({
  title: String
})

var RestaurantSchema = mongoose.Schema({
  name: String,
  address: { street: String, zipcode: Number },
  yelp: String,
  menus: [MenuSchema]
});

mongoose.model("Restaurant", RestaurantSchema)
mongoose.model("Menu", MenuSchema)
