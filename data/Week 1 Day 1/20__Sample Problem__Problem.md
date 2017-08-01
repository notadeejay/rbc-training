---
uuid: 1f6201e4-76cf-11e7-b5a5-be2e44b06b34
duration: 60
allow_submissions: true
outcomes:
  - 7c70fed0-8ac1-441e-be1a-231370a536c3
---

## Goal

In this activity you're going to review the fundamental programming concepts of variables, types, operators and conditionals while solving a small problem involving conditional statements.

## Reading

### [Prep Course – Conditional Execution](/ba6a4409-2a1b-413e-836a-11f3d05fc814)

It may be a little while since you've completed the fundamentals of programming module in the Prep Course, in which case you may consider reviewing how to write conditional statements in JavaScript.

## Problem

It's the first day of Bootcamp, and as you're wondering how to make the most of it, your stomach grumbles. Breakfast feels like such a distant memory and you just about get up to pick up lunch. But before you do, trying to capture every opportunity you can to write some code, you decide to build a little program to help you choose where you'll eat lunch.

You realize this decision depends on two things. First if you're hungry or not, and second, how much time you have. You want your program to tell you to wait until you're hungry if you're not. If you are, you want your program to do one of the following three things.

* If you have less than 20 minutes, you want your program to tell you to pick something up and eat in back in the Lab or in the kitchen, where you can get to know your fellow classmates.
* If you have at least 20 minutes but no more than 45 (because you've been working hard and are ahead of schedule), you want your program to tell you that you deserve a break and could try a place in Gastown.
* If you have more than 45 minutes, you want your program to remind you that this is a bootcamp after all and you should probably reconsider.

### Steps

If you haven't already do so in the [previous introduction to gists exercise](/6e0e429a-670e-4acb-9dd9-a3b226209b20), **fork and clone [this gist](https://gist.github.com/kvirani/125d2e9f46faab4049e0a50660170fd2)** into your working directory, of course within your Vagrant dev environment.

Next, run the cloned code using the `node lunch.js` command in your Terminal (from within the gist/repo directory) and notice that the current output is incorrect.

```terminal
node lunch.js
I'm hungry and I have 20 minutes for lunch.
I don't know what to do!
---
I'm hungry and I have 50 minutes for lunch.
I don't know what to do!
---
I'm not hungry and I have 30 minutes for lunch.
I don't know what to do!
---
I'm hungry and I have 15 minutes for lunch.
I don't know what to do!
```

Now here's the fun part! Write the conditionals (that is, `if` statements) that take care of what you should do for lunch and output the instructions to the Terminal. You should do this inside the `whatToDoForLunch` function (between the curly braces).

```javascript
function whatToDoForLunch(hungry, availableTime) {
  // Write your code here
}
```


### Tips

Recall what we've learned about values, types, operators, conditionals and functions in the Prep Course. You don't have to use all these JavaScript features to solve this problem, but you'll need to understand them. If you're stuck, try experimenting with the comparison operators (`<`, `>`, `===`, etc.) in the node REPL, which you can launch using the `node` command in Vagrant, to help you come up with the conditions you'll need.

Work on your code iteratively – that means in small pieces. Start by checking whether you're hungry, make sure that part works, then add the checks for how much time you have one by one.

To help you figure out how to use `hungry` and `availableTime` inside your function, try outputting their values to the Terminal as follows.

```javascript
function whatToDoForLunch(hungry, availableTime) {
  console.log("hungry is", hungry);
  console.log("availableTime is", availableTime);
}
```

### Done?

Once your program works correctly, refactor your code to make it cleaner. Check with your peers and your mentors to see how you might do that!

Remember to commit and push your work. So that means from within the project folder, in your Vagrant, you'll go through the following commands/workflow:

```terminal
git add lunch.js
```

```terminal
git commit -m "Some important context here"
```

```terminal
git push

Counting objects: 3, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 332 bytes | 0 bytes/s, done.
Total 3 (delta 1), reused 0 (delta 0)
To git@gist.github.com:d1ae37333163a7aa96d064fbe1f10ca9.git
   bf5c560..473adb3  master -> master
```
