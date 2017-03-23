const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/yum");
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

module.exports = mongoose;
