//Allow to use mongoose dependancy
var mongoose = require('mongoose');
//Connect the connection with databse called yum
mongoose.connect('mongodb://localhost/yum');
//save that connection to the database in a variable.
var db = mongoose.connection;
// Will log an error if db can't connect to MongoDB
db.on('error', console.error.bind(console, 'connection error:'));
// Will log "database has been connected" if it successfully connects.
db.once('open', () => {console.log("database has been connected!");});

// Instantiate a namespace for our Schema constructor defined by mongoose.
var Schema = mongoose.Schema
// Create schema for the other table/collection
var MenuSchema = new Schema({
  title: String
});
// Create schema for one of the table/collection
var RestaurantSchema = new Schema({
  name: String,
  address: {
    street:String,
    zipcode:Number
  },
  yelpUrl: String,
  items:[MenuSchema]
});

// Create Model (instance of object/document/row)
var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var Menu = mongoose.model("Menu", MenuSchema)

// By adding `module.exports`, we can know reference these models in other files by requiring `schema.js`.
module.exports = {
  Restaurant,
  Menu
};
