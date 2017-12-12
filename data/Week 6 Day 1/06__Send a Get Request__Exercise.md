---
uuid: e4357370-f55f-48c0-9422-480e9bff20bd
---

## Sending AJAX GET requests using jQuery

Helpfully, jQuery has a built in method for sending GET requests. The `$.get` jQuery method takes two arguments, the URL we're sending the GET request to, and the function that is called when the response comes back from the server.

```javascript
$.get('http://www.example.com', function(data) {
  console.log(data)
})
```

It's important to note here that the request does not happen instantly. It is **asynchronous**.

### Weather app

```javascript
https://api.openweathermap.org/data/2.5/weather?units=metric&q=London
```

**Note**: To use this API you will have to add your API key as a query param. (If you don't have an API key yet, see the [previous activity](/74fbd7e1-3c97-41a9-a6cf-a441e07958b1)). To do this, we'll add `&appid=1234` to the end of the URL.

```javascript
https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=1234
```

### Horoscope app

```javascript
http://sandipbgt.com/theastrologer/api/horoscope/scorpio/today
```

### Drinks app

```javascript
http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
```

## Tasks

- Create a function that sends a GET request to your API and `console.log`s the response.
- Add code so that the GET request is sent when the user submits the search form

## Tips & Tricks

### Query Params

Query params are pieces of information we can send through the URL to an API. To separate the query params from the rest of the URL we use `?` and to separate the query params themselves, we use `&`s.

```javascript
https://example.com?query_key=query_value&another_key=1234
```

### console.log

This is useful for debugging purposes. Log the response from your API so you can see what information you get back.
