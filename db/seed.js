var Schema = require("../db/schema.js");

var Menu = Schema.Menu
var Restaurant = Schema.Restaurant

Menu.remove()
Restaurant.remove()

var chowMein = new Menu({title: "Chow mein"})
var charSiu = new Menu({title: "Char siu"})
var kungPao = new Menu({title: "Kung pao"})

var escargot = new Menu({title: "Escargot"})
var bouillabaisse = new Menu({title: "Bouillabaisse"})
var fondue = new Menu({title: "Fondue"})

var lasagne = new Menu({title: "Lasagne"})
var minestrone = new Menu({title: "Minestrone"})
var antipasto = new Menu({title: "Antipasto"})

var mrChang = new Restaurant({name: "Mr. Chang", address: "Chinatown, N.Y", zipcode: 10012, items: [chowMein, charSiu, kungPao]})
var monsieurFrancois = new Restaurant({name: "Monsieur Francois", address: "French Quarter", zipcode: 70116, items: [escargot, bouillabaisse, fondue]})
var signoreMario = new Restaurant({name: "Signore Mario", address: "Little Italy", zipcode: 10013, items: [lasagne, minestrone, antipasto]})
