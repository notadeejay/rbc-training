---
uuid: 96fb74d2-4521-4fa3-9a53-5af7228ef523
---


## Loops

Loops are a really powerful feature of JavaScript. They allow us to repeat actions over a list of items, or to repeat an action a set number of times.

Let's say you want to print out every single element of an array to your console.

We **could** use the index to do this:

```javascript
  var cities = ['Toronto', 'Vancouver', 'Halifax', 'Ottawa', 'London']
  console.log(cities[0])
  console.log(cities[1])
  console.log(cities[2])
  console.log(cities[3])
  console.log(cities[4])
```

However, as soon as I add or remove an element from my array, I need to go change the
code that logs out each city.

Instead, we could use a **loop**. A loop let's us repeat an action or run a piece of code
over and over again.

### For Loops

We could use JavaScripts built in `forEach` function

The `forEach` function takes *another* function as an argument.

This would call the function over and over again for each element in the array.

```javascript
  var cities = ['Toronto', 'Vancouver', 'Halifax', 'Ottawa', 'London']

  cities.forEach(function(city) {
    console.log(city);
  })
```


### While loops

We could also use a `while` statement. While statements continue until the condition is no longer true.
In this case, it will loop until the value of the `counter` variable is larger than 10.

To increment a counter in JavaScript, we can write this code:

```javascript
  counter = counter + 1;
```

Or we could shorten it to:

```javascript
  counter += 1;
```

To write a **while** loop in JavaScript, we start with the **while** keyword, followed by **condition**, and then
in some curly brackets, the code that we want to repeat.


```javascript
  while (condition) {

  }
```

If we wanted to run a while loop, when our counter variable is less than 10:

```javascript
  var counter = 0
  while (counter < 10) {
    // increment the counter
    counter += 1
    console.log(counter);
  }
```


### Tasks

- [ ] Create an array of your favourite movies
- [ ] Loop over each movie and print the title to your console
- [ ] Add some code to your loop that will print the movie title in all caps (tip: `toUpperCase`)
- [ ] Write a loop that will count down from 20 to 1
