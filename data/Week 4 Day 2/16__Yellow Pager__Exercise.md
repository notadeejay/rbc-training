---
uuid: 3fd70066-c5b5-42f7-92b7-d240184f9264
---

Another fun programming challenge is the Yellow Pager.

Write a function that accepts a 10-character string of letters and returns a corresponding phone number string. If the input letter string is not exactly 10 characters, the function should return `false` instead.

Use the following number to letter mapping to turn a string into a phone number:

```
2 -> A B C
3 -> D E F
4 -> G H I
5 -> J K L
6 -> M N O
7 -> P Q R S
8 -> T U V
9 -> W X Y Z
```

When solving a problem like this, it's often a good idea to start with some examples, so you know what the correct output should be:

The string `Lighthouse` should output `5444846873`.

The string `Helloworld` should output `4355696753`.

Keep in mind that there are several ways to solve this problem, so if a classmate takes a different approach than you, that's okay.

Pair with another classmate and work through the logic together! Remember it's always best to come up with a plan of how you're going to solve this problem *before* you start writing code.

You can map out the steps you're going to take on a piece of paper, if you find that helpful.

## JavaScript reference

#### .split()

This string function can be used to split a string into an array of characters.

```javascript
"hello".split('')
// will return ['h', 'e', 'l', 'l', 'o']
```

#### .toUpperCase()

This string function converts all of the letters in the string to uppercase.

```javascript
"hello".toUpperCase()
// will return "HELLO"
```

#### .toLowerCase()

This string function converts all of the letters in the string to lowercase.

```javascript
"HELLO".toLowerCase()
// will return "hello"
```

#### For loop

Loops over all of the elements in an array

```javascript
var cities = ['Toronto', 'Ottawa', 'London']

for (var i = 0; i < cities.length; i++) {
  console.log(cities[i])
}

// will log to the console:
// Toronto
// Ottawa
// London
```
