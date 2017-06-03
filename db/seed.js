var Schema = require("../db/schema.js");
var Restaurant = Schema.Restaurant
var Menu = Schema.Menu

Student.remove({}, err => {
  if(err){
    console.log(err)
  }
});

Project.remove({}, err => {
  if(err){
    console.log(err)
  }
});

var Awash = new Restaurant({name: "Awash", address: "1400 tuckerman st nw",yelpUrl: "amlak@yahoo.com",})
Awash.save((err,Restaurant)=> {
  if(err){
    console.log(err);
  }
  else {
    console.log(Restaurant);
  }

var Asmara = new Restaurant({name: "Asmara", address: "1411 tuckerman st nw",yelpUrl: "amlakgirma@yahoo.com",itme[tibs, shiro] })
Asmara.save((err,Restaurant)=> {
  if(err){
    console.log(err);
  }
  else {
    console.log(Restaurant);
  }
var Tibs = new Menu(title: "tibs")

var shiro = new Menu(title: "shiro")
