const express = require("express")
const Restaurant = require("./db/schema.js").Restaurant
const Menu = require("./db/schema.js").Menu
const hbs = require("hbs")
const parser = require("body-parser")

const app = express()

function findByName(restaurant) {
  Restaurant.find({name: restaurant}, (output) => {
    console.log(output);
  })
}

function findByZip(zip) {
  output = []
  Restaurant.find({}, (err, docs) => {
    docs.forEach((result) => {
      if(result.address.zipcode === zip) {
        output.push(result)
      }
    })
    console.log(output);
  })
}

function updateRestaurant(restaurant, update) {
  Restaurant.findOneAndUpdate({name: restaurant.name}, {new: true}, (err, output) => {
    console.log(output);
  })
}

function deleteRestaurant(restaurant) {
  Restaurant.findOneAndRemove(restaurant, (err, docs) => {
    console.log(docs);
  })
}

function deleteMenu(restaurant, menuItem) {
  Restaurant.findByIdAndUpdate(this._id, {
    $pull: {
      items: { title: menuItem }
    }, {new: true}, (err, docs) => {
      console.log(docs);
    }
  })
}

Restaurant.create({ name: "Buredo", "address.zipcode": 20005}, (err, restaurant) => {
  console.log(restaurant);
})
