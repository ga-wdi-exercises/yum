var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/milk-n-cookies');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Connection established to: ", db.name)

  // With Mongoose, everything is derived from a Schema.
  var restaurantSchema = mongoose.Schema({
      name: String,
      address: { street: String, state: String, zipcode: Number },
      yelp: String
  })

  console.log("Restaurants look like this:", Object.keys(restaurantSchema.paths))

  // define our model
  var Restaurant = mongoose.model('Restaurant', restaurantSchema);

  console.log("The Restaurant model:", Restaurant)

  Restaurant.displayFromZipcode = function(searchZipcode){
    Restaurant.count({"address.zipcode": searchZipcode}, function (err, restaurantCount) {
      if (err) return handleError(err);
      console.log("We have", restaurantCount, "in", searchZipcode)
    })

    var query = Restaurant.find({"address.zipcode": searchZipcode});
    query.select('-_id name address.zipcode');
    query.exec(function (err, restaurants) {
      if (err) return handleError(err);
      console.log("In", searchZipcode, ":", restaurants)
    })

  }

  // List restaurants in zipcode 20001
  Restaurant.displayFromZipcode(20001)

  //Create a restaurant
  Restaurant.create({ name: 'Cookies-R-Us', "address.zipcode": 20001 }, function (err, restaurant) {
    if (err) return handleError(err);
    // saved!
    console.log("We created", restaurant.name, 'in', restaurant.address.zipcode)
    Restaurant.displayFromZipcode(20001)
  })
});
