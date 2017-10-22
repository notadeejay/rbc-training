---
uuid: 9911c596-defd-4366-bf15-1929b926cb43
---

When we start using pseudo selectors, we can start to make our webpage a little bit
more interactive.

We can also add tooltips using just HTML and CSS.


To do this, we can use the **Adjacent Sibling Selector**


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

### Tasks

- [ ] Add a hidden tooltip to your resume page
