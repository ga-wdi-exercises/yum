var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
var Schema = mongoose.Schema

db.on('error', console.error.bind(console, 'connection error:'));

var MenuSchema = new Schema({
  title: String

});
var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number,
    menus: [MenuSchema]
  },
  yelpUrl: String,
  item:[MenuSchema]
});


var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var Menu = mongoose.model("Menu", MenuSchema)

module.export = {
  Restaurant: Restaurant,
  Menu: Menu
}

 Restaurant.save((err, Restaurant) => {
   if(err){
     console.log(err);
   }
   else{
    console.log(student);
  }
 });
 
