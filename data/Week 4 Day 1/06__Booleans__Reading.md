---
uuid: 4e7212d8-a078-4873-83a6-8ae6cfc33ca3
---

Booleans are either true or false.

```javascript
true

false
```

Note that the following is a string and NOT a Boolean:

```javascript
'true'
```

Where Booleans come in _really_ handy is when we are **comparing** two values.

When we're writing code, a lot of the questions or logic we use can be boiled down to a true or false question.

For example:

- Did our user type in the right password?
- Do we have enough inventory left to sell this item?

We can use **comparison operators** to accomplish this.

## Comparison Operators

### Equality

We use the `===` operator to check if two values are the same in JavaScript.

```javascript
console.log(7 === 7)
// would log true to the console

console.log('7' === 7)
// would log false to the console
```

Note that in the second example above, `'7' === 7` is false. This is because while the values might look the same to us, to JavaScript these are two different data types and therefore cannot be equal. Two values are equal only when their values *and* data types are the same.

### Greater than

Evaluates to true if the first value is greater than the second.

```javascript
console.log(10 > 2)
// would log true to the console

console.log(10 > 10)
// would log false to the console
```

We can also check if one value is greater than or equal to another.

```javascript
console.log(10 >= 10)
// would log true to the console
```

### Less than

Evaluates to true if the first value is less than the second.

```javascript
console.log(2 < 12)
// would log true to the console

console.log(2 < 2)
// would log false to the console
```

We can also add an equals sign to check if the first value is less than or equal to the second:

```javascript
console.log(2 <= 2)
// would log true to the console
```

### Not equal

Returns true if the two values **do not** equal each other.

```javascript
console.log("Hello" !== "Good Bye")
// would log true to the console
```


### Exercises

## Booleans

**Note:** For each of these tasks, use `console.log` to print the result of your comparison operations.

- Create two strings and check if they are equal
- Capitalize one of your strings, are they still equal?
- Check if two integers are equal
- Wrap one integer in quotes, and compare them again, are they still equal?
- Create two strings and check if they are **not** equal to each other
