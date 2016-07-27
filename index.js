var express  = require("express");
var parser   = require("body-parser");
var hbs      = require("express-handlebars");
var mongoose = require("./db/schema");
var app      = express();

var Restaurant = mongoose.model("Restaurant");
var MenuItem = mongoose.model("MenuItem");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");

app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));

app.use("/assets", express.static("public"));
app.use(parser.json({extended:true}))

// index
app.get("/api/restaurants", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.json(restaurants)
  });
});

// show
app.get("/api/restaurants/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant){
    res.json(restaurant)
  });
});

// delete
app.delete("/api/restaurants/:name", function(req, res){
  Restaurant.findOneAndRemove({name: req.params.name}).then(function(){
    res.json({ success: true })
  });
});

// update
app.put("/api/restaurants/:name", function(req, res){
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then(function(restaurant){
    res.json(restaurant)
  });
});

// Root
app.get("/*", function(req, res){
  res.render("restaurants");
});

app.listen(app.get("port"), function(){
  console.log("Roger wilco.");
});
