---
uuid: 96fb74d2-4521-4fa3-9a53-5af7228ef523
archived: true
---

Loops are a really powerful feature of JavaScript. They allow us to repeat actions a set number of times or for each element in a collection (like an array).

Let's say you want to print out every single element of an array to your console. You _could_ use the index to do this:

```javascript
var cities = ['Toronto', 'Vancouver', 'Halifax', 'Ottawa', 'London']
console.log(cities[0])
console.log(cities[1])
console.log(cities[2])
console.log(cities[3])
console.log(cities[4])
```

However, as soon as we add or remove elements from the array, we need to change the code that logs each city to the console.

A better option is to use a **loop**. A loop lets us repeat an action or run a piece of code as many times as we need.

## For loops

To loop over an array, we can use a `for` loop.

![](https://cl.ly/1T110236000O/Image%202017-10-24%20at%206.38.39%20PM.png)

This would allow us to loop over our `cities` array and output each city.

```javascript
var cities = ['Toronto', 'Vancouver', 'Halifax', 'Ottawa', 'London']
for (var i = 0; i < cities.length; i++) {
   console.log(cities[i])
}

// Would log to the console:
// Toronto
// Vancouver
// Halifax
// Ottawa
// London
```

### While loops

We could also use `while` loops. A while loop continues until its condition is no longer true. To write a while` loop in JavaScript, we start with the `while` keyword, followed by **condition**, and then inside curly brackets, we write the code that we want to repeat.

```javascript
while (condition) {
  // code to repeat goes here
}
```

In this example, we're looping until our counter is equal to or greater than 10:

```javascript
var counter = 0
while (counter < 10) {
  console.log(counter)
  // increment the counter
  counter += 1
}
```

To increment a counter in JavaScript, we can write this code:

```javascript
counter = counter + 1
```

Or we could shorten it to:

```javascript
counter += 1
```

## Exercises

- Create an array of your favourite movies (or books, or anything else you like)
- Loop over each movie and print its title to the console
- Add some code to your loop that will print the movie title in all caps
- Write a loop that will count from 20 down to 1
