---
uuid: e05bb162-e79e-425b-b4fa-5874d4be235f
---

As we saw with **hover**, we can use CSS to add some movement to our webpage.

We've seen the example of a CSS element changing color when it's hovered over. We can control how that color change takes place, using a CSS **transition**. We can do this by setting four different properties for a transition.

### property
The `transition-property` is which property we are going animate during our transition.

```css
  div {
    transition-property: color;
  }
```

### delay
Once a transition is triggered, the delay is how long it will wait before the transition starts. Can be set to seconds (s) or milliseconds (ms).

```css
div {
  transition-delay: 1s;
}
```

### duration
How long the transition will take. Can be set to seconds (s) or millseconds (ms).

```css
div {
  transition-duration: 3s;
}
```

### timing function
The timing function dictates the speed of the transition over time. Should it start out really slow and then speed up, or evenly change throughout the duration? We can specify this with a `transition-timing-function`

How the transition is distributed across time.
Can be set to:
- ease-in
  - This is the default, it will start out slow before picking up speed near the end of the duration
- linear
  - The speed of this transition will be the same throughout the duration
- ease-in-out
  - The transition will be slow at the start and at the end.

```css
  div {
    transition-timing-function: ease-in-out;
  }
```

### shorthand

We can also define a transition all on one line, using this short hand

```css
div {
  transition: [property] [duration] [timing-function] [delay];
}
```

Let's add a transition to a div with a background-color that changes on a hover.

```css
  div {
    background-color: blue;
    transition: color 2s ease-in 500ms;
  }

  div:hover {
    background-color: yellow;
  }
```

The result in our browser would look like this:

![](https://cl.ly/2z0L0P3J0x0l/Screen%20Recording%202017-10-01%20at%2003.58%20PM.gif)

We trigger the transition by hovering over the element.

**Note**:
We can add a transition for most CSS properties, however there are a few that just won't work:
- display
- position
- font-family
