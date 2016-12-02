let mongoose = require('./db/connection');
let hbs = require("express-handlebars")
let Schema = require("./db/schema.js");
let express = require("express");
let parser = require("body-parser")
let app = express();

let Restaurant = Schema.Restaurant
let Menu = Schema.Menu

app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname: ".hbs",
  partialsDir: "views/",
  layoutsDir: "views/",
  defaultLayout: "layout-main"
}));

// app.use("/assets", express.static("public"));
app.use(parser.urlencoded({
    extended: true
}));

app.get("/restaurants", (req, res) => {
Restaurant.find({}).then((restaurants) => {
    res.render("restaurants-index", {
        restaurants
    });
});
});

app.get("/restaurants/:name", (req, res) => {
  Restaurant.findOne({name: req.params.name}).then((restaurant) => {
    items = []
    for (x of restaurant.items) {
      Menu.findOne({_id: x}).then((item) => {
        console.log(item)
      })
    }
    console.log(items)
    res.render("restaurants-show", {
      restaurant
    })
  })
})

app.post("/restaurants", (req, res) => {
  Restaurant.create(req.body.restaurant);
  res.redirect("/restaurants")
});

app.post("/restaurants/:name", (req, res) => {
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then((restaurant) =>{
    res.redirect("/restaurants/" + req.params.name)
  })
})

app.post("/restaurants/:name/menu", (req, res) => {
  menuItem = Menu.create(req.body.menu);
  Restaurant.findOne({name: req.params.name}).then((restaurant) => {
    restaurant.items.push(menuItem)
    restaurant.save();
  })
})
app.listen(4000, () => {
    console.log("app listening")
})
