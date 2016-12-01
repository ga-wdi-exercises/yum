var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;

// will console.log an error when connecting to mongoose
// db.on("err", function(err){
//   console.log(err);
// });

db.on('error', console.error.bind(console, 'connection error:'));

// will console.log when database has connected
db.once("open", function(){
  console.log("database has connected!");
});


var Schema = mongoose.schema,
  ObjectId = Schema.ObjectId;

  var RestaurantsSchema = new Schema({
    name: String,
    cuisine: String,
    address: String
  });

  var RestaurantModel = mongoose.model("Restaurant", RestaurantSchema)
