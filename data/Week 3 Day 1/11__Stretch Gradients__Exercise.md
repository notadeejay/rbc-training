---
uuid: 9e00cd08-56fe-4f07-a793-dc1473d76f9d
---

We can also customize the backgrounds of our elements using gradients. Gradients are a great way to add texture and depth to your webpage.


## Linear Gradient

```css
background: linear-gradient(direction, color-stop1, color-stop2, ...)
```


### Examples

#### To Left

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

#### Rotated

```css
.box {
  background: linear-gradient(45deg, blue, red);
}
```

![](https://cl.ly/0S1s3c2U2m0H/Image%202017-10-22%20at%202.48.07%20PM.png)

#### Gradient Line

In this example, we've set the gradient to start at 75% of the way across the element.

```css
.box {
  background: linear-gradient(30deg, yellow, 75%, red);
}
```

![](https://cl.ly/2b3n1r1r2209/Image%202017-10-22%20at%202.51.31%20PM.png)


## Radial Gradients

A radial gradient is defined by it's center.

```css
background: radial-gradient(shape size at position, start-color, ..., last-color);
```

### Examples

```css
  div {
    background: radial-gradient(circle, red, yellow, green);
  }
```


### Tasks

- [ ] Add a gradient to your resume page
- [ ] Open up a new code pen, and play around with rotating

### Additional Resources

- https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Using_CSS_gradients
