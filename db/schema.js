var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log("database has been connected!");
});

var Schema = mongoose.Schema,
 ObjectId = Schema.ObjectId

var ItemSchema = new Schema({
  title: String
})

var RestSchema = new Schema({
  name: String,
  address: {
    street: String,
    zipcode: Number
  },
  yelpUrl: String,
  items: [ItemSchema]
})

var ItemModel = mongoose.model("Item", ItemSchema);
var RestModel = mongoose.model("Rest", RestSchema);

module.exports ={
  ItemModel: ItemModel,
  RestModel: RestModel
};
