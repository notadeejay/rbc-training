---
uuid: bd73388b-4597-41a0-8660-e4a5085edf23
stretch: true
---

Sometimes we want to be more specific with our if statements. In order to explore these new options for our if statements, let's revisit our weather example.

### OR

We can use the or (`||`) to check more than one condition in one if statement. These `||` are known as **pipes**, and can be found in most programming languages.

```javascript
var weather = 'raining'

if (weather === 'raining' || weather === 'snowing') {
  console.log("Wear a coat")
}
```

We can read this example as "If the weather is raining OR the weather is snowing then, `console.log` "Wear a coat". When we use an or, our condition is true if either side of the pipes evaluates to true. In this case, if weather is equal to either 'raining' or 'snowing' our if statement will evaluate to true.

### AND

We can use the and (`&&`) if we want to only do something if more than one condition is true. To do this, we use two ampersands. We can read this example as "If the weather is raining AND the temperature is cold then console.log out watch for ice!".

```javascript
var weather = 'raining'
var temperature = 'cold'

if (weather === 'raining' && temperature === 'cold') {
  console.log('Watch for ice!')
}
```

When we use an `&&` in an if statement, it will only be true if BOTH sides of the `&&` evaluate to true. In this example, only when the weather is 'raining' and the temperature is 'cold' will the if statement be true.
