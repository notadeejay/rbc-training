---
uuid: 02af8636-92ec-4512-bf1f-c2037f806e5d
---

Today's exercise deals with JavaScript objects in depth. We've had some practice
with these elements, before, but before we jump into day's exercises, a refresher might be helpful.


Remember that a javascript object is a collection of **keys** and **values**. When we know the **key**, we
can easily find the value.

For example, we could represent pets in code using an object.

```javascript
  var sherman = {
    name: 'Sherman',
    breed: 'dog',
    age: 5
  }

  var eddie = {
    name: 'Eddie',
    breed: 'cat',
    age: 10
  }

  var octavia = {
    name: 'Octavia',
    breed: 'cat',
    age: 3
  }
```

### Different Value Types

Remember that the values of our objects can be any data type. For example, we could have an object that contains arrays as their value. For example, if we created an object to represent a class, we could store the students in an array:

```javascript
  var class = {
    subject: 'Math',
    students: ['Jane', 'Sarah', 'Emily'],
    location: 'Ottawa'
  }
```

Our objects could even contain _other_ objects.

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

### Accessing Values

When we want to get a value out of an array, we can use **dot notation**. What this means, is we
take the name of the object, followed by a dot, and then the name of the key.

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
  // students would be equal to ['Jane', 'Sarah', 'Emily']
```

If we wanted to get the **city** out of this object, we could do something like this:

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
```

### Tips

We'll be working with objects quite heavily today, so if you don't feel completely comfortable with them, take a few minutes now and play around with them.
