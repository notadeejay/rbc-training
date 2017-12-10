---
uuid: 97a13ca7-17d7-4d9a-a6ba-688638bf8160
---
---
---

Variables allow us to save a value and use it over and over again in our code. To declare a variable in our code, we first need to use the keyword `var`. Then we give our variable a name, and finally we assign it a value.

```javascript
var firstName = "Maggie"
```

In the above example, we are assigning the variable `firstName` to the string `"Maggie"`.

![variabel example](https://d3vv6lp55qjaqc.cloudfront.net/items/3D2e1C1O3H3k3y1d3H1v/Image%202017-08-29%20at%208.12.55%20PM.png?X-CloudApp-Visitor-Id=2818368&v=dad8eb43)

Follow these steps when you want to declare a variable:

1. Start with the `var` keyword
2. Give the variable a name (be descriptive!)
3. Use the `=` sign
4. Give the variable a value

Then, we can use variables like this:

```javascript
var message = "I'm learning JavaScript!"
console.log(message)
// would log "I'm learning JavaScript" to the console
```

### Use cases

Let's pretend that you're writing code that greets some friends.

```javascript
console.log("Good morning, Maggie!")
console.log("Good morning, Jeremy!")
console.log("Good morning, Horatiu!")
```

Then, you come back and want to greet your friends again, only it's no longer morning. Hmm. With this example you'd have to edit three different lines of code. If instead we were to store the time of day in a variable, we could reuse it in our code.

```javascript
var timeOfDay = "morning"
console.log("Good " + timeOfDay + ", Maggie!")
console.log("Good " + timeOfDay + ", Jeremy!")
console.log("Good " + timeOfDay + ", Horatiu!")
```

This would produce the same output as the code in the first example above, but it allows us to change the value of our `timeOfDay` variable to be `"afternoon"` or `"evening"` in a single place.


### Exercises

- Save your name to a variable called `firstName`
- Add your `firstName` variable to the string "Hello, " and log the result to the console
- Compare two integers, and save the resulting boolean to a variable
- What happens when you assign to the same variable twice? Use `console.log` to verify the value of your variable after each assignment
