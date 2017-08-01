---
uuid: 1f621076-76cf-11e7-b5a5-be2e44b06b34
start_time: 900
duration: 90
---

## Goal

How to work iteratively and incrementally. How to debug. How to manually test your code. Writing clean code.

These concepts will be covered by the instructor as they work with the class to live code a solution to a small problem. The goal is not "what is the solution?" but rather "how do we build towards the solution in an ideal manner?" with a focus on workflow and the developer's approach / inside voice.

## Teacher Notes

Use the (given) live-coding exercise so that there is a mission. However, the goal of the lecture is not to just solve the problem. It's to use it as a hook for the students. As you (slowly!) work through the problem, your focus is not on the algorithm or even on JavaScript syntax (only).

The main goal is to focus on **Approach**:

> How to work iteratively and incrementally. How to debug. How to manually test your code. Writing clean code.

#### Live coding:

> Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though.

**Important**: This is their first tech lecture and many students will tend to try and follow along. Before you start, mention / remind that they should not try and copy the code and instead make notes of the important points that you are going to make, and write action items to google/read later. Eg if I talk about a feature or function like Array slice, write down "Research: array slice, for process.argv.".

#### Approach:

- Break your solution into functions as you go
- Write in small (smallest possible executable program) steps
- Don't get hung up on "how does ARGV work?" type questions. Not the focus of the lecture. Tell them this but also try to give them a summary and explain that lecture isn't the best way to learn what ARGV is. Reading about, playing with, and speaking with mentors about ARGV is the best way.
- Run linter at some point?
- Use `node debug` with `debugger` and cover next vs continue vs step in/out
  - More importantly, go over thinking behind HOW and WHEN/WHERE to use this.

#### Things to emphasize:

Make sure you cover and even "run into" some of these important points as you go through the live coding exercise.

- Intending code as you go
- Avoid copy/pasting anything
- Errors are your friend, but you have to try and understand what they are saying and not guess
- Typical week1 research path:
  - Google for a question (how do you phrase it?)
  - Stackoverflow is first hit, shows an approach, is it valid?
  - I've never seen this weird arrow function syntax before that is in the approved answer, wtf. What does that mean? How do I interpret that?
  - Going to MDN to check for other examples.
- At what point should I ask for mentor support? How should the question be formulated?
  - Reemphasize: 15m rule (explained on D1 but must reiterate here)
  - Reemphasize: don't just say "it's not working" to a mentor; explain first what you're trying to solve and where you are stuck. Even asking for help properly is a skill that will take some time for you to acquire, we don't expect it to be perfect on D2 but we expect you to work towards improving it.
  -Reemphasize: Code reviews and their importance

#### *Out of scope:*

- Any ES6/2015 syntax (just use var, forEach, `function`)
- ES5 vs ES6 feature comparison
- JavaScript obscurities (the bad parts) (null vs undefined, hoisting, etc, etc)
- Computational complexity, algos, etc
- functions as "callbacks" (no setTimeout, etc) -- covered in breakout
- closures
- npm / modules
