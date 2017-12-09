---
uuid: 338a2781-24c9-4277-865f-78d77ede6cec
---

## If statements

When we learned about **booleans** we also learned about **comparators**, and mentioned that often
times when we're writing code, we want to know the answers to yes or no questions. Based on the answers
to these questions, we want our code to be able to respond appropriately. This is where **if statements** come in. They allow us to control which code gets evaluated, and when.

If statements rely on a **condition**. A condition is something that can evaluate to true or to false. They work hand in hand with our boolean data type.

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
var weather = “raining”

if (weather == “raining”) {
   console.log(“Bring an umbrella”)
}
```

In these cases, the code wrapped inside the curly brackets of an if statement, will only
be run **if** the condition evaluates to true.

**Tip:** If you’re struggling to understand a some code, go through it slowly and read it out loud. When you were first learning to read, you probably had to sound out some words, letter by letter. This technique works for code too!

#### Tasks
Part I:
- [ ] Declare a variable called `age` and assign it to an integer
- [ ] Write some code to check if the integer `age` is greater than 21
- [ ] Add an `if statement` that will output `Over 21!` if age is greater than 21, and `Under 21` if the it's under 21.

Part II:
- [ ] Declare a variable called `weather`, and assign it to a string
- [ ] Write some code to check if the `weather` variable is equal to "raining", and output a reminder to bring an umbrella
- [ ] Add an `if else` to your if statement that checks if the weather is equal to "sunny", and ouput a reminder to bring a hat
- [ ] Add an else statement that just says "I'm not sure what to bring!"
