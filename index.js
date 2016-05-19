var mongoose = require('mongoose');
var Schema = require("./db/schema.js");

var express = require("express");
var app = express();
var hbs = require("express-handlebars");

app.set('view engine', 'hbs');
app.engine('.hbs', hbs({
  extname:      '.hbs',
  partialsDir:  'views/',
  layoutsDir:   'views/',
  defaultLayout: 'layout-main.hbs'
}))

app.get("/", function(req, res){
  res.render("layout-main");
});

app.get("/:restaurant", function(req, res){
  res.render("index");
});

app.listen(4323, function(){     // makes the app listen to port 4444 from the browser
  console.log("it works");      // at the moment, it works: http://127.0.0.1:4323/ and
});                             // it shows "it works" in the terminal running nodemon.

// =======
//
// var Restaurant = Schema.Restaurant;
// var MenuItem = Schema.MenuItem;
//
// // Create
// Restaurant.create({ name: 'Cookies-R-Us', "address.zipcode": 20001 }, function (err, restaurant) {
//   if (err) return handleError(err);
//   console.log("We created", restaurant.name, 'in', restaurant.address.zipcode);
// });
//
// // Find by name
// function findByName(restaurant){
//   Restaurant.findOne({name: restaurant}, function(err, result){
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log(result);
//     }
//   });
// }
//
// // Find all by zip
// function findByZip(zipcode){
//   results = [];
//   Restaurant.find({}, function(err, docs){
//     docs.forEach(function(rest){
//       if(rest.address.zipcode === zipcode){
//         results.push(rest);
//       }
//     });
//     console.log(results);
//   });
// }
//
// // Updating resturant
// function update(resturant, update){
//   Restaurant.findOneAndUpdate({name: resturant}, {name: update}, {new: true}, function(err, docs){
//     if(err){
//       console.log(err)
//     }
//     else{
//       console.log(docs);
//     }
//   });
// }
//
// // Deleting resturant
// function destroy(resturant){
//   Restaurant.findOneAndRemove({name: resturant}, function(err, docs){
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log(docs + " was deleted!");
//     }
//   });
// }
//
// // Add sub document
// function addItem(resturant, item){
//   Restaurant.findOne({name: resturant}, function(err, docs){
//     docs.items.push(new MenuItem({title: item}))
//     docs.save(function(err, results){
//       if(err){
//         console.log(err)
//       }
//       else{
//         console.log(results);
//       }
//     })
//   });
// }
//
// // Remove sub document
// function removeItem(resturant, item){
//   Restaurant.findOneAndUpdate({name: resturant}, {
//     $pull: { items: {title: item} }
//   },
//   {new: true}, function(err, docs){
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log(docs);
//     }
//   });
// }
// >>>>>>> ad908abc634fe7093952c8eab80a849b5479c112
