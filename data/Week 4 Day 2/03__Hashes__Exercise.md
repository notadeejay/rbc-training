---
uuid: b9823aaf-94b6-47b6-a9e2-26dc2e13ede0
---

## Hashes

Let's imagine we are building an app for a Vet. They need to be able to know what breed, age, weight,
and name for each pet.

- [ ] Assign a data type to:
    - breed
    - age
    - weight
    - name
- [ ] Compare what you have to a class mate

If we were to store this in code, it might look something like

```javascript
var petName = 'Sherman'
var breed = 'Golden Doodle'
var age = 5
var weight = 34
```

But we have a small problem here, what happens when we want to have more than one pet?

We could do something like:

```javascript
var petName = 'Sherman'
var breed = 'Golden Doodle'
var age = 5
var weight = 34

// second pet
var petName2 = 'Wyatt'
var breed2 = 'Golden Retriever'
var age2 = 2
var weight2 = 70
```

As you can see, this got really messy really fast.

We need a way to organize this information. This is where **hashes** come in handy. Hashes are a collection of
**key value pairs**. For example, we could organize our pet like so:

```javascript
  var pet = {
    name: 'Sherman',
    breed: 'Golden Doodle',
    age: 5,
    weight: 34
  }
```

To initialize a hash, we use two curly brackets, the keys are on the left (name, breed, age, and weight) and instead of an
`=` to assign their values, we use a colon.

![hash example](https://d3vv6lp55qjaqc.cloudfront.net/items/0V3P243a2M4511123W44/Image%202017-09-04%20at%2012.50.30%20PM.png?X-CloudApp-Visitor-Id=2818368&v=c3b24de2)

When we want to access the values of our hashes, we can do this in two ways.

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

pet.name
```

Both will do the exact same thing.

### Tasks
- [ ] Create a hash for yourself, include your firstName, lastName, occupation, and quirky fact
- [ ] Practice using both methods of accessing values in your hash
- [ ] Try to change a value in your hash after you've declared it
