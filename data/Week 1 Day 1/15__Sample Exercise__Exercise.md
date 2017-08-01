---
uuid: 1f61fffa-76cf-11e7-b5a5-be2e44b06b34
duration: 45
allow_submissions: true
outcomes:
  - 8599cc9a-82f8-4d7f-850f-0b804d5735bd
---

## Goal

In this activity you're going to learn about parsing command line arguments and converting data types. In doing so, you'll also be reviewing how to index arrays.

## Reading

To try out some of the code samples from the following readings, navigate to the directory you made for today's work.

```terminal
cd /vagrant/week1day1
```

From there you can make a new subdirectory for each reading or exercise.

### 1. How to parse command line arguments

> **Note:** Only the text up to "JS PRO TIP" in this reading is relevant for now.

[How to parse command line arguments (NodeJitsu)](https://docs.nodejitsu.com/articles/command-line/how-to-parse-command-line-arguments)

Command line arguments are a common way of getting user input in a program. This article shows you how to parse command line arguments to use in your code.

> To follow along: Create a new directory in `/vagrant/week1day1` and a new file `argv.js` inside it. If you get stuck, just finish the reading and see if you can do the exercises anyway.

### 2. MDN - Converting numeric strings to numbers

[Convert numeric strings to numbers (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number#Convert_numeric_strings_to_numbers)

As part of this exercise you'll have to convert numeric strings to numbers, and MDN can show you how.

> To follow along: try converting strings to numbers in an interactive Node session (just run `node` with no arguments).

## Exercise

In this exercise we want to build a simple calculator that can sum two numbers. We want to write some code to which we can pass arguments from the command line – these will be the numbers we want our simple calculator to add together.

```terminal
node sum.js 10 25
35
```

In the above command, the arguments passed to `sum.js` are `10` and `25`, and the result of adding them together is `35`. To build this small program, we're going to start by figuring out how to read command line arguments.

### Read command line arguments

In Vagrant, navigate back to `/vagrant/week1day1` and make a new subdirectory for this exercise.  Create a new file in this directory called `sum.js`.

Add the following code, which assigns the commandline arguments to a variable, and then logs them:

```javascript
var args = process.argv;
console.log(args);
```

Execute this file in the Terminal, making sure to pass a few arguments to it. Your output should look something like the following.

```terminal
node sum.js 10 25
[ 'node',
  '/vagrant/week1day1/sum.js',
  '10',
  '25' ]
```

As we can see, `process.argv` is an array containing all the command line arguments used to execute our code, including the interpreter `node` and the file we executed, in this case `/vagrant/week1day1/sum.js`. What we're interested in working with, however are the arguments to `sum.js`, so the third and fourth items in `process.argv`.

If you haven't completed Reading 1 above, now is the perfect time to do so.

### Add Two Numbers

Modify your code such that it extracts the third and fourth items in `process.argv`, adds them together, then logs the result to the console.

Remember, items in an array can be indexed using square brackets notation, and array indexes start at 0. For example, to get the third element in the array we would use the following code.

```javascript
process.argv[2]
```

<aside>
  <h3>Important Hint:</h3>

  <p>
    You'll find that the result of adding the two "numbers" passed to your code as command line arguments is not what you expect. This is because all command line arguments are strings and the <code>+</code> operator concatenates them. To calculate a sum, you'll want to convert the strings to numbers first. This is where Reading 2 comes in.
  </p>
</aside>

Given the following arguments, your code should output the following results once completed.

```terminal
node sum.js 4 5
9
```

```terminal
node sum.js 5 -12
-7
```

### Submit Your Work

To submit your work, browse to [gist.github.com](https://gist.github.com/) and create a new gist by copy-and-pasting your code into the form, naming the gist and the file appropriately, and clicking `Create secret gist`.

Finally, mark this activity as completed (at the top of this page) and please copy/paste the _entire_ browser URL into the text field.
