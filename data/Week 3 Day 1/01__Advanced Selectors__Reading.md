---
uuid: 990f8592-a13c-4363-9fcb-1f528a5ee5b7
---


So far, we've been selecting elements for styling by their:
1. Element names
2. Classes
3. IDs

CSS also has some neat selectors that allow you to select elements on your page based on their relationship(s) to each other.

### Stacking Selectors

We can apply the **same** styles to more than one selector. To do this, we separate our selectors with a comma.

```css
  p, a {
    color: blue;
  }
```

This CSS block would make all of the paragraph tags *and* anchor tags on our page have blue text.

It is the exact same as writing this:

```css
p {
  color: blue;
}

a {
  color: blue;
}
```

### Adjacent Sibling Selector

Remember that when we **nest** elements, like the `<h1>` and `<p>` tags in the `<div>` in the example below, we refer to the `<div>` as the **parent** and the nested elements as **children**.

```html
<div>
  <h1>Hello World</h1>
  <p>I'm a paragraph tag</p>
  <p>Another paragraph tag</p>
</div>
```

This means that we can also refer to the `<h1>` and `<p>` tags as **siblings**.

If we only want to style paragraph elements that come immediately after an `<h1>` element, we can use the adjacent sibling selector.

```css
  h1 + p {
    color: green;
  }
```

![](https://cl.ly/0U251Y0c0Y0R/Image%202017-10-05%20at%207.54.18%20PM.png)


### General Sibling Selector

This will allow you to select all of the siblings that follow an element. For example, if we had this HTML:

```html
<article>
  <h2>Blog Post Title</h2>
  <p>Opening paragraph</p>
  <blockquote>To be or not to be.</blockquote>
  <p>I'm a paragraph tag nested inside of a div tag.</p>
  <p>I'm a second paragraph</p>
</article>
```

And we want to select all the paragraph tags that come *after* the `<blockquote>` tag, we could use:

```css
  blockquote ~ p {
    color: purple;
  }
```

![](https://cl.ly/383H1E1V0a12/Image%202017-10-05%20at%207.55.19%20PM.png)


### Direct Descendant Selector

The child selector allows you to style all direct descendants.

```html
<main>
  <h2>My Awesome Website</h2>
  <div>
    <h2>About Me</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</main>
```

We can use the child selector like so:

```css
  main > h2 {
    color: purple;
  }
```

This would style only the first `<h2>`, since the second is not a **direct** descendant of the `<main>` tag.

![](https://cl.ly/3R0t3D2n1i2R/Image%202017-10-05%20at%207.56.29%20PM.png)

### All Selector

Using `*` as a selector will match all elements. This will make all text green (unless, of course, more-specific CSS rules overwrite it):

```css
  * {
    color: green;
  }
```
