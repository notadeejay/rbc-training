---
uuid: 11510a3d-5e6a-425b-b824-ceb8957889d9
---

Let's add some pseudo selectors to your webpage.

## Tasks

- Add CSS so that when you hover over the links in your Nav Bar, they change colour (feel free to change other properties when you hover over the links as well)
- Add CSS so the first letter of each paragraph in the **About** section is bold
- Add CSS so that when someone highlights text on your resume page, it highlights it in your favourite colour

## CSS reference

#### :hover

Will apply styles to an element when the mouse cursor hovers over it.

```css
p:hover {
  font-color: green;
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

```css
div::selection {
  color: orange;
}
```
