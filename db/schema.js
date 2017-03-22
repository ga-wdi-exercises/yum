var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema

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



var Restaurant = mongoose.model("Restaurant", RestaurantSchema)
var Menu = mongoose.model("Menu", MenuSchema)

Menu.create([{ title: 'Entre' }, { title: 'Food' }, { title: 'Drink' }], (err, menu) => {
  if (err){
    console.log(err);
  }
  else{
    console.log(menu);
  }
});

Restaurant.create([
  { name: "G Street",
 address: {
  street: "1435 L st NW",
  zipcode: 20005
 },
 yelpUrl: 4,
items: Menu }], (err, restaurant) => {
  if (err){
    console.log(err);
  }
  else{
    console.log(restaurant);
  }
});
