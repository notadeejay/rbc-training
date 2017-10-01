---
uuid: 7dd57358-a644-4281-b726-45afc1a9260e
---


As more people access the internet from mobile devices, making sure your site
looks great on all platforms becomes more and more important. CSS gives us
**media queries**, so we can apply different styles at different screen widths and devices.

Media Queries are a great way to adjust the layout of your page so it looks great on any device.


![common layout](https://cl.ly/3Y451J0N0h1G/Image%202017-09-21%20at%205.50.56%20PM.png)

As the page resizes, our sidebar and main elements can get a bit squished:

![no query resize](https://cl.ly/0P0o3f331d1F/Screen%20Recording%202017-09-21%20at%2005.52%20PM.gif)


If we add media queries to adjust how these elements should be displayed:
![media query example](https://cl.ly/1o0U1g3A1b1i/Screen%20Recording%202017-09-21%20at%2005.49%20PM.gif)


Much better!


Basics of Media Queries:

```css
  @media [media-type] and (expression) {
    /* Styles to be applied on screen type */
  }
```

We start with the `@media` keyword, then we say what **screen sizes** and what **screen types** we would like these styles to be applied to.


```css
  @media screen (max-width: 800px) {
    div {
      background-color: green;
    }
  }
```

This example would apply a `background-color` of green to a screen that has a **maximum** width of `800px`. In other words, screens that are less that 800px.
