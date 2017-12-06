---
uuid: 974d1aa8-470a-4d7b-bb37-6965ebe3162d
---


When you load your favourite web app on your browser, you are interacting with what we call the front-end of the web application. Anything you, as a user, see and interact with is the front end. When we send out a tweet, or post a photo on Facebook, that data has to go somewhere where everyone else loading that web app has access to it.

If we pull apart a web app and look at it’s components, there will be three main pieces.

Database: Where all of a users information is stored
Server: Which communicates with the client, and decides which information to send to the database and to the server
Client: The portion of the web app the user interacts with


When the server and the client communicate with each other, they use a specific protocol. The most common protocol used, is HTTP. HTTP stands for HyperText Transfer Protocol (check this definition).

## CRUD

When you interact with any web app online, you are mainly doing one of four things:
- Creating
- Reading
- Updating
- Deleting

When a client sends a request to a server, it needs to include a few key pieces of information. The first is the type of request the client is making, also known as a method. There are several different types of requests including:

### GET

When you are reading the tweets on your timeline on twitter, you are making a GET request.


### POST

When you are creating a new tweet, you are making a POST request.

### PUTS

When you are editing  a blog post, you are sending a PUT request.

### DELETE

When a server receives a request, it responds with a few key pieces of information.

### Response Codes

If you're taking this course, we're guessing you like the internet. If you've spent enough time surfin' the web, chances are you've ended up on a **404** page.
When we send an HTTP request, the response always includes a **response code**.

#### 200

When an HTTP request comes back with a 200 level response code, it means a successful request.

### 300
If a response is a code in the 300's, it means redirection.

### 400

If the server can’t find the information that was requested - it sends back a 404.

### 500

If the server errors out while trying to respond to your request - it sends back a 500.

https://http.cat/

## Sending Get Requests using JQuery

Since we want to just **read** information from the API's we're using, we want to send a **GET** request to our API.

JQuery has a built in method for this:

```javascript
$.get('url', function(data) {

})
```

The `$.get` method takes two arguments, the url we're sending the GET request to, and the function that is called when the response comes back.

## JSON / Objects
JSON stands for **JavaScript Object Notation**. When you're using an API a common format that the response is sent in, is JSON.

It looks like a normal JavaScript Object.

## Query Params

When we send a GET request, and we need to include extra information (like a city name, or the name of a Pokemon), we can send that information in the url itself.

We can do this using a query parameter.
