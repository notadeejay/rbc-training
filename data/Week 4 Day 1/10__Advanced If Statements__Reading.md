---
uuid: bd73388b-4597-41a0-8660-e4a5085edf23
stretch: true
---

Sometimes we want to be more specific with our if statements.
In order to explore these new options for our if statements, let's revisit our weather example.

### OR

We can use the or (`||`) to check more than one condition in one if statement.

```javascript
  if (weather === 'raining' || weather === 'snowing') {
    console.log("Wear a coat")
  }
```

In this example, we will output 'Wear a coat' if it's raining OR if it's snowing.


### AND

We can use the and (`&&`) if we want to only do something if more than one condition is true.

```javascript
  if (weather === 'raining' && temperature === 'cold') {
    console.log('Watch for ice!')
  }
```

In this example we will only console.log `Watch for ice!` when it's raining AND it's cold out.
