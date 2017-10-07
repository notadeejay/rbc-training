---
uuid: 11510a3d-5e6a-425b-b824-ceb8957889d9
---

Let's add some pseudo selectors to your webpage.

### Tasks

- [ ] Add CSS so that when you hover over the links in your Nav Bar, they change colour
- [ ] Play around with changing the font-size, font weight or even font-family when you hover over your links
- [ ] Add CSS so the first letter of each paragraph in the **About** section is bold
- [ ] Add CSS so that when someone highlights text on your resume page, it highlights it in your favourite colour

### Tips and Tricks

#### :hover
Will apply styles to an element when the mouse cursor hovers over it.

```css
  p:hover {
    font-size: green;
  }
```

#### :visited

Will style all visited links.

```css
  nav a:visited {
    color: grey;
  }
```


#### ::first-letter

Will style the first letter of the text content.

```css
div::first-letter {
  text-decoration: underline;
}
```

#### ::selection

Will add styles to text when it is highlighted.

```
div::selection {
  color: orange;
}
```
