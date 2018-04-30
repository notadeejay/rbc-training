---
uuid: 09636469-8f45-4904-86b0-3d69e84af055
archived: true
---

When you load your favourite web app in your browser, you are interacting with what we call the front-end or the client of the web app. However, there's much more to a web app behind the scenes.

If we pull apart a web app to look at its components, we would find three main pieces: a database, a server or back-end, and a client or front-end.

### Database

In a typical web app, the database is where all of the information users input into the app is stored. It's where usernames and passwords are kept, along with, for instance, all the photos or videos users upload.

### Server (back-end)

The server communicates with both the database and the client. When the client requests some information, the server responds with the appropriate information, which in many cases requires it to connect to the database to pull out that information.

### Client (front-end)

The client is the part of the web app that the user sees and interacts with. In this course, the client you've been using has been your web browser. In this course we've been focusing on the front-end. We've learned how to build web pages and use JavaScript to make them interactive. To add another piece to our web pages, we're going to be sending a request to a server, which will respond with some information for us to display to the user.

![](https://cl.ly/0R290h1F0m2Q/Image%202017-11-01%20at%207.52.05%20PM.png)

Generally, the client and server communicate in a few key steps:

1. Client requests information from server
2. Server requests information from database
3. Database responds to the server with information
4. Server responds to the client with information

When the server and the client communicate with each other, they use a language they both understand. The most common one is called is HTTP, or HyperText Transfer Protocol.

## HTTP methods

When you interact with any web app online, you are mainly doing one of four things: creating content, reading content, updating content, or deleting content.

To perform these four actions, clients – like your browser – need to include some key pieces of information as part of the requests they make to a server. One of the most important pieces of information is known as the "HTTP method". There are several different types of HTTP methods, such as GET, POST, PUTS, and DELETE/

#### GET

When your browser makes a request to, for example, read posts on a blog, it is making a GET request.


#### POST

When your browser makes a request to, for example, create a new post on a blog, it is making a POST request.

#### PUTS

When your browser makes a request to, for example, edit an existing post on a blog, it is making a PUTS request.

#### DELETE

When your browser makes a request to, for example, delete an existing post on a blog, it is making a DELETE request.

## HTTP response codes

As part of a reply to a response, a server also sends along a response code.

If you're taking this course, we're guessing you like the internet. If you've spent enough time surfin' the web, chances are you've ended up on a 404 page. When we send an HTTP request, the response always includes a **response code**.

#### 200

When an HTTP request comes back with a 200 level response code, it means the request was successful.

#### 300

If a response is a code in the 300s, it means redirection.

#### 400

If the server can't find the information that was requested, it sends back a 404 response.

#### 500

If the server errors out while trying to respond to your request, it sends back a 500 response.

## Sending GET requests using jQuery

Since we want to just **read** information from the APIs we're using, we want to send **GET** requests to our APIs.

jQuery has a built-in method for this:

```javascript
$.get('url', function(data) {
  // your code here
})
```

The `$.get` method takes two arguments, the URL we're sending the GET request to, and the function that is called when the response comes back.
