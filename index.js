var mongoose       = require("./db/schema.js");
var express        = require("express");
var hbs            = require("hbs");
var bodyParser     = require("body-parser");
var methodOverride = require("method-override");

var Restaurant = mongoose.model("Restaurant");
var MenuItem   = mongoose.model("MenuItem");

var restaurantsController = require("./controllers/restaurantsController")

var app = express();
app.set("view engine", "hbs");
//************************THE FOLLOWING LINES ARE NOT NEEDED
//                     BECAUSE WE ARE NOT PARSING THROUGH JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
//*just practice

app.use(methodOverride('_method'))

app.listen(4000, function(){
  console.log("good to go on 4000");
})

app.get("/restaurants", restaurantsController.index)
app.get("/restuarants/new", restaurantsController.new)
app.get("/restaurants/:id", restaurantsController.show)

app.put("/authors/:id", restaurantsController.update)
app.delete("/authors/:id", restaurantsController.delete)
