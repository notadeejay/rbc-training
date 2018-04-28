---
uuid: 29d26294-3bfb-4de9-a27c-196dfc119f7e
---

Next class we'll be taking the user input and using it to send a request to a server. To prepare for that, we're going to start by logging out the user input to our console.

## Tasks

- Add code so that when the user performs a search, the content of the search input is logged to the console

First things first - where should this code go? We want to capture the input when the user _submits_ their form. Good thing we already have an event handler for that! Yours may look similar to this (but if it doesn't, that's okay too! As long as it works!)

```javascript
  $('form').on('submit', function(event) {
        event.preventDefault()
        $(this).fadeOut(500)
        resultsLoop(weather)

        //new code here

      })
```

Start by targeting the input element. Hint: it's similar to how you targeted the `<form>` in the code above. 

Got it? 
### .val()

Next we'll use jQuery's `.val()` method to return the value of the element, like below

```javascript
$('p').val()
```

Adjust your code to capture the value of the input element.
### console.log

Now that you've done all of that, how do you tell if it's working? Remember our friend `console.log()`? We can use it to log the value to our console. Put your value method inside a `console.log` like the example below.

```javascript
console.log($('p').val())
```
### Storing our value
The user input seems pretty important, and we might want to use it later, so it's probably a good idea to store it somewhere. Edit your code to store the user input in a variable called `var userInput`

**Hint:** if you want to make sure you stored the value properly add the following console.log after your variable:

```javascript
    console.log(userInput)
```