var express = require("express");
var parser = require("body-parser");
var methodOverride = require('method-override')
var hbs = require("express-handlebars");
var mongoose = require("./db/connection");
// mongoose.Promise = global.Promise;

var Restaurant = mongoose.model("Restaurant");
var Menu = mongoose.model("Menu");

var app = express();

// var Restaurant = Schema.Restaurant;
// var Menu = Schema.Menu;

app.set("port", process.env.PORT || 8080);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));
app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended: true}));
app.use(methodOverride('_method'))

app.get("/", function(req, res){
  Restaurant.find({}).then(function(restaurants){
    res.render("index", {
      restaurants: restaurants
    });
  });
});

app.get("/:name", function(req, res){
  var name = req.params.name
  Restaurant.findOne({name: name}).then(function(restaurant){
    res.render("show", {
      restaurant: restaurant
    });
  });
});

app.post("/", function(req, res){
  Restaurant.create(req.body).then(function(restaurant){
    res.redirect("/" + restaurant.name);
  });
});

app.delete("/:name/delete", function(req, res){
  Restaurant.findOneAndRemove({name: req.params.name}).then(function(){
    res.redirect("/")
  });
});

app.put("/:name", function(req, res){
  Restaurant.findOne({name: req.params.name}).then(function(restaurant) {
    restaurant.name = req.body.name;
    restaurant.save(function(err){
      if(!err){
        res.redirect("/" + restaurant.name);
      }
    })
  });
});

app.listen(app.get("port"), function(){
  console.log("Time for some restauranting");
});




//
// function newRestaurant(name, street) {
//   Restaurant.create({ name: name, "address.street": street}, function(err, restaurant){
//     if (err) return handleError(err);
//     console.log("Restaurant created ", restaurant.name)
//   })
// }
//
// function findName(restaurant) {
//   Restaurant.findOne({name: restaurant}, function(err, result){
//       console.log(result);
//   });
// }
//
// function findZipcode(zipcode) {
//   Restaurant.find({}, function(err, docs){
//     var codeResults = [];
//     docs.forEach(function(res) {
//       if (res.address.zipcode == zipcode){
//         codeResults.push(res);
//       }
//     });
//     console.log(codeResults);
//   })
// }
//
// function updateRestaurantName(name, update) {
//   Restaurant.findOneAndUpdate({name: name}, {name: update}, {new:true},
//   function(err, docs){
//     console.log(docs);
//   })
// }
//
// function deleteRestaurant(name) {
//   Restaurant.findOneAndRemove({"name": name}, function(err, docs){
//     console.log(docs);
//   });
//   console.log("Deleted a restaurant");
// }
//
// function addMenuItems(name, item){
//   Restaurant.findOne({"name": name}, function(err, docs){
//     docs.items.push(new Menu({title: item}))
//     docs.save(function(err, results){
//       console.log(results)
//     })
//   });
// }
//
// function removeMenuItems(restaurant, item){
//     Restaurant.findOneAndUpdate({name: restaurant}, {
//       $pull: {items: {title: item}}
//     },
//     {new: true}, function(err, docs) {
//       console.log(docs)
//   });
// }




// removeMenuItems("Yum, Yum", "Ham and cheese sandwich")
// addMenuItems("Yum, Yum", "Ham and cheese sandwich")
// deleteRestaurant("Yum, Yum");
// newRestaurant("okay", "400 way st")
// updateRestaurantName("yummy", "alright")
// findZipcode(20001);
// findName('Yum, Yum');
