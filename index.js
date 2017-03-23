const express = require('express')
const hbs = require('hbs')
const mongoose = require('./db/connection')
const parser = require('body-parser')

const app = express()

const MenuItem = mongoose.model("MenuItem")
const Restaurant = mongoose.model("Restaurant")

app.set("port", process.env.PORT || 3000)
app.set("view engine", "hbs")
app.engine('.hbs', hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}))

app.use("/assets", express.static("public"))
app.use(parser.urlencoded({extended: true}))

app.get('/restaurants', function(req, res){
  Restaurant.find({}).then((restaurants)=>{
    res.render("index", {
      restaurants: restaurants
    })
  })
})
