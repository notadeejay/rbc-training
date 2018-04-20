---
uuid: b5e880a8-848d-4465-85ea-5073f1869f91
stretch: true
---

In addition to having CSS **transitions**, CSS also has **animations**. If we're getting technical (and we are) a CSS transition *is* an animation, but we can also have animations that don't rely on a hover or a transition.

Animations are made up of two key pieces: the **animation properties** and the **keyframes**. The **keyframes** will tell us _what_ is happening, and the **animation properties** will define _how_ it's happening.

## Keyframes

Keyframes are not involved with a selector, they just sit in your CSS file.

```css
@keyframes [name] {
  from {
    [styles];
  }

  to {
    [styles];
  }
}
```

We start with the keyword `@keyframes` followed by a name. You can name a keyframes definition whatever you like.

```css
@keyframes grow-taller {
  from {
    height: 100px;
  }

  to {
    height: 300px;
  }
}
```

Instead of `to` and `from`, we can also define keyframes using percentages.

```css
@keyframes change-colors {
  0% {
    color: red;
  }

  50% {
    color: blue;
  }

  100% {
    color: purple;
  }
}
```

## Defining animation

We can customize an animation with several properties, which we place our animation properties inside of a regular CSS block. Some of these properties you may recognize from the transition properties we learned about last week.

#### animation-name

The name of your animation should match **exactly** the name of your keyframes. It's what links your keyframes and your animation together.

```css
.example {
  animation-name: grow-taller;    
}
```

#### animation-duration

This specifies how long it an animation will take from start to finish (or from 0% to 100%).

```css
.example {
  animation-name: grow-taller;
  animation-duration: 3s;
}
```

#### animation-timing-function

The timing function dictates the speed of the transition over time.

```css
.example {
  animation-name: grow-taller;
  animation-timing-function: ease-in-out;
}
```

`ease-in-out` means the animation will progress slower at the start and end than it will in the middle.

#### animation-delay

This specifies how long the animation will wait after being triggered before it starts.

```css
.example {
  animation-name: grow-taller;
  animation-delay: 3s;
}
```

#### animation-iteration-count

This specifies how many times the animation will repeat before stopping. It can be set to a number or to `infinite`. If you don't set this property, your animation will play just once.

```css
.example {
  animation-name: grow-taller;
  animation-iteration-count: 2;
}
```

#### animation-direction

Specifies in which direction the animation will occur. You can set it to:

- `normal`
- `reverse`
- `alternate`
- `alternate-reverse`

```css
.example {
  animation-name: grow-taller;
  animation-direction: reverse;
}
```

#### animation-fill-mode

Controls how the element will look once the transition has completed. If we set it to `forwards`, when the animation ends the styles in the `to` block of the keyframe will still be applied.

```css
.example {
  animation-name: grow-taller;
  animation-fill-mode: forwards;
}
```

#### animation-play-state

Can be set to either `running` or `paused`.

```css
.example {
  animation-name: grow-taller;
  animation-play-state: paused;
}
```

#### Shorthand

We can also define all of these values on one line:

```css
.example {
  animation: [name] [duration] [timing-function] [delay] [iteration-count] [direction] [fill-mode] [play-state];
}
```

Phew. That's a _lot_ of values. Fortunately, you do not need to set all of these values for your animation to work – just the ones you need.

### Example

Given this HTML:

```html
<div></div>
```

And this CSS:

```css
div {
  height: 100px;
  width: 200px;
  background-color: green;

  animation-name: growtaller;
  animation-duration: 4s;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-play-state: play;
}

@keyframes growtaller {
  from {
    height: 100px;
  }
  to {
    height: 500px;
  }
}
```

The result will be the following:

![](https://cl.ly/3B1O200B2628/Screen%20Recording%202017-10-01%20at%2004.56%20PM.gif)

For another example, see <https://codepen.io/MaggieMoss/pen/vepbdX?editors=1100>.
