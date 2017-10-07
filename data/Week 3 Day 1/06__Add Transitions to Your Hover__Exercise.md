---
uuid: 25df5728-f058-47cd-8d10-c3399a283714
---

Today, we talked about CSS transitions. They can give you control over how an element changes from one value of a property to another, for instance when it's going from the "regular" to the hover state.

### Tasks

- [ ] Add a transition for the hover state on your anchor tags
- [ ] See if you can transition on more than one property

### Tips and Tricks

#### transition

The transition property takes

```css
div {
  transition: [property] [duration] [timing-function] [delay];
}
```

```css
div {
  transition: font-size 2s linear 1s;
}
```

CSS transitions can be triggered by a hover.
