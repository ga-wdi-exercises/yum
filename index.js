const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(4000, () => {
  console.log("app listening on port 4000");
});
