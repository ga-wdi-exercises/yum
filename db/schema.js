var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {

  var Schema = mongoose.Schema,
  ObjectId = Schema.ObejectId;

  var ItemSchema = new Schema({
    title: String
  });

  var RestaurantSchema = new Schema({
    name: String,
    address: {street: String, zipcode: Number},
    yelp_url: String,
    items: [ItemSchema]
  });

  var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema);
  var ItemModel = mongoose.model("Item", ItemSchema);

  var diner = new RestaurantModel({name: "The Diner", address:{street: "101 18th Street", zipcode: 20006}, yelp_url:"www.yelp.com"});

  var chicken = new ItemModel({title: "chicken"});

  diner.items.push(chicken);
  diner.save(function(err, restaurant){
    if (err){
      console.log(err);
    }
    else{
      console.log(restaurant);
    }
  });


});
