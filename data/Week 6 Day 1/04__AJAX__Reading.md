---
uuid: df90a39d-4c32-4ea3-91be-32a093c18768
---

## Why AJAX?

AJAX stands for **Asynchronous JavaScript and XML**. It lets us send HTTP requests using JavaScript.

Traditionally, when you wanted to update any part of the page (for example to see more products or to read the next blog post) you had to reload the *whole* page. The larger a page was, the longer that took to load. That's what we call a poor user experience. Nowadays, however, we (often) use AJAX to request a smaller piece of information (like a part of a page, such as a few more products or the next blog post), and then we use JavaScript to add that information to the appropriate spot on the page.

jQuery has several built in functions that help us send AJAX requests. Since our apps mainly allow users to **read** information, we're going to use AJAX to send GET requests.

## Sending AJAX GET requests using jQuery

The `$.get` jQuery method takes two arguments, the URL we're sending the GET request to, and the function that is called when the response comes back from the server.

```javascript
$.get('example.com/awesome-information', function(data) {
  console.log(data)
})
```

It's important to note here that the request does not happen instantly but that it is **asynchronous**. Asynchronous means that the response doesn't come back immediately. It will take some time for the server to send a response back. If we want to do something with the data returned by the response, we need to write the code that does that inside of the function called by the `$.get` request (that is, inside the callback).

## JSON / Objects

JSON stands for **JavaScript Object Notation**. Commonly, the responses to requests you make to an API are returned in JSON format.

JSON is a string that looks like a JavaScript object. It's a minimal, easy to read format for structuring data. It's easy for machines to parse, and for humans to read.

## Query params

When we send a GET request and we need to include extra information (like a city name or a horoscope star sign), we can send that information in the URL itself. We can do this using a query parameter (or param for short).

A query param is made up of a key-value pair, and we add it to the end of a URL by adding a `?` followed by our key, then an equals sign, and finally the value.

```javascript
http://www.example.com?key=value
```

We can include more than one query param by separating each key-value pair using an ampersand (`&`).

```javascript
http://www.example.com?key=value&location=Lighthouse
```

## Resources

Here is an article you might find helpful if you're looking to learn more about AJAX: <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data#Enter_Ajax>
