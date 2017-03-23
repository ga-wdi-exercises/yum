const mongoose = require("mongoose");

var MenuItemSchema = mongoose.Schema({
  title: String
});

var RestaurantSchema = mongoose.Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  // items: [MenuItemSchema]
  items: [ {type: mongoose.Schema.Types.ObjectId, ref: "MenuItem"}]
})

mongoose.model("MenuItem", MenuItemSchema )
mongoose.model("Restaurant", RestaurantSchema )

mongoose.connect('mongodb://localhost/yum'), (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log("MongoDB is Connected")
  }
};

module.exports = mongoose
