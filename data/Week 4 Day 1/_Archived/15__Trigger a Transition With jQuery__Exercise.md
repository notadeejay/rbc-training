---
uuid: 66c34974-d6c7-4403-8fdf-665e3e26c7fc
stretch: true
archived: true
---

Last week we learned about CSS animations and transitions. We triggered these animations and transitions
with a hover. We can also trigger transitions and animations with jQuery. One way to do this, is by **adding and removing classes**.


### addClass

Will add a class to an HTML element.

```javascript
$('p').addClass('highlight')
```

### removeClass

Will remove a class from an HTML element.

```javascript
$('p').removeClass('highlight')
```

### toggleClass

This works kind of like a light switch. If the element has the class, it will remove it. If the element doesn't have the class, it will add it!

```javascript
$('p').toggleClass('highlight')
```

## Examples

HTML:
```html
<div class="circle"></div>
<button>Change Color</button>
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


Now, when we click the button, our class **green** will be added and removed from the our circle.

![](https://cl.ly/1d2B3h0o3k1N/Screen%20Recording%202017-11-25%20at%2002.15%20PM.gif)

### Tasks
- Play around with triggering a CSS transition by adding or removing a class from an element in your jQuery project
