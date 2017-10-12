---
uuid: c227e89a-8a15-4704-93d4-42b4bb24b1d2
---

### Tasks

- [ ] Add a media query and styles to when you view your resume page on a smaller screen, all of the link tags in your nav bar are still visible
- [ ] Add styles so on a smaller screen size your picture sits below your name and occupation
- [ ] Add styles to make sure the content in your **Experience** section is not squished on smaller screen sizes
- [ ] Add styles to make sure the content in your **Skills** section looks great on smaller screen sizes
- [ ] Add styles to make sure the content in your **Footer** section looks great on smaller screen sizes

### Tips and Tricks

To fix these responsive issues, you might find these properties helpful

### order
Property applied to flex items, the default order is 0. Elements with a higher order number appear later in the collection.

```html
  <div class="parent">
    <div class="a">A</div>
    <div class="b">B</div>
    <div class="c">C</div>
    <div class="d">D</div>
  </div>
```

```css
.parent {
  display: flex;
}

.a {
  order: 1;
}
```

In this example, the div containing the A would appear after the other divs in the container, because it has the highest order property.

### @media
  Allows specific styles to only be applied on specific screen types, and screen widths.

```css
  @media (min-width: 600px) {
    p {
      color: blue;
    }
  }
```
This will make all paragraph tags blue on screen sizes larger than 600px.
