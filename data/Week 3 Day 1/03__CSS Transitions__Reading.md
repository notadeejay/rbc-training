---
uuid: e05bb162-e79e-425b-b4fa-5874d4be235f
---

We saw with the CSS **hover** property, using just CSS we can start to make our
web page interactive. When a use takes an action (like hovering over an element),
we can add CSS code to respond to that.

You might have noticed when you change styles using the `hover` pseudo selector that
the effect can be a bit jarring. With CSS **transitions** we can control how those properties move from one value to another.

Transitions have four values that we need to set:

### property
<!-- This sentence is awkward, but I can't think of another one right now. -->
The `transition-property` is the property that is going to be transitioned on.

```css
  div {
    transition-property: color;
  }
```

### delay
Once a transition is triggered, how long before the transition starts. Can be set to seconds (s) or milliseconds (ms).

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
How the transition is distributed across time.
Can be set to:
<!-- Add quick explanation for each one -->
- ease
- linear
- step-end
- step-start

```css
  div {
    transition-timing-function: ease;
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
