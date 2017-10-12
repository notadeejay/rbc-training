---
uuid: 8b93e314-dd90-40f5-a059-b1021ff08a47
---

<!-- http://www.hongkiat.com/blog/css3-bounce-effect/ -->

If you haven't already added a **Download CV** button to your resume site,
follow the instructions from [this]() stretch goal.
<!-- Add link to button stretch goal when links are confirmed -->

A CSS property that can help us write some incredible animations is the **transform** property.


#### Transform

The transform property applies a 2D or 3D transformation to an element. Using it, we can
`rorate`, `scale`, and `skew` our elements.

**skew**

```css
  .square {
    transform: skew(20deg, 30deg);
  }
```

![](https://cl.ly/360F1a3Q1P2D/Image%202017-10-01%20at%206.34.14%20PM.png)

**scale**

```css
  .square {
    transform: rotate(30deg);
  }
```

![](https://cl.ly/3x072d120l2z/Image%202017-10-01%20at%206.34.43%20PM.png)

**rotate**

```css
  .square {
    transform: scale(3);
  }
```

![](https://cl.ly/0s2123303B1a/Screen%20Recording%202017-10-01%20at%2006.36%20PM.gif)

### Tasks

- [ ] Add an animate that will rotate, or scale your download cv button when a user hovers over it.


### Tips & Tricks

#### Animations

Animations require two pieces the **keyframe** and the **animation properties**


We define keyframes using the `@keyframes` keyword

```css
  @keyframes wobble {
    from {
      transform: rotate(120deg)
    }
    to {
      transform: rotate(10deg)
    }
  }
```

Then we define our animation properties:

- `animation-name` - the name of the keyframe
- `animation-duration` - how long the animation will take
- `animation-timing-function` - function that defines the speed of the animation over time
- `animation-delay` - how long the transition will wait to start after it's been triggered
- `animation-iteration-count` - how many times the animation will repeat
- `animation-direction` - which direction the animation will go (reverse, alternate, normal)
- `animation-fill-mode` - which styles will be applied when the animation is finished
- `animation-play-state` - can be set to `play` or `paused`

```css
div {
  animation-name: wobble;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-play-state: play;
}
```
