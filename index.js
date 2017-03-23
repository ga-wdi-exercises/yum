const express = require('express')
const hbs = require('hbs')
const mongoose = require('./db/connection')
const parser = require('body-parser')

const app = express()

const MenuItem = mongoose.model("MenuItem")
const Restaurant = mongoose.model("Restaurant")


// the review lesson with Andy really provided much of the needed information for this homework

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

// new
app.post("/", function(req, res) {
  Restaurant.create(req.body.restaurant).then(function(restaurant) {
    res.redirect("/${restaurant.name}");
  });
});
// show
app.get("/:name", function(req, res) {
  Restaurant.findOne({name: req.params.name}).then(function() {
    res.redirect("show", {restaurant});
  });
});
// delete
app.post("/:name/delete", function(req, res) {
  Restaurant.findOneAndRemove
})

// update
app.post("/:name", function(req, res) {
  Restaurant.findOneAndUpdate({name: req.params.name}, req.body.restaurant, {new: true}).then(function(restaurant) {
    res.redirect("/${restaurant.name}");
    });
});


// var mongoose = require('mongoose');
// var Schema = require("./db/schema.js");
// var RestaurantModel = Schema.RestaurantModel;
// var MenuItemModel = Schema.MenuItemModel;
//
// var RestaurantController = {
//   function(){
//     RestaurantModel.find({}, function(err, docs){
//       console.log(docs);
//       return docs;
//     });
//   }
//
// function findName(req){
//   RestaurantModel.fineOne({"name": req.name}, function(err, docs){
//     console.log(docs);
//     return docs;
//   });
// },
//
// function findZip(req){
//   restaurant.find({address: {zipcode: req.zipcode}}, (err, restaurant) =>{
//     if(err){
//       console.log(err);
//     } else {
//       console.log(docs);
//     }
//   })
// }
// function update(req, update){
//   RestaurantModel.findOneAndUpdate(req, update, {new: true},function(err, docs){
//     if(err){
//       console.log(err);
//     } else{
//       console.log(docs);
//     }
//   });
// },
// function delete(req){
//   RestaurantModel.findOneAndRemove(req, function(err, docs){
//     if(err){
//       console.log(err);
//     } else{
//       console.log(docs);
//     }
//   });
// },
// function deleteAll(req){
//   RestaurantModel.find({}, function(err, docs){
//     if (err) {
//       console.log(err);
//     } else {
//       docs.forEach(function(restaurant){
//         if (restaurant.name === req.name){
//           restaurant.remove().then(function(results){
//             console.log(results);
//           });
//         }
//       });
//     }
//   });
// },
// function removeMenuItem(req, project){
//   RestaurantModel.findOneAndUpdate(req, {
//     $pull: { menuItems: {body: project.body}}
//   }, {new: true}, function(err, docs){
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(docs);
//     }
//   });
// }
// };
