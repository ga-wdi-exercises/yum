var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/milk-n-cookies');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log("Connection established to: ", db.name)
});
