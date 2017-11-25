---
uuid: b9823aaf-94b6-47b6-a9e2-26dc2e13ede0
---

Objects are a great way to organize sets of related information. Objects are collections of **key-value pairs**. For example, if we were building an app for a vet, we could store all of the information about one pet in an **object**. Here we've declared a variable (`pet`) and assigned it to an object:

```javascript
var pet = {
  name: 'Sherman',
  breed: 'Golden Doodle',
  age: 5,
  weight: 34
}
```

To initialize an object, we declared a variable, and then we use two curly brackets. The keys are on the left (`name`, `breed`, `age`, and `weight`), and the values are on the right. Instead of an `=` to assign their values, we use a colon.

![object example](https://d3vv6lp55qjaqc.cloudfront.net/items/0V3P243a2M4511123W44/Image%202017-09-04%20at%2012.50.30%20PM.png)

When we want to access the values of our objects, we can do this in two ways. The first is using bracket notation:

```javascript
var pet = {
  name: 'Sherman',
  breed: 'Golden Doodle',
  age: 5,
  weight: 34
}

// access the name
pet['name']
```

The second is using dot notation:

```javascript
var pet = {
  name: 'Sherman',
  breed: 'Golden Doodle',
  age: 5,
  weight: 34
}

// access the name
pet.name
```

Most of the time, both will do the exact same thing, meaning it's up to you which version you would like to use in your code. However, sometimes bracket notation is your only option, as we'll see later on in the course.

Once we've declared an object, we can update the values later in our code like so:

```javascript
var pet = {
  name: 'Sherman',
  breed: 'Golden Doodle',
  age: 5,
  weight: 34
}

pet.age = 6
// Would make Sherman 6 years old
```
