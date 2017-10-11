---
uuid: 7dd57358-a644-4281-b726-45afc1a9260e
---

Everyone has experienced visiting a website on their phone, and having a difficult time navigating around it.
Maybe you had to scroll to the left and right to read the content, or no matter how you tried you couldn't click the nav bar.

As more people access the internet from mobile devices, making sure your site
looks great on all platforms continues to become more and more important. Luckily, CSS gives us
**media queries**, so we can apply different styles to different screen widths and devices.

Take this layout for example:

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


### Examples

```css
  @media screen (min-width: 500px) {
    main {
      display: flex;
    }
  }
```

This media query would add the display **flex** property to the `<main>` element on screen sizes larger than 500px.
