---
uuid: 96fb74d2-4521-4fa3-9a53-5af7228ef523
---


## Loops


Loops are a part of any programming language, and they are really helpful when you
want to do the same thing over and over again.

Let's say you want to print out every single element of an array to your console.


Just like most things in programming, there's more than one way to accomplish the same goal.
We could use JavaScripts built in `forEach` function:

```javascript
  var cities = ['Toronto', 'Vancouver', 'Halifax', 'Ottawa', 'London']

  cities.forEach(function(city) {
    console.log(city);
  })
```

We could also use a `while` statement. While statements continue until the condition is no longer true.
In this case, it will loop until the value of the `counter` variable is larger than 10.

**Note:** When you're using loops in your code, watch out for *infinite loops*. Infinite loops are loops
that run forever. In this example, if we forgot to increment the value of `counter`, the loop would run until
the program crashed.

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
