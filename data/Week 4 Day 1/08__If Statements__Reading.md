---
uuid: 1a146e83-7ffc-4f0b-9b21-795607a5d585
---
---
---

When we learned about Booleans we also learned about comparison operators, and mentioned that often times when we're writing code, we want to know the answers to yes or no questions. Based on the answers to these questions, we want our code to be able to respond appropriately. This is where **if statements** come in. They allow us to control which code gets evaluated, and when.


If statements rely on a **condition**. A condition is something that can evaluate to true or to false. They work hand in hand with our Boolean data type.


### If

If statements in JavaScript follow a pattern.

![if statement example](https://d3vv6lp55qjaqc.cloudfront.net/items/3B313R1J3B3B192P1J2h/Image%202017-08-29%20at%208.14.23%20PM.png?X-CloudApp-Visitor-Id=2818368&v=16b4a668)

The condition can be a variable that is set (or evaluates) to either true or false, like so:

```javascript
var raining = true

if (raining) {
   console.log("Bring an umbrella")
}
// would log "Bring an umbrella" to the console
```

We could also use a comparison operator within a condition:

```javascript
var weather = "raining"

if (weather === "raining") {
   console.log("Bring an umbrella")
}

// would log "Bring an umbrella" to the console
```

In both these examples, the code wrapped inside the curly brackets of the respective if statements will only be run **if their conditions evaluate to true**.


### Else

We can also add an else clause to our if statement.

```javascript
var weather = "clear skies"

if (weather === "raining") {
  console.log("Bring an umbrella")
} else {
  console.log("Bring sunglasses")
}

// would log "Bring sunglasses" to the console
```

When we add an else clause to our if statement, the code within its its curly brackets be run when the if condition **is not** true. In this case, `weather` is not `raining`, and so the code within the else block will run.

### Else if

```javascript
var weather = "snowing"

if (weather === "raining") {
  console.log("Bring an umbrella")
} else if (weather === "snowing") {
  console.log("Bring mittens")
} else {
  console.log("Bring sunglasses")
}

// would log "Bring mittens" to the console
```

We can also check for more than one condition by using else if clauses. In the above example, JavaScript will check if `weather` is `"raining"`. If it isn't, then it will check if `weather` is `"snowing"`. If it isn't, then it will evaluate the code in the else block. Because in the above example `weather` is equal to `"snowing"`, the code within the else if block will run.

**Tip:** If you're struggling to understand some code, go through it slowly and read it out loud. When you were first learning to read, you probably had to sound out the words, letter by letter. This technique works for code too!


## Exercises

### Age Exercise

- Declare a variable called `age` and assign it to an integer
- Write an `if statement` that will output "Over 21!" if `age` is greater than or equal to 21, and "Under 21" if the it's under 21.

### Weather Exercise

- Declare a variable called `weather`, and assign it to a string
- Write some code to check if the `weather` variable is equal to "raining", and output a reminder to bring an umbrella
- Add an `else if` statement that checks if the weather is equal to "sunny", and output a reminder to bring a hat
- Add an `else` statement that just says "I'm not sure what you should bring!"
