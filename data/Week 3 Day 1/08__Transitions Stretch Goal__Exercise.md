---
uuid: da5d4723-c521-4140-93c4-eaa41c5a388a
---

So far, when we've written transitions we've used built in timing functions, like **ease** or **linear**. CSS also allows us to customize these timing functions even further. So you can get your transitions *just* right.

### Tasks

- [ ] Go to code pen and create a pen
- [ ] Define a transition
- [ ] Experiment with using different timing functions

### Cubic Bezier

Add notes about the `cubic-bezier` timing function, and how it can make your transitions even better.



##### Additional Readings:
- http://callmenick.com/post/level-up-your-css-animations-with-cubic-bezier

### Define a Cubic Bezier Function

```css
cubic-bezier(x1, y1, x2, y2)
```


```css
  p {
    transition-timing-function: cubic-bezier(0, 1, 0, 1.2);
  }
```


### Steps
Step functions are also known as staircase functions.


```css
  steps(number_of_steps, direction)
```


#### direction
- start
 - denotes a left-continuous function, so that the first step happens when the animation begins;
- end
 - denotes a right-continuous function, so that the last step happens when the animation ends.



### Frames
