var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var restaurantController = require('./controllers/restaurantController');

mongoose.createConnection('mongodb://localhost/yum');

var app = express();

app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(methodOverride('_method'));

app.use(express.static(__dirname + '/public'));

app.listen(4000, function(){
  console.log('app is listening on port 4000');
});

app.get("/", restaurantController.index);
app.get("/new", restaurantController.new);
app.get("/:id/edit", restaurantController.edit);
app.post("/", restaurantController.create);
app.put("/:id", restaurantController.update);
app.get("/:id", restaurantController.show);
app.delete("/:id", restaurantController.delete);
