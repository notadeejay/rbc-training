---
uuid: 9d1bab17-fa85-4136-baf4-4a44258188d3
---

We've discussed that there are several ways to select an element using CSS.

We can use tag names:

```css
  p {
    color: blue;
  }
```

Or class names:

```css
  .highlight {
    color: yellow;
  }
```

or ids:

```css
  #alert {
    background-color: red;
  }
```

In addition to the **cascade** how *specific a selector is* has an impact on which rules
are applied to which element. As a general rule
- An ID is more specific than a class
- A Class is more specific than a tag name

 If this is our HTML:

```html
  <section id="about">
    <h3>All About Sherman</h3>
    <div>
      <p class="highlight">I'm a dog.</p>
    </div>
  </section>
```

And we add this CSS:

```css

#about {
  color: blue;
}

div p .highlight {
  color: yellow;
}

```

The content would appear on the page with blue font. This is because the ID is more specific
than the elements and the class name. Even though they come later in the cascade, they don't override the styles applied by the ID.
