var Schema = require("../db/schema.js");


var McDowells = Schema.Doordash
var BurgerQueen = Schema.BurgerQueen

// var Schema = require("../db/schema.js");
// const models = require("./models.js")

var Schema = mongoose.Schema
var McDowellsSchema = new Schema({
name: "McDowells",
address: "123 Main Street Washington, DC 20017",
yelpUrl: "Doordash.com",
MenuItems: ["cheese", "bread"]
});
var BurgerQueenSchema = new Schema({
name: "Burger Queen",
address: "456 Easy Street Baldwin, Ny 11510",
yelpUrl: "mongoeats.com"
MenuItems: ["MenuSchema"]
});


var 20017 = require("./schema.js").McDowellsSchema;
var 11510 = require("./schema.js").BurgerQueenSchema;


McDowells.remove({}).then(() => {
    process.exit();
});

BurgerQueen.remove({}).then(() => {
    process.exit();
});
