---
uuid: c227e89a-8a15-4704-93d4-42b4bb24b1d2
---

## Tasks

- Add styles so that when you view your resume page on a mobile screen, all of the link tags in your Nav Bar are still visible
- Add styles so that on a mobile screen, your picture sits below your name and occupation
- Add styles so that the content in your **Experience**, **Skills** and **Footer** sections is clearly visible on a mobile screen
- Fix any other responsiveness issues you found in the previous activity

## CSS reference

To fix these responsive issues, you might find these properties helpful.

#### order

Property applied to flex items. The default order is 0. Elements with a higher order number appear later in the collection.

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

In this example, the div containing the "A" would appear after the other divs in the container because it has the highest order property.

#### @media

Allows specific styles to only be applied on specific screen types and screen widths.

```css
@media (min-width: 600px) {
  p {
    color: blue;
  }
}
```

This will make all paragraph tags blue on screen sizes larger than 600px.
