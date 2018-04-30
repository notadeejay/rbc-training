---
uuid: e3a2e80a-c124-4227-a36b-fe39c3167b14
---

When our browser sends a request to a server, it does so using what's called an HTTP request. HTTP stands for Hyper Text Transfer Protocol. It's how our web browsers, send requests to our servers, and how our servers, respond to our web browsers. You send and receive HTTP requests and response all the time.

Every time you navigate to a webpage, your browser sends an HTTP request to a server. That server, then sends a response with the information you requested.

Depending on what you are doing on a web app, or webpage your browser will send different types of requests. Before we dive too deep into HTTP let's talk about the four common actions you take on most web apps.

## CRUD

When you interact with any web app, you are mainly doing one of four things:

- **C**reating (a resource)
- **R**eading (a resource)
- **U**pdating (a resource)
- **D**eleting (a resource)

CRUD is the acronym that describes an app that lets you create, read, update and delete resources. Let's use Twitter as an example.

When you send a tweet, you're **creating** a resource. You can also **read** all the tweets on your timeline. If Twitter allowed you to edit a tweet, you would be **updating** it, and of course, you can **delete** a tweet.

Based on which type of action the user is making, our client sends a different type of HTTP request to the server.

## HTTP requests

#### GET

To read the posts on a blog (for example), your browser will send a `GET` request.

#### POST

To create a new blog post, your browser will send a `POST` request.

#### PUT

To edit a blog post, your browser will send a `PUT` request.

#### DELETE

To delete a blog post, your browser will send a `DELETE` request.

## Response Codes

Since you're taking this course, we're guessing you like the internet and that you've spent enough time surfin' the web to have, at some point, found yourself on a **404** page. When we send an HTTP request, the response always includes a **response code**.

#### 200

When an HTTP request comes back with a 200 level response code, it means the request was successful.

#### 300

If a response is a code in the 300s, it means that the browser should redirect you (for example, because the originally requested page has been moved).

#### 400

If the server can’t find the information that was requested, it sends back a 404 response code.

#### 500

If the server "errors out" while trying to respond to your request, it sends back a 500 code.


It turns out there are several HTTP status codes, and each one has a specific reason why it might be sent back. If you're curious about the different status codes that a server can respond with check out this webpage: <https://http.cat/>

When you load a webpage into your browser, you send a GET request. Traditionally, users would send`POST`, `PUT` or `DELETE` requests when they submitted a form, and the entire page would refresh as a response.

These days it's more common for the user to submit a form or send a request, and have the response contain a smaller piece of information. Using JavaScript, the response is displayed to the user. This usually results in faster web apps and a better user experience, since every time the user takes an action, they don't have to wait for the entire page to reload.
