var express = require("express");
var hbs = require("express-handlebars");
var parser = require("body-parser");
var mongoose = require("./db/schema.js");

var app = express();

var Restaurant = mongoose.model("Restaurant");

app.set("port", process.env.PORT || 4010);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));

app.get("/", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.render("restaurants-index",{
      restaurants: restaurants
    });
  });
});

app.get("/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant){
    res.render("restaurants-show", {
      restaurant: restaurant
    });
  });
});

app.post("/restaurants", function(req, res){
  Restaurant.create(req.body.restaurant).then(function(restaurant){
    res.redirect("/restaurants/" + restaurant.name);
  })
})

app.post("/restaurants/:name", function(req, res){
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then(function(restaurant){
    res.redirect("/restaurants/" + restaurant.name);
  });
});

app.post("/restaurants/:name/items", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant){
    console.log(req.body.item)
    restaurant.items.push(req.body.item)
    restaurant.save(function(){
      console.log(restaurant.items)
      res.redirect("back")
    });
  })
})

app.post("/restaurants/:name/delete", function(req, res){
  Restaurant.findOneAndRemove({name: req.params.name}).then(function(){
    res.redirect("/")
  });
});

app.listen(app.get("port"), function(){
  console.log("It's aliiive!");
});
