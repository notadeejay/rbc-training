---
uuid: 3519ddb2-d265-46da-8429-79b52263e032
---

Event listeners are what makes a lot of the interaction with jQuery possible. It's a very powerful part of jQuery, and a feature that you will be using as you build your project. By adding a few lines of JavaScript, we can "listen" for when the user clicks, hovers, presses keys, or even refreshes the page.

Adding an event listener requires a few steps.

1. Select the elements you would like to add an event listener to.
2. Decide which type of event you would like to listen for.
3. Add code to dictate what happens when that event occurs.

## The `this` keyword

The keyword `this` is something you'll probably see a lot once you start writing jQuery. For the most part, `this` is going to refer to the element to which you "bound" an event listener.

For example, when a user clicks on an element, thus triggering a `click` event, `this` will refer to the element that was just clicked.

## click

This jQuery code will listen for a click on the elements that are selected, and then make the text in the clicked elements blue.

```javascript
$('p').on('click', function() {
  $(this).css('color', 'blue')
})  
```

![](https://cl.ly/2T1M1u0B0v0A/Screen%20Recording%202017-10-02%20at%2005.29%20PM.gif)

## mouseenter

This event will fire when a user starts to hover over the selected element. Once this event occurs, the box will slide up over two seconds.

```javascript
$('.box').on('mouseenter', function() {
  $(this).slideUp(2000)
})
```

![](https://cl.ly/0I1A1p393K2C/Screen%20Recording%202017-10-02%20at%2005.40%20PM.gif)

## mouseleave

This event will fire when a user *stops* hovering over the selected element. Once the event has occurred, the element will fade out over two seconds.

```javascript
$('.box').on('mouseleave', function() {
  $(this).fadeOut(2000)
})
```

## Tips & Tricks

#### Keep your code DRY (Don't Repeat Yourself)

I might sound like a broken record with this, but it's important that web developers don't write more code than necessary. If you start to feel like you're writing the same code over and over again, it's probably a good sign you can make some changes and reuse a function or two.

Let's say you have two HTML elements on your page, like this:

![](https://cl.ly/0f0g3y2k440i/Image%202017-10-03%20at%207.31.40%20PM.png)

And we want to add code so that when we **click** the red box, it turns yellow, and when we **hover** over the blue box, it also turns yellow.

We could do this with some jQuery code:

```javascript
$('.red').on('click', function() {
  $(this).css('background-color', 'yellow')
})

$('.blue').on('hover', function() {
  $(this).css('background-color', 'yellow')
})
```

You might notice that the code defining what happens when each respective event is triggered is **identical**. This means we can **refactor** this code so that both of the event listeners call one function, avoiding repetition.

```javascript
function changeBackgroundColor() {
  $(this).css('background-color', 'yellow')
}

$('.red').on('click', changeBackgroundColor)
$('.blue').on('hover', changeBackgroundColor)
```

This way, if we decide we want to change the background colour to purple, not yellow, we'd only have to update one line of code.
