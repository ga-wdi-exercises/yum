// var mongoose = require('./db/connection.js')
var mongoose = require('mongoose')
var Schema = require("./db/schema.js")

var Item = Schema.Item
var Restaurant = Schema.Restaurant

console.log("var mongoose: ",mongoose)
console.log("var Schema: ",Schema)
console.log("var Item: ",Item)
console.log("var Restaurant: ",Restaurant)

// 4
function findByName(name) {
  return
}
