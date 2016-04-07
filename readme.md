# YUM!

For Homework you will be writing a simple node application to practice using `mongoose.js` and `mongo`.

We will be creating an App that tracks and stores Restaurants and Menu Items

## Setup:

Fork and Clone Repo

```bash
npm install
```

## Instructions:

1. Create Schemas and Corresponding Models for A Restaurant and for Menu Items

2. Adds Seeds Data for the Restaurant and Menu Items:

  - A Restaurant should have the following attributes:

    * name (a string)
    * address (an object with a street and zipcode property)
    * yelp url (a string)
    * items (array containing your items schema)

  - A Menu Item should contain the following:

    * title (a string)

3. Write Methods to preform full CRUD functionality for your Restaurant Model

4. Write Methods to preform full CRUD functionality for your embedded menu documents for a Restaurant of your choosing.

## Monitor your changes and test:

```
nodemon index.js
```
