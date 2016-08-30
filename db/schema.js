//**********************PRELIMINARY SET-UP*******************
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yum');

var db       = mongoose.connection;
//what is the point of setting the connection equal to the local
//variable? If we need to access this variable we would need to
//require this file... in which case we can instantiate the variable
//when needed... It just seems pointless here.
db.on('error', console.error.bind(console, 'connection error:'));

var Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId;

//****************MODEL SCHEMA DEFINITIONS******************
var MenuItemSchema   = new Schema({
  title: String
})

var RestaurantSchema = new Schema({
                       name   : String,
                       address: {
                                Street : String,
                                Zipcode: Number
                                },
                       yelp   : String,
                       items  : [MenuItemSchema]
})


mongoose.model("Restaurant", RestaurantSchema)
mongoose.model("MenuItem", MenuItemSchema)

module.exports = mongoose
