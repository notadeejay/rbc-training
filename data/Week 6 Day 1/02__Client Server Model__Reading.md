---
uuid: 09636469-8f45-4904-86b0-3d69e84af055
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
