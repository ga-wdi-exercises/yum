const express = require('express');
const hbs = require('hbs');
const parser = require('body-parser');
const mongoose = require('./db/connection.js')

//models
const Restaurant = require('./db/models.js').Restaurant;
const MenuItem = require('./db/models.js').MenuItem;

const app = express();

app.set('view engine', 'hbs');
app.set("port", process.env.PORT || 3001);

app.get('/', function(req, res){
  console.log("hello")
})



app.listen(app.get("port"), function(){
  console.log('Alive and Active');
})
