const express = require("express")
const hbs = require("express-handlebars")
const parser = require("body-parser")
const mongoose = require("./db/connection")

const app = express()

const Restaurant = mongoose.model("Restaurant")
const Item = mongoose.model("Item")

app.set("port", process.env.PORT || 3001)
app.set("view engine", "hbs")
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout"
}))

app.use(express.static(__dirname + '/public'))
app.use(parser.urlencoded({extended: true}))

app.listen(app.get("port"), () => {
  console.log("It's aliiive!")
})

app.get("/", (req, res) => {
  res.redirect("/restaurants")
})

app.get("/restaurants", (req, res) => {
  Restaurant.find({}).then(restaurants => {
    res.render("index", {
      restaurants
    })
  })
})
