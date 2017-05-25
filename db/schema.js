var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;

db.on('error', function(err) {
  console.log(err);
});

db.once('open', function() {
  console.log("Connected to MongoDB!");
});

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId

var MenuSchema = new Schema({
  title: String
});

var ResterauntSchema = new Schema({
  name: String,
  address: {
      street: String,
      zipcode: Number
  },
  yelpUrl: String,
  items: [MenuSchema]
});

var ResterauntModel = mongoose.model("Resteraunt", ResterauntSchema);
var MenuModel = mongoose.model("Menu", MenuSchema);

module.exports ={
  ResterauntModel: ResterauntModel,
  MenuModel: MenuModel
};
