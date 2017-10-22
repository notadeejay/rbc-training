---
uuid: 25df5728-f058-47cd-8d10-c3399a283714
---

Today, we talked about CSS transitions. They can give you control over how an element changes from one value of a property to another, for instance when it's going from the "regular" to the hover state.

### Tasks

- [ ] Add a transition for the hover state on your anchor tags

If your hover state changes more than one property, be sure to add transitions for all of them.

### Tips and Tricks

#### transition

To define a CSS transition we need to set the:

- `transition-property`
- `duration`
- `timing-function`
- `delay`

We can do this by setting each property individually:

```css
  div {
    transition-property: font-size;
    transition-duration: 2s;
    transition-timing-function: linear;
    transition-delay: 1s;

  }
```

Or we can declare it all on one line using this shorthand:

```css
div {
  transition: [property] [duration] [timing-function] [delay];
}
```

Example:

```css
div {
  transition: font-size 2s linear 1s;
}
```
