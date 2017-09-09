---
uuid: 98270472-7272-4836-b058-f4a42f9526c0
---

When you load your favourite web app on your browser, you are interacting with what we call the front-end of the web application. Anything you, as a user, see and interact with is the front end. When we send out a tweet, or post a photo on Facebook, that data has to go somewhere where everyone else loading that web app has access to it.

If we pull apart a web app and look at it’s components, there will be three main pieces.

Database: Where all of a users information is stored
Server: Which communicates with the client, and decides which information to send to the database and to the server
Client: The portion of the web app the user interacts with


When the server and the client communicate with each other, they use a specific protocol. The most common protocol used, is HTTP. HTTP stands for HyperText Transfer Protocol (check this definition).

When you interact with any web app online, you are mainly doing one of four things:
- Reading
- Creating
- Updating
- Deleting

[ ] Take your favourite web app and write down how you use it (i.e. write tweets, edit blog posts, share photos)


When a client sends a request to a server, it needs to include a few key pieces of information. The first is the type of request the client is making, also known as a method.

When you are reading the tweets on your timeline on twitter, you are making a GET request.

When you are creating a new tweet, you are making a POST request.

When you are editing  a blog post, you are sending a PUT request.

[ ] Go back to your list of actions on your favourite web app. Assign each of them an HTTP method.

—
When a server receives a request, it responds with a few key pieces of information.

The first, is a status code
When everything is okay with the request - the server responds with a 200 and the requested information.

If the server can’t find the information that was requested - it sends back a 404.

If the server errors out while trying to respond to your request - it sends back a 500.

- include an image or blog post with different status codes

[ ] See if you can find the 404 page for github


Which API’s are we going to be using???


TACOS: https://github.com/evz/tacofancy-api

DRINKS: Search cocktail by name
http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita


Search ingredient by name
http://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka


Lookup full cocktail details by id
http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15112


Lookup a random cocktail
http://www.thecocktaildb.com/api/json/v1/1/random.php


Search by ingredient
http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka


Search by alcoholic?
http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
http://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic


Filter by Category
http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail


Filter by Glass
http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
http://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute


List the categories, glasses, ingredients or alcoholic filters
http://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
http://www.thecocktaildb.com/api/json/v1/1/list.php?g=list
http://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
http://www.thecocktaildb.com/api/json/v1/1/list.php?a=list

Build a Trivia Game:
https://opentdb.com/api_config.php

Toronto TTC:
https://myttc.ca/developers

Game of Thrones:
https://anapioficeandfire.com/Documentation
