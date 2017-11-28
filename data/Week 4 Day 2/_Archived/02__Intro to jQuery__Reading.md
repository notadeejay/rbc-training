---
uuid: 4cc131e1-68da-4a62-8a11-840d6c86fba5
archived: true
---

## Why jQuery?

jQuery is one of the most popular JavaScript libraries. Thanks to jQuery, making your website interactive is much simpler than it would be if you were using just plain JavaScript. It does this by providing you with a bunch of helper methods.

## The $

When you're using jQuery, one thing that you'll see often is the `$` symbol.

The dollar sign is simply shorthand for `jQuery`. Writing `$('div')` is the exact same as writing `jQuery('div')`; it's just shorter and easier to type.

As we're learning jQuery in this course, whenever we want to use a jQuery method, we'll use the `$` shorthand.

## Selecting elements with jQuery

Just like when we're writing CSS, when we're writing jQuery, we're going to be **selecting** elements on the page. To select an element with jQuery we follow this pattern:

```javascript
$(selector)
```

We can select by:

#### Tags

```javascript
$('div p')
```

#### Classes

```javascript
$('.highlight')
```

#### IDs

```javascript
$('#alert')
```

#### Pseudo selectors

```javascript
$('p:first')
```

## Adding and removing classes and styles

jQuery gives us a few helpful methods for adding and removing classes from our HTML elements.

#### addClass

Will add a class to an HTML element.

```javascript
$('p').addClass('highlight')
```

#### removeClass

Will remove a class from an HTML element.

```javascript
$('p').removeClass('highlight')
```

#### toggleClass

This works kind of like a light switch. If the element has the class, it will remove it. If the element doesn't have the class, it will add it!

```javascript
$('p').toggleClass('highlight')
```

#### css

We can also add inline styles directly to an HTML element using jQuery. This line of code would result in all of the paragraph tags on the page having blue text.

```javascript
$('p').css('color', 'blue')
```

## Animations

CSS isn't the only tool we can use to animate elements – we can also use jQuery. In the following jQuery animation methods, the first argument will be how long the animation will take. It serves the same purpose as the `duration` property in CSS animations.

#### hide

```javascript
$('.box').hide(500)
```

![](https://cl.ly/3C0a3G3h1c13/Screen%20Recording%202017-10-01%20at%2009.47%20PM.gif)

#### show

```javascript
$('.box').show(500)
```

![](https://cl.ly/2R2D2R2K3N17/Screen%20Recording%202017-10-01%20at%2009.48%20PM.gif)

#### slideUp

```javascript
$('.box').slideUp(500)
```

![](https://cl.ly/2Y2A1G043q01/Screen%20Recording%202017-10-01%20at%2009.49%20PM.gif)

#### slideDown

```javascript
$('.box').slideDown(1000)
```

![](https://cl.ly/2B3n0H0n0W0m/Screen%20Recording%202017-10-01%20at%2009.50%20PM.gif)

#### fadeOut

```javascript
$('.box').fadeOut(750)
```

![](https://cl.ly/3Q3Q1v3Z3b0E/Screen%20Recording%202017-10-01%20at%2009.51%20PM.gif)

#### delay

We can also chain jQuery methods together, like we've done here:

```javascript
$('.box').fadeIn(1000).delay(2000).fadeOut(1000)
```

![](https://cl.ly/2j3a0v3N1q1i/Screen%20Recording%202017-10-01%20at%2009.54%20PM.gif)


## What is the DOM?

The HTML that you write is parsed by the browser and turned into a structure the computer can work with more easily – this is known as the Document Object Model, or DOM for short. The DOM represents the page so that programs can change the document structure, style, and content. The webpages we created in your HTML & CSS projects were documents which could be displayed in the browser or as HTML files.

Every element in a document — the document as a whole itself, the head, elements within the body of the document, text, etc — is part of the DOM for that document, so they can all be accessed and manipulated using JavaScript.


## DOM traversal

Remember that when we talk about nested HTML elements, we refer to them as **parents**, **siblings**, and/or **children** depending on their relationships. jQuery gives us a handy way to select elements based on these relationships.

The following examples will be working with this sample HTML:

```html
<article>
  <h2>I'm an article title</h2>
  <h6>I'm a subtitle</h6>
  <p>I'm a paragraph</p>
  <ul>
    <li>First list item</li>
    <li>Second list item/li>
  </ul>
</article>
```

#### children

```javascript
$('ul').children()
```

Would select **both** of the list items (`<li>`s).

#### parents

```javascript
$('li').parents()
```

This would select **all** of the parents of the list items: `<ul>`, `<article>`, `<body>`, and `<html>`. (The latter two are not part of the example, but implied since the HTML snippet will be inside the body of an HTML page).

We can also specify **which** parent we would like to select by passing a selector as an argument.

```javascript
$('li').parents('article')
```

#### siblings

```javascript
$('h2').siblings()
```

This would select the `<h6>`, `<p>`, and `<ul>`.

#### first

```javascript
$('ul').children().first()
```

This would select the **first** list item in our unordered list.

#### last

```javascript
$('ul').children().last()
```

This would select the **last** list item in our unordered list.

## Tips & Tricks

#### Keep an eye on the console

As you move through your jQuery project you will find it helpful to keep your console open. If you make a mistake, or jQuery throws an error, you will be able to see it in your browser's JavaScript console.
