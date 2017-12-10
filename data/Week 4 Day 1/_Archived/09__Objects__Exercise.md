---
uuid: b9823aaf-94b6-47b6-a9e2-26dc2e13ede0
archived: true
---

## Objects

Objects are a great way to organize a set of related information. Objects are a collection of **key value pairs**. For example, if we were building an app for a vet, we could store all of the information about one pet in an **object**:

```javascript
  var pet = {
    name: 'Sherman',
    breed: 'Golden Doodle',
    age: 5,
    weight: 34
  }
```

To initialize an object, we use two curly brackets, the keys are on the left (name, breed, age, and weight), and the values are on the right. Instead of an `=` to assign their values, we use a colon.

![hash example](https://d3vv6lp55qjaqc.cloudfront.net/items/0V3P243a2M4511123W44/Image%202017-09-04%20at%2012.50.30%20PM.png?X-CloudApp-Visitor-Id=2818368&v=c3b24de2)

When we want to access the values of our objects, we can do this in two ways.

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

We can also use `dot notation`, like so:

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
Both will do the exact same thing. It's up to you which version you would like to use in your code. However, the dot notation is a bit more popular.

Once we've declared an object, we can update the values later in our code like so:

```javascript
var pet = {
  name: 'Sherman',
  breed: 'Golden Doodle',
  age: 5,
  weight: 34
}

pet.age = 6
```


### Tasks
- [ ] Create an object for yourself, include your `firstName`, `lastName`, `occupation`, and `quirkyFact`
- [ ] Practice using both methods of accessing values in your object
- [ ] Try to change a value in your object after you've declared it
- [ ] Add a key for your 'hometown' in your hash, after you've declared it
