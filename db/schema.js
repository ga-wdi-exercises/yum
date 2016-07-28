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
var Menu = mongoose.model("Menu", MenuSchema);

var mikes = new Restraunt({name:"mikes",address:({street:"1245 25th, Alexandria, Va", zipcode: 23671}),yelpUrl:"yelp.com" })

mikes.save(function(err,restraunt){
      if(err){
        console.log(err);
      }else{
        console.log(restraunt);
      }
    })

Restraunt.findOne({name:"ChickFila"})
Restraunt.findOne({zipcode:23671})

module.exports = {
  Menu: Menu,
  Restraunt: Restraunt
};
