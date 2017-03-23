const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
const db = mongoose.connection;

// Will log an error if db can't connect to MongoDB
db.on('error', console.error.bind(console, 'connection error:'));


db.once('open', () => {
    console.log("database connected")
});

module.exports = mongoose;
