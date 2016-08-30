// var mongoose = require('mongoose');
// var bodyParser = require('body-parser')
// var methodOverride = require('method-override')
// var restaurantsController = require("./controllers/restaurantsController")
// mongoose.connect('mongodb://localhost/reminders')
// // var Schema = require("./db/schema.js");
//
// var app = express()
//
// // app.set("port", process.env.PORT || 3001);
// app.set("view engine", "hbs");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(methodOverride('_method'))
// app.use(express.static(__dirname + '/public'))
// app.listen(4000, function(){
//   console.log("app listening on port 4000")
// })
// app.get("/restaurants", restaurantsController.index)
// // app.engine(".hbs", hbs({
// //   app.get("/", function(req, res){
// //   });
// //   app.get("/restaurants", function(req, res){
// //       Restaurant.find({}).then(function(restaurants){
// //         res.render("restaurants-index", {
// //           restaurants: restaurants
// //       });
// //     });
// //   });
//
//
//
//   // require model definitions
//   var RestaurantModel = require("Restaurant");
//   var MenuModel = require("Menu");
//
// // //Find a restaurant by name
// // function findName(restaurant){
// //   Restaurant.findOne({name: restaurant};
// // }
// //
// // // //Find all restaurants by zipCode
// // // function findZip(restaurants, zipCode){
// // //   Restaurant.find({"address.zipCode": 20006});
// // // }
// // // Create a function that updates a restaurant.
// //
// // db.restaurants.updateOne({"name": "Bertucci's"},
// // {
// //   $set: {"name": "Bertuccis"}
// // }
// // );
// //
// // //Write a function or method that deletes a restaurant.
// //
// // db.restaurants.remove({"name": "Bertuccis"})
// //
// // // Write methods to add and remove embedded menu item documents for a restaurant of your choosing.
// // // iterate through the restaurants to save them to the database after 2 menu items  have been added as subdocuments to the restaurant
// //
// //
// //
// // // //Find a restaurant by name
// // // function findName(restaurants){
// // //   db.restaurants.findOne({"name": "Bertucci's"});
// // // }
// // //
// // // //Find all restaurants by zipCode
// // // function findZip(restaurants, zipCode){
// // //   db.restaurants.find({"address.zipCode": 20006});
// // // }
// // // // Create a function that updates a restaurant.
// // //
// // // db.restaurants.updateOne({"name": "Bertucci's"},
// // // {
// // //   $set: {"name": "Bertuccis"}
// // // }
// // // );
// // //
// // // //Write a function or method that deletes a restaurant.
// // //
// // // db.restaurants.remove({"name": "Bertuccis"})
// // //
// // // // Write methods to add and remove embedded menu item documents for a restaurant of your choosing.
// // // // iterate through the restaurants to save them to the database after 2 menu items  have been added as subdocuments to the restaurant
