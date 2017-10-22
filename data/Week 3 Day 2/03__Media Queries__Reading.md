---
uuid: 7dd57358-a644-4281-b726-45afc1a9260e
---

Many people have experienced visiting a website on their phone only to have a difficult time navigating around it. Maybe you had to scroll to the left and right to read the content, or no matter what you tried, you couldn't click the Nav Bar.

As more people access the internet from mobile devices, making sure your site looks great on all platforms is becoming increasingly important. Using CSS **media queries** we can apply different styles at different screen widths for different devices.

Take this layout for example:

![common layout](https://cl.ly/3Y451J0N0h1G/Image%202017-09-21%20at%205.50.56%20PM.png)

As the page resizes, our sidebar and main elements can get a bit squished:

![no query resize](https://cl.ly/0P0o3f331d1F/Screen%20Recording%202017-09-21%20at%2005.52%20PM.gif)


But, if we were to add media queries to adjust how these elements should be displayed, this would now look like this:

![media query example](https://cl.ly/1o0U1g3A1b1i/Screen%20Recording%202017-09-21%20at%2005.49%20PM.gif)


Much better!

### Basics of Media Queries

```css
  @media [media-type] and (expression) {
    /* Styles to be applied on screen type */
  }
```

We start with the `@media` keyword, then we specify what **screen sizes** and what **screen types** we would like these styles to be applied to.


```css
  @media screen (max-width: 800px) {
    div {
      background-color: green;
    }
  }
```

This example would apply a `background-color` of `green` to a screen that has a **maximum** width of `800px`. In other words, screens that are less than 800 pixels wide.


### Examples

```css
  @media screen (min-width: 500px) {
    main {
      display: flex;
    }
  }
```

This media query would add the `display: flex` rule to the `<main>` element on screen sizes larger than 500 pixels.
