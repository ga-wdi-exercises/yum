var express = require("express");
var app = express();
var restaurantsController = require("./controllers/restaurantsController.js");

app.set("view engine", "hbs")

app.listen(4000, function(){
  console.log("app listening on port 4000")
})

//restaurant index controller//
app.get("/restaurants", restaurantsController.index);

//restaurant show controller//
app.get("/restaurant/:id", restaurantsController.show);
