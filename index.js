var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/milk-n-cookies');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Connection established to: ", db.name)

  // With Mongoose, everything is derived from a Schema.
  var restaurantSchema = mongoose.Schema({
      name: String,
      address: [{ street: String, state: String, zipcode: Number }],
      yelp: String
  })

  console.log("Restaurants look like this:", Object.keys(restaurantSchema.paths))

  // define our model
  var Restaurant = mongoose.model('Restaurant', restaurantSchema);

  console.log("The Restaurant model:", Restaurant)

});
