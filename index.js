// var mongoose = require('./db/connection.js')
var mongoose = require('mongoose')
var Schema = require("./db/schema.js")

var Item = Schema.Item
var Restaurant = Schema.Restaurant

// console.log("var mongoose: ",mongoose)
// console.log("var Schema: ",Schema)
// console.log("var Item: ",Item)
// console.log("var Restaurant: ",Restaurant)

// 4
function findByName(nameStr) {
  Restaurant.findOne({name: nameStr}, function(err, result) {
    if(err) {
      console.log(err)
    } else {
      console.log(result)
      return result
    }
  })
}

function findByZip(zip) {
  Restaurant.find({zipcode: zip}, function(err, result) {
    if(err) {
      console.log(err)
    } else {
      console.log(result)
      return result
    }
  })
}

console.log(findByName("Copycat"))
// not working
console.log(findByZip("20003"))
