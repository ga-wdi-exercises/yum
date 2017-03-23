var mongoose = require('mongoose');
var Schema = require("./db/schema.js");
var express = require('express')
var hbs = require('express-handlebars')
var parser = require('body-parser')

var app = express()

app.use(express.static(__dirname + '/public'))
app.use(parser.urlencoded({extended: true}))

app.set('view engine', 'hbs')
app.engine('.hbs', hbs({
	extname: '.hbs',
	partialsDir: 'views/',
	layoutsDir: 'views/',
	defaultLayout: 'main-layout'
}))

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
	console.log('Working')
})

var Restaurant = models.Restaurant
var Food = models.Food

app.get('/', (req, res) => {
	res.redirect('/places')
})

app.get('/places', (req, res) => {
	Restaurant.find({}).then(restaurants => {
		res.render('index', {restaurants})
	})
})

app.post('/places', (req, res) => {
	Restaurant.create(req.body.restaurant).then(restaurant => {
		res.redirect('/places/' + restaurant.name)
	})
})

app.get('/places/:name', (req, res) => {
	Restaurant.findOne({name: req.params.name}).then(restaurant => {
		res.render('show', {restaurant})
	})
})

app.post('/places/:name', (req, res) => {
	Restaurant.findOneAndUpdate(
		{name: req.params.name},
		req.body.restaurant,
		{new: true}
		).then(restaurant => {
			res.redirect('/places/ + restaurant.name')
		})
	}
})

app.post('/places/:name', (req, res) => {
	Restaurant.findOneAndRemove({name: req.params.name}).then(() => {
		res.redirect('/places')
	})
})