var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;
db.on('error', err => {
  console.log(err);
})

db.once('open', () =>{
  console.log('connected!');
})

var Schema = mongoose.Schema
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
  yelpUrl: String,
  items: [MenuSchema]


});



var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema)
var MenuModel = mongoose.model("Menu", MenuSchema)


module.exports = {
  RestaurantModel,
  MenuModel
};
