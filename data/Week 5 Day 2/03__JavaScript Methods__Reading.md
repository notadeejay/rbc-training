---
uuid: 21777904-61cf-44e5-9fcc-07cf539288b3
---

JavaScript has many built in functions that you can use. Here are a few that you might find helpful as you move through building your project.

## Date

As you build your app, you might run into a **timestamp**, a common way for computers to keep track of time. The Unix timestamp is the number of milliseconds that have passed since January 1, 1970 <abbr title="Coordinated Universal Time">UTC</abbr>.

The `Date` function in JavaScript lets us work with Unix timestamps using some built in functions that can parse Unix timestamps into something more human readable.

```javascript
var date = new Date(1508887542971);
// Tue Oct 24 2017 19:25:42 GMT-0400 (EDT)
```

Note that a Date expects a timestamp to be in milliseconds. If your timestamp is in seconds, you can multiply it by a thousand to get convert it to milliseconds before creating a new date.

```javascript
var date = new Date(timestamp * 1000)
```

#### getHours

Returns the hour (0-23).

```javascript
date.getHours()
// 19
```

#### getMinutes

Returns the minutes (0-59).

```javascript
date.getMinutes()
// 25
```

#### getDate

Returns the day of the month (1-31).

```javascript
date.getDate()
// 24
```

#### getMonth

Returns a month (0-11).

```javascript
date.getMonth()
// 10
```

#### getFullYear

Returns the year.

```javascript
date.getFullYear()
// 2017
```

#### toLocaleString

Converts a date object to a string, using local conventions. For example:

```javascript
date.toLocaleString()
// '10/24/2017, 7:25:42 PM'
```

## Looping over objects

If we have the following object:

```javascript
var person = {
  firstName: 'Larry',
  lastName: 'Duckworth'
}
```

Then the following code would loop over every key in the object and log it to the console:

```javascript
for (var key in person) {
  console.log(key)
}

// The above would log:
// firstName
// lastName
```

We can also use each key that we're looping over to access its associated value:

```javascript
for (var key in person) {
  console.log(person[key])
}

// The above would log:
// Larry
// Duckworth
```

Let's take a look at another example. Let's imagine we had the following object in JavaScript:

```javascript
var pet = {
  name: 'Hogan',
  age: 5,
  breed: 'Mini Aussie'
}
```

If you wanted to create HTML elements based on this information, you could create a function that loops over the object and formats each key value pair as a list item:

```javascript
function createListItems(object) {
  var listItems = ''
  for (var key in object) {
    listItems += '<li>' + key + ':' + object[key] + '</li>'
  }
  return listItems
}
```

Then we could call the `createListItems` function, passing in the `pet` object:

```javascript
createListItems(pet)
```

This would return the following HTML:

```html
<li>name: Hogan</li>
<li>age: 5</li>
<li>breed: Mini Aussie</li>
```


## String `replace` function

The string `replace` function allows you to manipulate strings in JavaScript. The first argument to the function is the substring it should replace, and the second is the substring that it should be replaced *with*.

```javascript
"Hello there".replace('there', 'you')
```

The above code would change "Hello there" into "Hello you".

## JSON.parse

This is useful for converting a string to an object.

```javascript
var obj = JSON.parse(string)
```

For example, we can turn the `companyString` string into a `companyObject` object:

```javascript
var companyString = '{"name":"Lighthouse Labs","office_pet":"Sherman"}'
var companyObject = JSON.parse(string)
// companyObject would be { name: 'Lighthouse Labs', office_pet: 'Sherman' }
```

The string `companyString` was parsed into an object, letting us do something like this:

```javascript
companyObject.name
// would be 'Lighthouse Labs'
```
