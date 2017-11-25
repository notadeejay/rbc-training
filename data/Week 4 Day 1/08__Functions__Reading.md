---
uuid: 30ad7380-264d-4218-a62e-052f0ae6413f
---

Sometimes we find ourselves using a piece of code over and over again. To prevent having to rewrite this code in several different places, we can use a **function**. A function is a named block of code that performs a particular task.

## Declaring a function

When we declare a function we start with the keyword `function`, followed by a set of parentheses, and then the function **body**, which is wrapped in two curly brackets.

![function without parameters](https://cl.ly/28122V3k3l20/Image%202017-10-23%20at%208.51.06%20PM.png)

Functions can also take **parameters**. That is, when we call a function we can pass it the information it will need to complete its task:

![function example](https://cl.ly/0L2y1R3c0d3X/Image%202017-10-23%20at%208.43.56%20PM.png)


## Returning values from functions

In JavaScript we can save any datatype to a variable. Instead of logging values to our console, a JavaScript function can also **return** a value. We do this by using the `return` keyword.

```javascript
function getName() {
  return "Sherman"
}

var dogName = getName()
console.log(dogName)
// would log "Sherman" to the console
```

## Built-in functions

In addition to letting you write your own functions, JavaScript comes with some functions ready to use right out of the box. Each datatype has its own set of built in functions.

In fact, you've been using one since you started writing JavaScript: `console.log`.

Here are some others you might find useful as you learn more about JavaScript.

### .length

```javascript
  "Lighthouse".length
```
This code evaluates to 10, which is the number of characters in the string `"Lighthouse"`.

### .toUpperCase

```javascript
  "Hello, there".toUpperCase()  
```

Would give us a new string in all caps: `"HELLO, THERE"`.
