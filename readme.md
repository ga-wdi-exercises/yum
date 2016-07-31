var bodyParser = require("body-parser");
var phpStyleParser = bodyParser.urlencoded({ extended: true })
and

app.post('/example', phpStyleParser, function(req, res) {
    console.log(req.body);
    res.json(req.body);
});
Does this still work with express 4.*? I've tried a similar approach but my array inputs get passed as strings: { 'user[last_name]': 'asd','user[first_name]': 'asd' } – Andrei Rosca Aug 24 '15 at 13:07
4	 	
@AndreiRosca, had the same issue. Fixed it by specifying {extended: true} option like: app.use(bodyParser.urlencoded({ extended: true })); – eye_mew Feb 14 at 20:59


console.log("in Function street",newaddress)
Restaurant.update({name: restaurant.name, newaddress},
  {$push:  {addresses: {newaddress} } }, {new: true}).then(function(restaurant){



Restaurant.create(req.body.restaurant), {yelpUrl: req.body.restaurant.yelpUrl} ,{address: [street: req.body.restaurant.street]}, {address: {zipcode: req.body.restaurant.zipcode}}}).then(function(restaurant){
    res.redirect("/restaurants");
  });
});


# YUM!

For Homework you will be writing a node application to practice using Mongoose. You task: create an app that tracks and stores Restaurants and Menu Items.

## Setup

Fork and clone this repo. Then run `$ npm install` to install all the modules listed in `package.json`.

You can test your code by running `$ nodemon index.js` in the Terminal.

## Part I: Mongoose

You'll begin by creating an app that performs CRUD functionality on a database using Mongoose queries. You should not be using Express yet.

1. Create schemas and corresponding models for a restaurant and for menu items.

2. Adds seed data for the restaurant and menu items...

  - A restaurant should have the following field names...

    * `name` - a string
    * `address` - an object with a `street` (string) and `zipcode` property (number)
    * `yelpUrl` - a string
    * `items` - an array containing your MenuItems schema

  - A menu item should contain the followin...

    * `title` - a string

3. Create a new restaurant.

4. Write a function or method that finds a restaurant by `name`.

5. Write a function or method that finds all restaurants by `zipCode`.

6. Create a function that updates a restaurant.

7. Write a function or method that deletes a restaurant.

8. Write methods to add and remove embedded menu item documents for a restaurant of your choosing.

## Part II: Add Express

> You will know how to do this after Monday morning's Express + Mongoose lesson. Feel free, however, to give this a shot over the weekend.

Turn YUM into an Express app with routes that you can view in your browser and forms that manipulate your data with full CRUD.

Your app should have two pages...

- A page that lists all restaurants, on which a user can create a new restaurant.
- A page that lists one restaurant and all its menu items, on which a user can...
  - Delete the restaurant.
  - Update the restaurant.
  - Create a new menu item for the restaurant.
  - Delete a menu item from the restaurant.
