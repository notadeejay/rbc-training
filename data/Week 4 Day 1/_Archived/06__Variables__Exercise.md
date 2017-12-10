---
archived: true
uuid: 9d78fb64-b986-4287-b71e-b95769aa3d24
---

### Variables

Remember how we said Web Developers don't like to write more code than we have to? Variables are one of the ways we can save ourselves some time. Variables allow us to save a value and use it over and over again in your code.

To declare a variable in our code, we first need to use the keyword `var`. Then we give our variable a name, and then we assign it a value.

```javascript
var firstName = "Maggie"
```
In this example, we are assigning the variable firstName to the string “Maggie”.

![variabel example](https://d3vv6lp55qjaqc.cloudfront.net/items/3D2e1C1O3H3k3y1d3H1v/Image%202017-08-29%20at%208.12.55%20PM.png?X-CloudApp-Visitor-Id=2818368&v=dad8eb43)

Follow these steps when you want to declare a variable
1. Start with the var keyword
2. Give it a name (try to be descriptive!)
3. Use the = sign
4. Give it a value
Then, we can use variables like this:

```javascript
var message = "I’m learning JavaScript!"
console.log(message)
// would output “I’m learning JavaScript"
```

### Use Cases

Let's pretend that your writing some code that greets some friends.

```javascript
  console.log("Good morning, Maggie.")
  console.log("Good morning, Jeremy")
  console.log("Good morning, Horatiu")
```

Then, you come back and want to greet your friends again, only it's no longer morning.
Hmm. With this example you'd have to edit three different lines of code. If we store the time of day in a variable, we could reuse it in our code.

```javascript
var timeOfDay = "morning"
console.log("Good " + timeOfDay + ", Maggie.")
console.log("Good " + timeOfDay + ", Jeremy")
console.log("Good " + timeOfDay + ", Horatiu")
```

This would get the same output as the code above, but we can change our `timeOfDay` variable to be `"afternoon"` or `"evening"`.


## Tasks
- [ ] Save your name to a variable called `firstName`
- [ ] Add your `firstName` variable to the string "Hello, " and `console.log` the result
- [ ] Compare two integers, and save the resulting boolean to a variable
- [ ] What happens when you assign the same variable twice, and then `console.log` out the output?
