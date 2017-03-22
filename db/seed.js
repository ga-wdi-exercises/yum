var Schema = require("../db/schema.js");

var Item = Schema.Item
var Restaurant = Schema.Item

Item.remove({}, err => {
  if(err){
    console.log(err)
  }
})

Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
})

var chipotle = new Restaurant({name: "Chipotle", address: {street: "Jefferson St", zipcode: 20001}, yelpUrl: "#" })
var moes = new Restaurant({name: "Moes", address: {street:"Thomas Way", zipcode: 20003}, yelpUrl: "#" })
var albertos = new Restaurant({name: "Albertos", address: {street: "Washington Ave", zipcode: 20002}, yelpUrl: "#" })

var burrito = new Item(title: "Burrito")
var nacho = new Item(title: "Nacho")
var taquito = new Item(title: "Taquito")
var enchilada = new Item(title: "Enchilada")
var papusa = new Item(title: "Papusa")
var tamale = new Item(title: "Tamale")
var rice = new Item(title: "Rice")
var beans = new Item(title: "Beans")


var restaurants = [chipotle, moes, albertos]
var items = [burrito, nacho, taquito, enchilada, papusa, tamale, rice, beans]
