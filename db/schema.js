//requiring mongoose dependency
var mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/restaurants');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));

//instantiate a name space for Schema constructor defined by mongoose
var Schema = mongoose.Schema,
ObjectId = Schema.ObjectId

//define Schema for menus
var MenuSchema = new Schema ({
  title: String
})

//define Schema for restaurants
var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipCode: Number
  },
  yelpUrl: String,
  menus: [MenuSchema]
})


//setting models in mongoose using schemas defined above
mongoose.model("Restaurant", RestaurantSchema)
mongoose.model("Menu", MenuSchema)

// restaurants.menus.push(restaurant1);
// restaurants.save(function(err, restaurant){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("restaurant was saved");
//   }
// })

//connects Restaurants and Menus (like a join table)
// module.exports = {
//   Restaurant: Restaurant,
//   Menu: Menu
// }
