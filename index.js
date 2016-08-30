var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var express = require("express");
var hbs     = require("express-handlebars");
var parser = require("body-parser");
var methodOverride = require("method-override")
var restaurantsController = require("./controllers/restaurantsController")
var app = express();
var Restaurant = mongoose.model("Restaurant");

app.set("port", process.env.PORT || 3002);
app.set("view engine", "hbs")
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use(parser.json());
app.use(parser.urlencoded({extended: true}))
app.use(methodOverride('_method'));

app.get("/restaurants", restaurantsController.index)
app.get("/restaurants/:id", restaurantsController.show)
app.get("/restaurants/:id/edit", restaurantsController.edit)
app.post("/restaurants", function(req,res){
  Restaurant.create(req.body.restaurant).then(function(restaurant){
    res.redirect(`/restaurants/`)
  })
})

app.put("/restaurants/:id", restaurantsController.update)
// app.delete("/restaurants/:id", restaurantsController.delete)
app.post("/restaurants/:id/items", restaurantsController.addItem)
// app.delete("/restaurants/:restaurantId/items/:id", restaurantsController.removeReminder)

app.listen(app.get("port"), function(){
  console.log("Hey Im awake!");
});
