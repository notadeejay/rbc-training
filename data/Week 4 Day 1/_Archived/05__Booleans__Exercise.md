---
uuid: 4e7212d8-a078-4873-83a6-8ae6cfc33ca3
---

Booleans are either true or false.

```javascript
true

false
```
Again, note that this is a string:

```javascript
'true'
```
and not a Boolean.

Where Booleans come in _really_ handy is when we are **comparing** two values.

When we're writing code, a lot of the questions or logic we use can be boiled down to a true or false question.

For example:
- Did our user type in the right password?
- Do we have enough inventory left to sell this item?

We can use **comparators** to accomplish this.

## Comparators

### Equality

There are a few ways to check if two values are equal in JavaScript. The first method is to use the **Loose Equality** using two equals signs `==` like so:

```javascript
  console.log(1 == 1)
  // would output true
```

```javascript
  console.log('1' == 1)
  // would output true
```
This method of comparing two values will convert the data types while it compares them.

We also have the `===`, also know as **Strict Equality**, which checks both the value AND the type of the values being compared.

```javascript
  console.log(7 === 7)
  // would output true
```

```javascript
  console.log('7' === 7)
  // would output false
```

In general, it's usually best to use the triple equals when comparing values in JavaScript.

### Greater than
Check if one value is greater than the other

```javascript
  console.log(10 > 2)
  // would output true
```

```javascript
  console.log(10 > 10)
  // would output false
```
We can also check if one value is greater than or equal to

```javascript
  console.log(10 >= 10)
  // would output true
```

### Less than
Check if one value is less than the other

```javascript
  console.log(2 < 12)
  // would output true
```

```javascript
  console.log(2 < 2)
  // would output false
```

We can also add an equals sign to check if a value is less than or equal to:

```javascript
  console.log(2 <= 2)
```

### Not Equal
Check if two values **do not** equal each other

```javascript
  console.log("Hello" != "Good Bye")
```
### Tasks
  **Note:** For each of these tasks, use `console.log` to print the result.
- [ ] Create two strings and check if they are equal.
  - [ ] Are they still equal if one is capitalized?
- [ ] Check if two integers are equal
  - [ ] Are they still equal if one is a string?
- [ ] Create two strings and check if they are **not** equal to each other
