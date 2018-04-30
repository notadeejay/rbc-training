---
uuid: 3980c9f4-6089-4f3c-8aea-5a8094b8ecbd
archived: true
---

<!-- Make sure how you explain that it will be asynchronous -->

Luckily, jQuery has a built in method for sending a get request.

The `$.get` method takes two arguments, the first the url that the request should be sent to,
and the second is a function that will be called when the request returns a response.

```javascript
$.get('https://example.com', function(data) {

})
```

## Tasks

- [ ] Create a function that sends a GET request to your API and `console.log`s the response to your console.
- [ ] Add code so that the GET request is sent when the user submits the search form

### Weather App

```javascript
https://api.openweathermap.org/data/2.5/weather?units=metric&q=London
```

**Note**: To use this API you will have to add your API key as a query param

```javascript
https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&API_KEY=1234
```
### Horoscope

```javascript
http://sandipbgt.com/theastrologer/api/horoscope/scorpio/today
```

### Drinks

```javascript
http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita
```


## Tips & Tricks


### Query Params
Query params are pieces of information we can send through the URL to an API. To separate the query params
from the rest of the url we use `?` and to separate the query params themselves, the `&` symbol.

```javascript
  https://example.com?query_key=query_value&another_key=1234
```

### console.log

This is useful for debugging purposes. Log out the response from your API so you can see what information is provided.
