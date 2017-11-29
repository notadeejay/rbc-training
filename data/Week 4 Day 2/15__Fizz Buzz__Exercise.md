---
uuid: 8d8fc135-86e8-4e31-89d6-2806e7f02819
---

Fizz Buzz is a famous programming problem. To solve it, write some code that prints all numbers from 1 to 100. But, instead of the numbers, for multiples of 3 print 'Fizz', for multiples of 5 print 'Buzz', and for multiples of both 3 and 5 print 'FizzBuzz'.

For example, if I was solving FizzBuzz for the numbers 1-15, this would be my expected output:

```
1
2
fizz
4
buzz
fizz
7
8
buzz
buzz
11
fizz
13
14
fizzbuzz
```

To tackle this problem, grab a classmate and "pair program". Pair programming is a common practice. It's when two developers sit down to work on a problem together. One will usually "drive" (that is write the code), while the other helps solve the problem. It's common to take turns writing the code.

You can write the code on one computer or on both, but do work through the logic of the problem together.

**Tip**: When you're faced with a problem like this one, there are several good strategies to take:

1. Work out how you, as a human being, would solve the problem (that is, without any code).
2. Break the problem down into smaller pieces (for instance, start by just printing the numbers 1 to 100 to the screen, then build from there).
3. Work slowly and incrementally.

## Tips & Tricks

#### Remainder

In order to determine whether a number is a multiple of 3 or 5, you may need to use the remainder operator `%`. The remainder operator (technically known as the modulo operator) returns the remainder when one number is divided by the other.

```javascript
10 % 7
// would evaluate to 3

10 % 2
// would evaluate to 0
```
