---
uuid: 11510a3d-5e6a-425b-b824-ceb8957889d9
---

Let's add some pseudo selectors to your webpage.

### Hover

The hover pseudo selector

When a cursor hovers over an element, we can change that elements style using the `:hover` pseudo
selector.

```css
  p:hover {
    font-style: italic;
  }
```

For example, this would change the font-style for our `p` element to italic when we hover over it.

### Tasks

- [ ] Add CSS so when you hover over the links in your nav bar, they change color.
- [ ] Play around with changing the font-size, font weight or even font-family when you hover over your links.


### Visited

Will style all visited links.

```css
  nav a:visited {
    color: grey;
  }
```

## Pseudo Elements

## ::selection

This allows you to customize how your page appears when someone highlights text from it.

```css
  p::selection {
    color: yellow;
  }
```

## ::first-letter

Will style the first letter contained in the element

```css
  p::first-letter {
    color: orange;
  }
```
