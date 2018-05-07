---
uuid: 1f0a5ef3-f450-456e-ad0b-57fa65084f0d
---

Sometimes we find ourselves using a piece of code over and over again. To prevent having to rewrite this code in several different places, we can use a **function**. A function is a named block of code that performs a particular task.

## Declaring a function

When we declare a function we start with the keyword `function`, followed by a set of parentheses, and then the function **body**, which is wrapped in two curly brackets.

![function without parameters](https://cl.ly/28122V3k3l20/Image%202017-10-23%20at%208.51.06%20PM.png)

Functions can also take **parameters**. That is, when we call a function we can pass it the information it will need to complete its task:

![function example](https://cl.ly/0L2y1R3c0d3X/Image%202017-10-23%20at%208.43.56%20PM.png)


## Returning values from functions

Instead of logging a value to the console, a JavaScript function can also **return** a value. We do this by using the `return` keyword.

```javascript
function getName() {
  return "Sherman"
}

var dogName = getName()
console.log(dogName)

// would log "Sherman" to the console
```

## Exercises

### Exercise 1

- Declare a function named `greet` that logs "Good Morning" to the console when it is called.

```javascript
// declare the function
function greet() {
  // your code here!
}

// call the function
greet()
```

### Exercise 2

- Declare a function named `greet` that takes a person's name as a parameter, and then logs to the console a "Good morning" message for this person. For example, if the input to the function is `'Maggie'`, the function should log `Good morning, Maggie` to the console.

```javascript
// declare the function
function greet() {
  // your code here!
}

// call the function with a parameter
greet('Maggie')
```

### Exercise 3

- Declare a function named `getWeatherAdvice` that takes a parameter specifying the weather, and logs to the console advice about you should wear. For example, if the input to the function is `'raining'`, it should tell you to bring an umbrella. If the input to the function is `'sunny'`, it should tell you to wear sunglasses.

```javascript
// declare the function
function getWeatherAdvice(weather) {
  // your code here!
}

// call the function
// should output 'Bring an umbrella!'
getWeatherAdvice('raining')

// should output 'Wear Sunglasses'
getWeatherAdvice('sunny')
```

### Exercise 4

- Declare a function named `divide` that divides two numbers and returns the result. For example, if the inputs to the function are `10` and `2`, it should return `5`.

```javascript
// declare the function
function divide(numberOne, numberTwo) {
  // your code here!
}

// call the function
// should return 5
divide(10, 2)
```

### Exercise 5

- Declare a function named `largestNum` that takes two numbers and returns the largest one. For example, if the inputs are `3` and `8`, it should return `8`.

```javascript
// declare the function
function largestNum(num1, num2) {
  // your code here!
}

// call the function
// should return 8
largestNum(3, 8)
```

### Exercise  6

- Declare a function named `areStringsEqual` that checks if two strings are the same, and returns `true` or `false`. For example, if the inputs are `'sunshine'` and `'sunshine'`, the function should return `true`. If the inputs are `'sunshine'` and `'pizza'`, it should return `false`.

```javascript
// declare the function
function areStringsEqual(str1, str2) {
  // your code here!
}

// call the function
// should return true
areStringsEqual('sunshine', 'sunshine')

// should return false
areStringsEqual('sunshine', 'pizza')
```

## Extra Resources
[JavaScript Functions Explained by Making a Recipe](http://www.codeanalogies.com/javascript-functions-explained)