---
uuid: 1f621206-76cf-11e7-b5a5-be2e44b06b34
allow_submissions: true
duration: 90
outcomes:
  - 180da493-5314-4af3-ab57-19dc85fa4f48
---

## Goal

Functions. We've seen them before – they're great ways to encapsulate some code to avoid tedious repetition and to make our code more readable. But they come with some unique quirks that can make the lives of new JavaScript developers miserable. In this activity you're going to review declaring your own functions in preparation for exploring their trickier aspects.

## Reading

### Prep Course – Code Reuse and Functions

[Code Reuse and Functions](/656af239-0e82-463e-99bb-4c1da925d46c)

It may be a little while since you've completed the fundamentals of programming module in the Prep Course, in which case you may consider reviewing functions in JavaScript.

### Eloquent JavaScript – Functions

<http://eloquentjavascript.net/03_functions.html#h_eVDWIAuyBK>

You might also have read this Eloquent JavaScript article, but in case you skipped some sections or would like a refresher, read the **Growing Functions** and **Functions and Side Effects** sections.

## Exercises

### Refactoring

In case you haven't already, refactor the following two exercises from yesterday to be implemented using functions.

- [Joining Concepts](/9605c1f5-90d1-4b8f-b352-30ccc0592b7f)
- [Password Obfuscator](/0de89a33-5a03-42b5-a308-f6fd8c800662)

#### Practice Good Function-Writing Habits

While you're refactoring yesterday's exercises, here are a few things worth keeping in mind:

Give your functions good names. A good name is short and explains exactly what the function does as unambiguously as possible. For example, `join` and `obfuscate` are better function names than `iLikeFunctions` or `turnMySimpleStringIntoAnObfuscatedPassword`.

Indent the contents of your function. It's conventional to use 2 or 4 spaces but no tabs (if you're using Sublime, it should already be configured to replace tabs with spaces). For example, consider the following poorly-indented code:

```javascript
function power(num, exp) {
var result = 1;
for (var i = 1; i < exp; i++) {
result *= num;
}
return result;
}
```

The following is functionally identical but because of the indentation, it is much easier to read. It's easier to follow where the curly braces start and end a block, and which code belongs to it.

```javascript
function power(num, exp) {
  var result = 1;
  for (var i = 1; i < exp; i++) {
    result *= num;
  }
  return result;
}
```

### Conventions for Naming Functions

Although this topic is fairly subjective, and often contentious among opinionated developers, function (and variable) naming is an important art. Since it directly affects the _readability_ of your code, you should get into

* avoid generic names like 'data', or 'run'
* name your functions beginning with _action_ words like `createUser`, or `sendUserData`
* be consistent with your naming conventions
* if you're joining an existing project, observe and adapt any existing conventions

These are not hard rules that you can apply universally. Your personal style will evolve with experience.

<aside>
  <h3>Naming Conventions in JS</h3>

  <p>
    A common JavaScript convention is to camelCase names, including those of functions. For example, if you had a function that said hello to a user, a conventional name for it would be <code>sayHello</code>.  Naming your function <code>sayhello</code> or <code>say_hello</code> would still work, but it would stand out to an experienced JavaScript developer as unconventional. Each language tends to have it's own stylistic conventions, and this is just one example.
  </p>
</aside>

## Problem

### Rolling Dice

Write a program that takes a single parameter from the command line, a number, and rolls that many six-sided dice. For example, the following is a sample output of the program.

```terminal
node dice-roller.js 3
Rolled 3 dice: 2, 6, 5
```

To generate a random number, you'll have to use the built-in [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random).

When you've finished, don't forgot to save your work as a gist and to submit it.
