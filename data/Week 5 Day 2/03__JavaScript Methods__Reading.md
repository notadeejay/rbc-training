---
uuid: 21777904-61cf-44e5-9fcc-07cf539288b3
---


As you move through your project you might find some JavaScript methods and examples will come in handy.


<!-- This is here because students using the Weather API might want to parse the times of sunset and sunrise -->
## Date

Some of your API's might return the date as a **unix timestamp**. What this is is the number of
seconds that have passed since January 1, 1970 UTC. It's a common way to store time when we're building
web applications.

The `Date` function in JavaScript let's us use unix timestamps, and has some built in methods that allow us to parse our unix timestamp into something more readable.

```javascript
  var date = new Date(timestamp);
```

Note that a Date expects a timestamp to be in milliseconds, if you have one that in seconds, you can multiply it by a thousand, and then create a new date.

```javascript
  var date = new Date(timestamp * 1000)
```

### getHours

Returns the hour (0-23)

```javascript
date.getHours()
```

### getMinutes

Returns the minutes (0-59)

```javascript
date.getMinutes()
```

### getDate

Returns the day of the month (1-31)

```javascript
date.getDate()
```

### getMonth

Returns a month from (0-11)

```javascript
date.getMonth()
```

### getFullYear
Returns the year.
```javascript
date.getFullYear()
```


### toLocaleString

Converts a date object to a string, using local conventions. For example,

```javascript
date.toLocaleString()
// "10/9/2017, 12:57:55 PM"
````


## Looping Over Objects

If we have this object:

```javascript
var person = {
  firstName: 'Larry',
  lastName: 'Duckworth'
}

for (key in person) {
  console.log(key)
}
```

This code would log out

```javascript
"firstName"
"lastName"
```

We can use the name of our keys, to access the values:

```javascript
for (key in person) {
  console.log(person[key])
}
```

This would output

```javascript
  "Larry"
  "Ducksworth"
```

### Creating List Items

Let's say you have an object in JavaScript

```javascript
pet = {
  name: 'Hogan',
  age: 5,
  breed: 'Mini Aussie',
}
```

And you want to create HTML elements based on this information, we could create a function that loops over our hash, and formats each key value pair as a list item:

```javascript
function createListItems(object) {
  var listItems = ''
  for (prop in object) {
    listItems += '<li>' + prop + ':' + object[prop] + '</li>'
  }
  return listItems
}
```


### Replace

Allows you to manipulate strings in JavaScript. The first argument is the string it should replace, and the second is the string that it should be replaced *with*.

```javascript
  "Hello there".replace('there', 'you')
```
