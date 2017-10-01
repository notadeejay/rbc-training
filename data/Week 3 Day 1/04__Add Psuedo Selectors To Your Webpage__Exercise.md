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
- [ ] Add CSS so the first letter of each paragraph in the **About** section is bold
- [ ] Add CSS so when someone highlights text on your resume page, it highlights it in your favourite color.

### Tips and Tricks

#### hover
Will apply styles to an element when it is in a hover state.

```css
  p:hover {
    font-size: green;
  }
```


#### visited
Will style all visited links.

```css
  nav a:visited {
    color: grey;
  }
```


#### ::first-letter

Will style the first letter of the content

```css
div::first-letter {
  text-decoration: underline;
}
```

#### ::selection

Will add styles to text when it is highlighted

```
div::selection {
  color: orange;
}
```
