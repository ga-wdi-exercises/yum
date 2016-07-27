var mongoose = require("../db/schema.js");

var MenuItem = mongoose.model("MenuItem");
var Restaurant = mongoose.model("Restaurant");

MenuItem.remove({}).then(function() {
    console.log("done");
});
Restaurant.remove({}).then(function() {
    console.log("done");
});

var menomale = new Restaurant({
    name: "Menomale",
    address: {
        street: "2711 12th St NE",
        zipcode: 20018
    },
    yelpUrl: "http://www.yelp.com/biz/menomale-pizza-napoletana-washington",
    items: []
});

var burro = new MenuItem({
    title: "Burro D' Oliva",
    description: "A tasting of 3 house infused olive oils, served with roasted nuts and freshly baked crostini bread."
});

var prosciutto = new MenuItem({
    title: "Prosicutto e Melone",
    description: "Sliced melon topped with prosciutto di Parma, garnished with a side salad and sliced fruit."
});

var diavola = new MenuItem({
    title: "Diavola",
    description: "DOP San Marzano tomatoes, Fior di latte mozzarella, basil, spicy salami, red peppers."
});

var brookland = new MenuItem({
    title: "Brooklandissima",
    description: "Roasted zucchini, roasted eggplant, roasted peppers, artichokes, gorgonzola, fior di latte mozzarella, garlic, basil."
});

var ettore = new MenuItem({
    title: "Di Ettore (Chef's Special!)",
    description: "Fior di latte mozzarella, cherry tomatoes, arugula, prosciutto di parma, grana padano, extra virgin olive oil."
});

var bufalina = new MenuItem({
    title: "Bufalina",
    description: "Prosciutto crudo, fresh basil, Fior di latte mozzarella."
});

menomale.items.push(burro);
menomale.items.push(prosciutto);
menomale.items.push(diavola);
menomale.items.push(brookland);
menomale.items.push(ettore);
menomale.items.push(bufalina);

menomale.save().then(function() {
    process.exit();
});
