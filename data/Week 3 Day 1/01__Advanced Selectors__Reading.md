---
uuid: 990f8592-a13c-4363-9fcb-1f528a5ee5b7
---


So far, we've been selecting elements for styling by their:

1. Element names
2. Classes
3. IDs

CSS also has some neat selectors that allow you to select elements on your page based on their relationship(s) to each other.

## Stacking selectors

We can apply the **same** styles to more than one selector. To do this, we separate our selectors with a comma.

```css
p, a {
  color: blue;
}
```

This CSS block would make all of the paragraph tags *and* anchor tags on our page have blue text.

It produces the same result as writing this:

```css
p {
  color: blue;
}

a {
  color: blue;
}
```

## Adjacent sibling selector


Remember that when we **nest** elements, like the `<p>` tags in the `<div>` in the example below, we refer to the `<div>` as the **parent** and the nested elements as **children**. 

```html
<div>
  <p>I'm a paragraph tag</p>
  <p>I get selected</p>
</div>

<div>
  <p>I'm a paragraph</p>
  <h2>I'm an h2</h2>
  <p>I do not get selected</p>
</div>

```

This means that we can also refer to the `<p>` tags as **siblings**. Sibling elements must have the same parent element, and "adjacent" means "immediately following".

If we only want to style paragraph elements that come immediately after another `<p>` element, we can use the adjacent sibling selector.

```css
p + p {
  color: green;
}
```

![](https://cl.ly/2D1c2Q412D3s/Image%202018-04-04%20at%204.10.19%20PM.png)


## General sibling selector

This will allow you to select all of the siblings that follow an element. For example, if we had this HTML:

```html
<div>
  <h2>Blog Post Title</h2>
  <p>Opening paragraph</p>
  <span>To be or not to be.</span>
  <p>I'm a paragraph tag nested inside of a div tag.</p>
  <p>I'm a second paragraph</p>
</div>
```

And we want to select all the `<p>` tags that come *after* the `<span>` tag, we could use:

```css
span ~ p {
  color: purple;
}
```


![](https://cl.ly/qfGQ/Image%202018-04-04%20at%203.59.22%20PM.png)


## Direct descendant selector

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

## All selector

Using `*` as a selector will match all elements. This will make all text green (unless, of course, more-specific CSS rules overwrite it):

```css
* {
  color: green;
}
```
