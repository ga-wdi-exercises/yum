var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema

var ResterauntSchema = new Schema ({
  name: String,
  address: String,
  yelpUrl: {street: String, zipcode: Number},
  items: String
});

var Resteraunt = mongoose.model(Resteraunt, ResterauntSchema);

module.exports = {
  Resteraunt: Resteraunt
};
