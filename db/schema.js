var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

//menu schema must be defined before restaurant schema
var MenuItemSchema = new Schema({title: String});
var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: {type: Number}
  },
  yelp: String,
  items: [{type: Schema.ObjectId, ref: "MenuItem"}]
});

var RestaurantModel = mongoose.model('Restaurant', RestaurantSchema);
var MenuItemModel = mongoose.model('MenuItem', MenuItemSchema)

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
  console.log('db up!!!!');
})
