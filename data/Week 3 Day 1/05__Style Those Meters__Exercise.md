---
uuid: d2b0d0d1-b982-4654-878b-c6804d128fd9
---

So far your resume page is looking pretty great. There's one spot we still need to take care of though:

The `<meter>` elements in your **Skills** section.

## Tasks
- [ ] Using pseudo elements style your meter tags to match the design
- [ ] Adjust the alignment, margin and padding of the **Skills** section to match the design

### Tips & Tricks

### Meter Bar

```css
  meter::-webkit-meter-bar {
    /* Add properties here */
  }
```

### Meter Optimum Value

```css
  meter::-webkit-meter-optimum-value {
    /* Add properties here */
  }
```

### background-color
Changes the background color of an HTML element. Can be set to a built in CSS color,
or a hexidecimal value.

```css
  article {
    background-color: blue;
  }
```

### What is Webkit?
We've said before that the browser adds default styles to our HTML. What those default styles look like sometimes depends on the browser that is used. For example, certain elements might look different in firefox than they do in chrome.

At the same time, just like human languages evolve over time, so do coding languages, like HTML and CSS. When new tags and properties are added to HTML and CSS, not all browsers implement them the exact same way, or at the same time. When we use
