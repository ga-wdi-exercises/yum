var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema
var ObjectId = Schema.ObjectId


var RestrauntSchema = new Schema({
  name: String,
  address: ({street: String, zipcode: Number}),
  yelpUrl: String,
  items: [{type: Schema.ObjectId, ref: "Menu"}]
})
var MenuSchema = new Schema({
  title: String
})

 var Restraunt = mongoose.model("Restraunt", RestrauntSchema);
// var Menu = mongoose.model("Menu", MenuSchema);
// module.exports = {
//   Menu: Menu,
//   Restraunt: Restraunt
// };
var mikes = new Restraunt({name:"mikes",address:({street:"1245 15th, Alexandria, Va", zipcode: 23671}),yelpUrl:"yelp.com" })
