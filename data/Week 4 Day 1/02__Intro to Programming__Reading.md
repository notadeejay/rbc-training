---
uuid: 4b1ef6b8-b337-4afb-8ea4-e597af23de0c
---

#### What is programming?
When you break it down code is just a way to provide your computer with some instructions. When you learn to code, you’re learning how to communicate with your computer. Earlier in the course you created an applet on IFFTT. Code often follows the same logic, if this happens, then do this.

When we communicate with each other, we rely on a lot of context. If someone sent you a text that said:

`Can you make me a cup of tee?`

Even though they made a spelling errors, you, as a human, could figure out that what they were trying to say. When we communicate instructions to computers, we have to be very specific. We need to break down problems into steps so simple even a computer can understand them.

When you are asked to make a cup of tea, you don’t need instructions on how to do it, you likely know you need to get a mug and boil some water. If you were instructing a computer, you would have to ‘explain’ what a mug is, how to open a package of tea, what temperature the water needs to be heated to, and explicitly define the order in which the steps need to take place.

When you’re learning to code, and even when you’ve been writing code for a while, it’s common to make mistakes. Sometimes it will feel like NOTHING is working, and the fix will be one teeny, tiny apostrophe or quote. Try not to get discouraged, this
happens to everyone.

## Data Types

Take a second and think about all of the information you put into your computer or your phone each day. Let’s pretend you are buying concert tickets online.

- [ ] Make a quick list of all the information you need to input in order to buy tickets to see your favourite artist.


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

All of the information we input into our apps and programs needs to be represented in our code. To make this process easier, all coding languages have common data types. Just like we have numbers and words, code does too.

Today we're going to review all of these data types, and practice using them in JavaScript.

For today's exercises we're going to be writing our code in the browser. To start, go to [repl.it](https://repl.it/languages/javascript). You can sign up using your Github or Google account if you would
like to save your work from week to week. Since we're only going to be using this app today, you can also close
the pop up, and start writing your code in the panel on the left.

![repl video](https://d3vv6lp55qjaqc.cloudfront.net/items/1y2J3Y2A0H33112x1H0d/Screen%20Recording%202017-09-04%20at%2011.19%20AM.gif?X-CloudApp-Visitor-Id=2818368&v=e0f9521c)

As you can see, you can write your code in the white panel on the left, click the `run` button, and see the
output of your code on the right.

##### Tips


**console.log**
If we want to print something to the screen (also known as the console) on the right,  in JavaScript we use the `console.log` function. For example, if you want to see your name printed on the right, you would do something like:

```javascript
console.log("Maggie")
```

**Errors**
If you make a mistake, JavaScript will do it's best to help you out. For example, if you forget to add a closing `)` bracket on the above code, you will get an `error message` like so:

![error message example](https://d3vv6lp55qjaqc.cloudfront.net/items/0A230t2j1p3Z2D462B1z/%5B64d0ffd99e5671f7bd69ce1cd84cf237%5D_Image+2017-09-04+at+11.23.54+AM.png?X-CloudApp-Visitor-Id=2818368&v=afeeafa6)

One of the hardest parts of learning a programming language is learning to understand the error messages. Do your best to read them though, they often contain helpful hints and can point you in the right direction when you're trying to fix your code.

**Comments**

In JavaScript, anything after two slashes `//` is a comment. This means that the computer will just skip right over them.
Comments are for YOU the developer, not your computer. They're a handy way to add notes to your code, or leave a message
for another developer.  
