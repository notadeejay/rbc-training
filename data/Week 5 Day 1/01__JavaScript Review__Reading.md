---
uuid: 02af8636-92ec-4512-bf1f-c2037f806e5d
---

Today's exercise deals with JavaScript objects in depth. We've had some practice with them before, but before we jump into today's exercises, a refresher might be helpful.

Remember that a JavaScript object is a collection of **keys** and **values**. When we know the key, we can easily look up the value.

For example, we could represent pets in code using objects:

```javascript
 var sherman = {
  name: 'Sherman',
  animal: 'dog',
  age: 5
}

var eddie = {
  name: 'Eddie',
  animal: 'cat',
  age: 10
}

var octavia = {
  name: 'Octavia',
  animal: 'cat',
  age: 3
}
```

## Storing data in objects

Remember that the values of our objects can be any data type. For example, if we created an object to represent a class, we could store the students in an array:

```javascript
var class = {
  subject: 'Math',
  students: ['Jane', 'Sarah', 'Emily'],
  location: 'Ottawa'
}
```

Our objects could even contain _other_ objects:

```javascript
var class = {
  subject: 'Math',
  students: ['Jane', 'Sarah', 'Emily'],
  location: {
    city: 'Ottawa',
    address: '1 Lakeshore Drive',
  }
}
```

## Accessing data from objects

When we want to get a value out of an array, we can use dot notation. This means we take the name of the object, followed by a dot, and then the name of the key.

```javascript
var class = {
  subject: 'Math',
  students: ['Jane', 'Sarah', 'Emily'],
  location: {
    city: 'Ottawa',
    address: '1 Lakeshore Drive',
  }
}

var students = class.students
// students is equal to ['Jane', 'Sarah', 'Emily']
```

If we wanted to get the city value out of the `class` object, we could do something like this:

```javascript
var class = {
  subject: 'Math',
  students: ['Jane', 'Sarah', 'Emily'],
  location: {
    city: 'Ottawa',
    address: '1 Lakeshore Drive',
  }
}

var cityName = class.location.city
// cityName is equal to 'Ottawa'
```
