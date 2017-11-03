---
uuid: 9e00cd08-56fe-4f07-a793-dc1473d76f9d
---

The `background` property in CSS has several different properties that we can assign it to. We've previously used it to set the colour of our elements. We can get even more specific with those colours when we start to use **gradients**. Gradients allow us to have a background that transitions between two or more colours.

There are a few different types of gradients.


## Linear Gradient

When we define a linear gradient, the colour transitions progressively along an imaginary line. We can specify which colours we would like it to transition through, and which direction we would like this imaginary line to start in.

```css
background: linear-gradient(direction, color-stop1, color-stop2, ...)
```


### Examples

#### Horizontal

This will cause the gradient to go from yellow to red as we move to the left of the element.

```css
  .box {
    background: linear-gradient(to left, yellow, red);
  }
```

![](https://cl.ly/33070K0T2D1S/Image%202017-10-22%20at%202.49.55%20PM.png)

We can also use
- to right
- to left
- top

#### Rotate

We can also rotate the gradient line, so that it's at an angle. Using this technique, we could make only the top corner of a rectangle a different color.

```css
.box {
  background: linear-gradient(45deg, blue, red);
}
```

![](https://cl.ly/0S1s3c2U2m0H/Image%202017-10-22%20at%202.48.07%20PM.png)

#### Gradient Line

By default, each color you specify in a gradient will take up the same amount of space. That is to say, if you have four colors, they will each take up roughly 25% of that imaginary line.

In this example, instead of having our element be half yellow, and half red, we set the first color to take up 75% the element. In other words, our element will be 75% yellow, and 25% red.

```css
.box {
  background: linear-gradient(to right, yellow, 75%, red);
}
```

![](https://cl.ly/0n0I1d1G020l/Image%202017-11-03%20at%2012.52.44%20PM.png)


## Radial Gradients

A radial gradient transitions colours starting from the centre. Note that this property can take as many colors as you would like.

```css
background: radial-gradient( start-color, middle-color, last-color);
```

### Examples

```css
  div {
    background: radial-gradient(red, yellow, green);
  }
```

![](https://cl.ly/2H3W2v3v0r0r/Image%202017-11-03%20at%2012.54.36%20PM.png)

### Tasks

- [ ] Add a gradient to your resume page
- [ ] Open up a new code pen, and play around with the different types of gradients

### Additional Resources

- https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients
