var mongoose = require("mongoose");
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

mongoose.connect("mongodb://localhost/yum")

module.exports = mongoose;
