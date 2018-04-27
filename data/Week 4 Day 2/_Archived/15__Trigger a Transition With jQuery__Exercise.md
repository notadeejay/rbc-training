---
uuid: 112fc7ce-9e89-4618-84b4-94d3fa27f327
archived: true
---

We've learned about CSS animations and transitions, which we triggered with a hover. We can also trigger transitions and animations with jQuery. One way to do this is by adding and removing classes from our HTML elements.

Consider the following example:

HTML:

```html
<div class="circle"></div>
<button>Change Colour</button>
```

CSS:

```css
.circle {
  height: 200px;
  width: 200px;
  background-color: pink;
  border-radius: 50%;
  transition-property: background-color;
  transition-duration: 2s;
  transition-timing-function: ease-in;
}

.green {
  background-color: green;
}
```

JavaScript:

```javascript
$('button').on('click', function() {
  $('.circle').toggleClass('green');
})
```

Now, when the button is clicked, the `green` class will be added and removed from the circle. This sets its background colour to green or pink, respectively.

![](https://cl.ly/1d2B3h0o3k1N/Screen%20Recording%202017-11-25%20at%2002.15%20PM.gif)

## Tasks

- Play around with triggering a CSS transition by adding or removing a class from an element in your jQuery project

## jQuery reference

#### addClass

Will add a class to the selected HTML element(s).

```javascript
$('p').addClass('highlight')
```

#### removeClass

Will remove a class from the selected HTML element(s).

```javascript
$('p').removeClass('highlight')
```

#### toggleClass

This works kind of like a light switch. If the element(s) has the class, it will remove it. If the element(s) doesn't have the class, it will add it!

```javascript
$('p').toggleClass('highlight')
```
