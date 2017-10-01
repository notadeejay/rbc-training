---
uuid: 990f8592-a13c-4363-9fcb-1f528a5ee5b7
---


So far, we've been styling elements by their:
1. Element names
2. Classes
3. Ids

CSS has a bunch of advanced selectors that we can use to get even more specific about the elements we are styling.


#### Stacking Selectors

We can apply the **same** styles to more than one selector. To this, we separate our selectors with a comma.

```css
  p, a {
    color: blue;
  }
```

This CSS block would make ALL of the paragraph tags, and anchor tags on our page have a blue font.
It is the exact same as writing this:

```css
p {
  color: blue;
}

a {
  color: blue;
}
```

#### Adjacent Sibling Selector

Remember that when we **nest** elements, like the `h1` and `p` tags in this `div`:

```html
<div>
  <h1>Hello World</h1>
  <p>I'm a paragraph tag</p>
</div>
```

We refer to the `div` as the **parent** and the nested elements as **children**. This means
that we can also refer to the `h1` and `p` tags as **siblings**.

If we only want to style paragraph tags that come immediately after an `h1` element, we can use
the adjacent sibling selector.

```css
  h1 + p {
    color: blue;
  }
```


#### General Sibling Selector

This will allow you to select all of the siblings that follow an element. For example,
if we had this HTML:

```html
<article>
  <h2>Blog Post Title</h2>
  <p>Opening paragraph</p>
  <blockquote>To be or not to be.</blockquote>
  <p>I'm a paragraph tag nested inside of a div tag.</p>
  <p>I'm a second paragraph</p>
</article>
```

And we want to select all the paragraph tags that comes *after* the `blockquote` tag, we could use:

```css
  blockquote ~ p {
    font-size: 20px;
  }
```


#### Direct Descendant Selector

The child selector allows you to style all direct descendants.

```
<main>
  <h4>My Awesome Website</h4>
  <div>
    <h4>About Me</h4>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
</main>
```

We can use the child selector like so:

```css
  main > h4 {
    color: purple;
  }
```

This would style only the first h4, since the second is not a **direct**
descendant of the `main` tag.

#### All Selector

Using `*` as a selector will match all elements.

```css
  * {
    color: green;
  }
```

This might seem like a funny selector to use. After all, it's rare that you would want
to apply a style to **every** element on your page.
