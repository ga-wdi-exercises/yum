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
  item:[]
});


var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var Menu = mongoose.model("Menu", MenuSchema)
var Restaurant = new Restaurant({name: "Awash", address: "1400 tuckerman st nw",yelpUrl: "amlak@yahoo.com"});


 Restaurant.save((err, Restaurant) => {
   if(err){
     console.log(err);
   }
   else{
    console.log(student);
  }
 });
 Restaurant.findId(name: "Awash");
