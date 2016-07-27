

// Need to get server working


var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
// var app = express()
//
// app.get("/:name", function(res, req){
//   res.send(req.params.name)
// })
//
// app.listen(process.env.PORT || 3001, function(){
//   console.log("It's aliiive!");
// })


var Place = Schema.Place
var Menu = Schema.Menu

Model.find({}).then(function(model){
  console.log(model)
})

//create a new restaurant
Place.create({name: "h", address: {street: "pleasant street", zipcode:20001}, yelpUrl:"z"},
function (err, place) {
  if (err) {
    console.log(err)
  }
  else {
    console.log(place)
  }
})

Place.findOne({name: state.params.name}, function (err, place) {
  if (err) {
    console.log(err)
  }
  else {
    console.log(place)
  }
})

Place.findAll({})
