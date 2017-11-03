---
uuid: 6ce9139f-ac11-465a-b70e-6fbda046d607
---

Let's add some margin and padding to our sections. If we look at the mockup, we see that our **Header**, **About**, **Skills**, **Experience**, and **Footer** sections all have the same amount of padding. You'll notice when you look at the design all of the subtitles are an equal space away from the edge of their containing divs.

## Tasks

- [ ] Add padding to the **Header**, **About**, **Skills**, **Experience** and **Footer** sections
- [ ] Adjust the padding on the `<body>` element to eliminate any gaps on the page


## Tips & Tricks

Remember that we can add the same styles to multiple elements by separating our selectors with commas. For example:

```css
header, .highlight, p strong, h1 {
  color: blue;
}
```

### margin

Adds space between an element and those that surround it.

```css
  .sidebar {
    margin: 20px;
  }
```

### padding

Adds space between the content and the border of an HTML element.

```css
  div {
    padding: 20px;
  }
```
