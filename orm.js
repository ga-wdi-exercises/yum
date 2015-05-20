
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/milk-n-cookies');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// With Mongoose, everything is derived from a Schema.
var restaurantSchema = mongoose.Schema({
  name: String,
  address: { street: String, state: String, zipcode: Number },
  yelp: String
})


console.log("Restaurants look like this:", Object.keys(restaurantSchema.paths))

// define our model
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

// public interface
module.exports = {
  connect: function(callback){
    db.once('open', function(){
      console.log("Connection established to: ", db.name)
      callback()
    });
  },
  Restaurant: Restaurant
}
