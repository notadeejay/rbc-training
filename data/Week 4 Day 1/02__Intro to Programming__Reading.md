---
uuid: 4b1ef6b8-b337-4afb-8ea4-e597af23de0c
---

#### What is programming?
When you break it down, all code is, is instructions for computers. When you learn to code, you’re learning how to communicate with your computer. Earlier in the course you created an applet on IFFTT. Code often follows the same logic, if this happens, then do this.

When we communicate with each other, we rely on a lot of context. If someone sent you a text that said:

`Can you make me a cup of tee?`

Even though they made a spelling errors, you, as a human, could figure out that what they were trying to say. When we communicate instructions to computers, we have to be very specific. We need to break down problems into steps so simple even a computer can understand them.

When you are asked to make a cup of tea, you don’t need instructions on how to do it, you likely know you need to get a mug, boil some water and add a tea bag. If you were instructing a computer, you would have to ‘explain’ what a mug is, how to open a package of tea, what temperature the water needs to be heated at, and explicitly define the order in which the steps need to take place.

When you’re learning to code, and even when you’ve been writing code for a while, it’s common to make mistakes. Don’t get discouraged.

## Data Types

Take a second and think about all of the information you put into your computer or your phone each day. Let’s pretend you are buying concert tickets online.
[ ] Make a quick list of all the information you need to input in order to buy tickets to see your favourite artist.


When you’re done - you’ve probably got a list that looks something like this:
* first name
* last name
* email address
* credit card number
* expiry date
* price
* quantity
* location
* pick up / print tickets
* date

All of the information we input into our apps and programs needs to be represented in our code. To make this process easier, all coding languages have data types. Just like we have numbers and words, code does to.

## Integers
Integers are simply whole numbers. Just like you know how to add, subtract, multiply and divide numbers, JavaScript does too.

Note: When we write console.log(“something”) whatever is in between the brackets will be outputted to our console.

```javascript
console.log(1 + 2)
// would output 3

console.log(10 - 2)
// would output 8

console.log(12 / 4)
// would output 3

console.log(3 * 4)
// would output 12
```

Tasks:
[ ] Create a JavaScript file and open it in your code editor
[ ] Use console.log to print an integer to the screen
[ ] Add two numbers together and log the output

### Strings

Strings are any collection of characters wrapped in quotes. They can be one word

```javascript
'Hello'
```

or a whole sentence

```javascript
"Welcome to Lighthouse Labs"
```
and be written with single quotes, or double quotes.

Like integers, we can manipulate strings using code. For example, we can add two strings together:

```javascript
"Good " + "morning, " + "Maggie"
// outputs "Good morning, Maggie"
```

If you look carefully, next to the comma in this example is a space. This is an example of needing to be very specific when we write code, without it, there would be no space between the words, and our output would be squished together.

One thing to note, is that this:

```javascript
'3'
```
is a string. Not an integer.

### Tasks:

[ ] Open up brackets and create a , and console.log out your first name
[ ] Try to add words together to make a sentence to greet your instructor or a class mate
[ ] What happens when you add a string and an integer together?


### Booleans

Booleans are either true or false.
```javascript
true

false
```
Again, note that this is a string:

```javascript
'true'
```
and not a boolean.

Now that we’ve reviewed some basic data types:
[ ]  go back and assign a data type to all of the items in your concert ticket list

### Variables

A well kept secret of programmers is that we’re incredibly lazy. I mean, really, really, really lazy. We don’t like to write more code that we have to. Variables are one way that you can save a value and use it over and over again in your code. You can think of it like a bookmark. Imagine you were filling out a form that made you fill in your first name over, and over and over again. Wouldn’t it be great if you could write it once, and have(fix this analogy)

To declare a variable in our code, we first need to use the keyword var. Then we give our variable a name, and then we assign it a value.

```javascript
var firstName = "Maggie"
```
In this example, we are assigning the variable firstName to the string “Maggie”.

Follow these steps when you want to declare a variable
1. Start with the var keyword
2. Give it a name (try to be descriptive!)
3. Use the = sign
4. Give it a value
Then, we can use variables like this:

```javascript
var message = "I’m learning JavaScript!"
console.log(message)
// would output “I’m learning JavaScript"
```

### Comparators

When we’re writing code, we often want to know the answers to simple yes or no questions.

If we were writing an app that sells beer, we’d need to check that all our users are over nineteen:
```javascript
var age = 12
console.log(age > 19)
// would output false
```

```javascript
var age = 21
console.log(age > 19)
// would output true
```

We can also check if two values are the same, to do this we use two equals signs. If the two values are the same, they will return true if not, false.

```javascript
var weather = ‘raining’

console.log(weather == ‘raining’)
// would output true

console.log(weather == ‘sunny’)
// would output false
```

#### Tasks
[ ] Write some code to see if your name is longer than 8 letters

### If statements
If statements rely on a condition. A condition is something that can evaluate to true or to false. They work hand in hand with our boolean data type.

If statements in JavaScript follow a pattern.

The condition can be a variable that is set to either true or false like so:

```javascript
var raining = true

if (raining) {
   console.log(“Bring an umbrella”)
}
```

Or a comparator

```javascript
weather = “raining”

if (weather == “raining”) {
   console.log(“Bring an umbrella”)
}
```

Tip: If you’re struggling to understand a some code, go through it slowly and read it out loud. When you were first learning to read, you probably had to sound out some words, letter by letter. This technique works for code too!

## Functions

Sometimes we have a piece of logic or code that we find ourselves using over and over again. To prevent having to rewrite this code in several different places, we can use a function.


Functions can also take parameters too. That is, when we call a function we give it a little piece of information:


### Tasks:
[ ] Write a function that outputs “Good morning” when you call it
[ ] Write a function that takes one parameter and says good morning followed by a firstName passed to the function
[ ] Write a function that recommends you take an umbrella, if the parameter passed is the string ‘raining’.
