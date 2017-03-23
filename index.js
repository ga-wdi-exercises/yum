var mongoose = require("./db/schema.js");
var Restaurant = mongoose.model("Restaurant")

// app.get("/api/restaurants", function(req, res){
  app.get("/restaurants", function(req, res){
 Restaurant.find({}).then(function(restaurants){
   res.json(restaurants);
 });
});

// app.get("/api/candidates", function(req, res){
//  Candidate.find({}).then(function(candidates){
//    res.json(candidates);
//  });
// });
