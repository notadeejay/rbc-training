---
uuid: 338a2781-24c9-4277-865f-78d77ede6cec
---


### Comparators

When we’re writing code, we often want to know the answers to simple yes or no questions.

If we were writing an app that sells beer, we’d need to check that all our users are over nineteen:
```javascript
var age = 12
console.log(age > 19)
// would output false
```

```javascript
var age = 21
console.log(age > 19)
// would output true
```

We can also check if two values are the same, to do this we use two equals signs. If the two values are the same, they will return true if not, false.

```javascript
var weather = ‘raining’

console.log(weather == ‘raining’)
// would output true

console.log(weather == ‘sunny’)
// would output false
```

#### Tasks
[ ] Write some code to see if your name is longer than 8 letters

### If statements
If statements rely on a condition. A condition is something that can evaluate to true or to false. They work hand in hand with our boolean data type.

If statements in JavaScript follow a pattern.

![if statement example](https://d3vv6lp55qjaqc.cloudfront.net/items/3B313R1J3B3B192P1J2h/Image%202017-08-29%20at%208.14.23%20PM.png?X-CloudApp-Visitor-Id=2818368&v=16b4a668)

The condition can be a variable that is set to either true or false like so:

```javascript
var raining = true

if (raining) {
   console.log(“Bring an umbrella”)
}
```

Or a comparator

```javascript
weather = “raining”

if (weather == “raining”) {
   console.log(“Bring an umbrella”)
}
```

Tip: If you’re struggling to understand a some code, go through it slowly and read it out loud. When you were first learning to read, you probably had to sound out some words, letter by letter. This technique works for code too!
