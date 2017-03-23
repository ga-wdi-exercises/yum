var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');

var db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
console.log("database has been connected!");
});

var Schema = mongoose.Schema
var  = new McDowellsSchema({
name: "McDowells",
address: "123 Main Street Washington, DC 20017",
yelpUrl: "Doordash.com",
MenuItems: ["cheese", "bread"]
});
var Schema = new BurgerQueenSchema({
name: "Burger Queen",
address: "456 Easy Street Baldwin, Ny 11510",
yelpUrl: "mongoeats.com"
MenuItems: ["MenuSchema"]
});

var McDowells = mongoose.model("McDowell", DoordashRestaurantSchema);
var Burger Queen = mongoose.model("Burger Queen", UberEatsSchema)

var 20017 = mongoose.model("20017", McDowellsSchema);
var 11510 = mongoose.model("11510", BurgerQueenSchema)



var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


module.exports= {
  McDowells,
  BurgerQueen
}
