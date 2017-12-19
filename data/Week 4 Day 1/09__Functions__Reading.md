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

In JavaScript we can save any datatype to a variable. Instead of logging values to our console, a JavaScript function can also **return** a value. We do this by using the `return` keyword.

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
- Write a function that console.logs "Good Morning" when you call it.

```javascript
// declare the function
function greet() {

}

// call the function
greet()
```

### Exercise 2
- Write a function that takes a persons name as a parameter, and console.logs "Good morning" to this person

**Input**: 'Maggie'
**Output**: 'Good Morning, Maggie'

```javascript
// declare the function
function greet() {

}

// call the function with a parameter
greet('Maggie')
```

### Exercise 3
- Write a function that takes a parameter, and console.logs out advice about the weather

**Input**: 'raining'
**Output**: 'Bring an umbrella!'

**Input**: 'sunny'
**Output**: 'Wear sunglasses'

```javascript
// declare the function
function getWeatherAdvice(weather) {

}

// call the function
// should output 'Bring an umbrella!'
getWeatherAdvice('raining')

// should output 'Wear Sunglasses'
getWeatherAdvice('sunny')
```

### Exercise 4
- Write a function that divides two numbers and returns the result

**Input**: 10
**Output**: 5

```javascript
// declare the function
function divide(numberOne, numberTwo) {

}

// call the function
// should return 5
divide(10, 2)

```


### Exercise 5
- Write a function that takes two numbers and returns the largest one

**Input**: 3, 8
**Output**: 8

```javascript
// declare the function
function largestNum() {

}

// call the function
// should return 10
largestNum(10, 2)
```

### Exercise  6
- Write a function that checks if two strings are the same, and returns true or false

**Input**: 'sunshine', 'sunshine'
**Output**: true

**Input**: 'sunshine', 'pizza'
**Output**: false

```javascript
// declare the function
function areStringsEqual() {

}

// call the function
// should return true
areStringsEqual('sunshine', 'sunshine')

// should return false
areStringsEqual('sunshine', 'pizza')
```
