---
uuid: 21777904-61cf-44e5-9fcc-07cf539288b3
---

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

The above code would return a new string, `Hello you`.

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
// 'Lighthouse Labs'
```
