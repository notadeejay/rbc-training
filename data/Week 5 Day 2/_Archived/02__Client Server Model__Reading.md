---
uuid: 98270472-7272-4836-b058-f4a42f9526c0
archived: true
---

When you load your favourite web app on your browser, you are interacting with what we call the front-end or the client of the web app. Anything you, as a user, see and interact with is the front end. However, there's much more to a web app behind the scenes.

If we pull apart a web app to look at its components, we would find three main pieces.

### Database

The database is where all of the information you input into a web app is stored. It's where your username and password would be kept, along with, for example, all the photos or videos you create.

### Server (Back End)

The server communicates with both the database and the client. When the client requests some information, the server responds with the appropriate information, which in many cases requires it to connect to the database to pull out that information.

### Client (Front End)

The client is the part of the web app that the user sees and interacts with. In this course, the client you've been using has been your web browser. For the most part, in this course we've been focusing on the front end. We've learned how to build web pages and use JavaScript to make them interactive. To add another piece to our web pages, we're going to be sending a request to a server, which will respond with some information for us to display to the user.

![](https://cl.ly/0R290h1F0m2Q/Image%202017-11-01%20at%207.52.05%20PM.png)

Generally, the client and server communicate in a few key steps:

1. Requests information from server
2. Requests information from database
3. Responds with information, to server
4. Responds with information, to client

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
