---
uuid: 30ad7380-264d-4218-a62e-052f0ae6413f
---


## Functions

Sometimes we have a piece of logic or code that we find ourselves using over and over again. To prevent having to rewrite this code in several different places, we can use a **function**. A function is a block of code written to perform a particular task.


## Declaring a Function

When we declare a function we start with the keyword **function**, followed by a set of rounded
brackets, and then the function **body**, which is wrapped in two curly brackets.


![function without parameters](https://d3vv6lp55qjaqc.cloudfront.net/items/2l3v0N2b1b0x2q0a1D0v/Image%202017-08-29%20at%208.18.11%20PM.png?X-CloudApp-Visitor-Id=2818368&v=9d00c74b)

Functions can also take **parameters**, too. That is, when we call a function we can pass it some information it will need to complete it's task:

![function example](https://d3vv6lp55qjaqc.cloudfront.net/items/0O2u2j3Q06081E0z3p3z/Image%202017-08-29%20at%208.16.47%20PM.png?X-CloudApp-Visitor-Id=2818368&v=dc2a1974)


### More about functions

In JavaScript we can save any datatype to a variable. Instead of logging values to our console, our JavaScript functions can also **return** a value. We do this by using the `return` keyword in our code.

```javascript
  function getName() {
    return "Sherman"
  }

  var dogName = getName();
  console.log(dogName);
```

The above code would output "Sherman".


### Built In Functions

In addition to letting you write your own functions, JavaScript comes with some functions ready to use, right out of the box.
Each datatype has its own set of built in functions.

In fact, you've been using one since you started writing JavaScript today, `console.log`.

Here are some others you might find useful as you learn more about JavaScript.

### Length

```javascript
  "Lighthouse".length
```
This code would be 10, or the number of characters in a string

### toUpperCase

```javascript
  "Hello, there".toUpperCase()  
```

Would change our string to be `"HELLO, THERE"`.

### Tasks:
- [ ] Write a function that outputs “Good morning” when you call it
- [ ] Write a function that takes one  parameter and says good morning followed by a `firstName`
- [ ] Write a function that recommends you take an umbrella, if the parameter passed is the string "raining".
- [ ] Write a function that divides two numbers and returns the result
- [ ] Write a function that takes two numbers and returns the largest one
- [ ] Write a function that checks if two strings are the same, and returns true or false

<!--
  @ Horatiu =
  - I think these function tasks need some work, I'm toying with the idea of given them a partially written
  function and asking them to edit it to take an argument or to add in the logic portion.
 -->
