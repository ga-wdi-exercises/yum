var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// storing mongoose.Schema to Schema variable to "dangle things off it"
var Schema = mongoose.Schema

// Need to define the restaurant by using a constructor function on mongoose.Schema.  We define it here but it doesn't get inserted into the database until we create the model.
// Need to define the menu schema by using the constructor function on mongoose.Schema
var MenuSchema = new Schema({
  title: String
});

var RestarauntSchema =  new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelp: String,
  items: [MenuSchema]
});


// Creating the actual models with mongoose.model, which will inherit the schemas we just created.  This is where the collection actually gets put into the database.
var RestarauntModel = mongoose.model("Restaraunt", RestarauntSchema);
var MenuModel = mongoose.model("Menu", MenuSchema);

// need to export the models, don't fully understand the syntax but have a feeling this is straight from docs
module.exports = {
  RestarauntModel: RestarauntModel,
  MenuModel: MenuModel
}
