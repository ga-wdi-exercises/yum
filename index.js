const express = require("express")
const hbs = require("express-handlebars")
const parser = require("body-parser")
const db = require("./db/schema.js")

const app = express()

const Restaurant = db.Restaurant
const Item = db.Item

app.set("view engine", "hbs")

app.use(express.static(__dirname + '/public'))
app.use(parser.urlencoded({extended: true}))

app.listen(4000, () => {
  console.log("Application running on port 4000")
})
