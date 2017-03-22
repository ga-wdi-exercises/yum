//Initializing Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

// Save that connection to the database in a variable.
var db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', console.error.bind(console, 'connection error:'));

// Will log "database has been connected" if it successfully connects.
db.once('open', () => {
  console.log('database has been connected!');
});

//Schema
var Schema = mongoose.Schema;

var MenuitemSchema = new Schema({
  title: String,
});

var RestaurantSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [MenuitemSchema]
});

//Models
var Menuitem = mongoose.model('MenuItem', MenuitemSchema);
var Restaurant= mongoose.model('Restaurant', RestaurantSchema);

module.exports = {
    Menuitem: Menuitem,
    Restaurant: Restaurant
};
