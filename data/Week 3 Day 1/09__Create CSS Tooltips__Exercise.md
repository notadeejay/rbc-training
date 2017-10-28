---
uuid: 9911c596-defd-4366-bf15-1929b926cb43
stretch: true
---

Using pseudo selectors we can make our webpages a little bit more interactive. For example, we can do so by creating tooltips using the **Adjacent Sibling Selector**.

```html
<h2>Instructions</h2>
<p>Tooltip</p>
```

```css
p {
  display: none;
}

h2:hover + p {
  display: block;
}
```


![](https://cl.ly/3m2g241n3j1y/Screen%20Recording%202017-10-22%20at%2002.35%20PM.gif)

## Tasks

- [ ] Add a hidden tooltip to your **Download CV** button
