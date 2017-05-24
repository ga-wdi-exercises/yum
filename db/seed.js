var Schema = require("../db/schema.js");

var Menu = Schema.Menu
var Restaurant = Schema.Restaurant

Menu.remove()
Restaurant.remove()

var chowMein = new Menu({title: "Chow mein"})
chowMein.save()
var charSiu = new Menu({title: "Char siu"})
charSiu.save()
var kungPao = new Menu({title: "Kung pao"})
kungPao.save()

var escargot = new Menu({title: "Escargot"})
escargot.save()
var bouillabaisse = new Menu({title: "Bouillabaisse"})
bouillabaisse.save()
var fondue = new Menu({title: "Fondue"})
fondue.save()

var lasagne = new Menu({title: "Lasagne"})
lasagne.save()
var minestrone = new Menu({title: "Minestrone"})
minestrone.save()
var antipasto = new Menu({title: "Antipasto"})
antipasto.save()

var mrChang = new Restaurant({name: "Mr. Chang", address: "Chinatown, N.Y", zipcode: 10012, items: [chowMein, charSiu, kungPao]})
mrChang.save()
var monsieurFrancois = new Restaurant({name: "Monsieur Francois", address: "French Quarter", zipcode: 70116, items: [escargot, bouillabaisse, fondue]})
monsieurFrancois.save()
var signoreMario = new Restaurant({name: "Signore Mario", address: "Little Italy", zipcode: 10013, items: [lasagne, minestrone, antipasto]})
signoreMario.save()
