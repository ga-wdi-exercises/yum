# YUM!

For Homework you will be writing a simple node application to practice using `mongoose.js` and `mongo`.

We will be creating an App that tracks and stores Restaurants and Menu Items

## Setup:

Fork and Clone Repo

```bash
npm install
```

## Instructions:

1. Create schemas and corresponding models for a restaurant and for menu items

2. Adds seeds data for the restaurant and menu items:

  - A restaurant should have the following field names:

    * name (a string)
    * address (an object with a street(string) and zipcode property(number))
    * yelp url (a string)
    * items (array containing your items schema)

  - A menu item should contain the following:

    * title (a string)

3. Create a new restaurant

4. Write a function or method that finds a restaurant by name

5. Write a function or method that finds all restaurants by zipCode

6. Create a function that updates a restaurant  

7. Write a function or method that deletes a restaurant

8. Write methods to add and remove embedded menu item documents for a restaurant of your choosing.

## Monitor your changes and test:

```
nodemon index.js
```

## After the Mongoose class:

Turn YUM into an Express app, with routes that you can view in your browser and forms that manipulate your data with full CRUD.
