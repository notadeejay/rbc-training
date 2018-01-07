---
uuid: 416b2bd8-5a3c-40d4-a0ed-ed20d687ab3d
---

### Strings

Strings are any collection of characters wrapped in quotes.

We can use single quotes:

```javascript
'Hello'
```

or double quotes

```javascript
"Hello"
```

### Numbers
We can add, subtract, divide and multiply numbers in JavaScript.

Addition:

```javascript
45 + 76
```

Subtraction:

```javascript
100 - 22
```

Multiplication:

```javascript
190 * 2
```

Division:

```javascript
100 / 3
```

### Booleans

Booleans are either `true` or `false`.

```javascript
true
```

```javascript
false
```

### If Statements

We use if statements to control the flow of our program. Often we want to do one thing if something is true, and another if it's false. If statements are built for this purpose.

```javascript
var raining = true
if (raining) {
  console.log("Bring an umbrella")
}
```

We can also add an else to our if statements

```javascript
var raining = false
if (raining) {
  console.log("Bring an umbrella")
} else {
  console.log("Wear sunglasses")
}
```

### Functions

We write functions so we can reuse pieces of code. They are a tricky concept to grasp, so if you're
feeling shaky on functions, ask a mentor or your instructor to review them with you.

```javascript
function getWeatherRecommendation(weather) {
  if (weather === 'raining') {
    console.log("Bring an umbrella")
  } else {
    console.log("Wear sunglasses")
  }
}
// make sure to call the function
getWeatherRecommendeation('raining')
```
