---
uuid: b5e880a8-848d-4465-85ea-5073f1869f91
---

In addition to having CSS **transitions**, CSS also has **animations**. If we're getting technical (and we are) a CSS transition *is* an animation, but we can also have animations that don't rely on a hover or a transition.

Animations are made up of two key pieces, the **animation properties** and the **keyframes**. The **keyframes** will tell us WHAT is happening, and the **animation properties** will define HOW it's happening.

### Keyframes

These keyframes are not involved with a selector, they just sit in your CSS file.

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



### Animation Property

We place our animation property *inside* of our CSS block. We can customize our animation
with several properties. Some of them you may recognize from the transition property we learned about last week.

#### name

The name of your animation should match **exactly** the name of your keyframes. It's what links your keyframes and your animation together.

```css
  .example {
    animation-name: grow-taller;    
  }
```

#### duration

How long it will take for the animation to complete.

```css
  .example {
    animation-name: grow-taller;
    duration: 3s;
  }
```

#### timing-function

The timing function dictates the speed of the transition over time.

```css
  .example {
    animation-name: grow-taller;
    animation-timing-function: ease-in-out;
  }
```

`ease-in-out` means the animation will progress slower at the start and end than it will in the middle.

#### delay

How long the animation will wait after being triggered before it starts.

```css
  .example {
    animation-name: grow-taller;
    animation-delay: 3s;
  }
```

#### iteration-count

How many times the animation will repeat before stopping. It can be set to a number, or to `infinite`.

```css
  .example {
    animation-name: grow-taller;
    animation-iteration-count: 2;
  }
```

#### direction

How the animation will occur. You can set it to:

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

#### fill-mode

Controls how the element will look once the transition has completed. If we set it to `forwards`, when the animation ends, the styles in the `to` block of the keyframe will still be applied.

```css
  .example {
    animation-name: grow-taller;
    animation-fill-mode: forwards;
  }
```

#### play-state

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

Phew. That's a LOT of values. You do not need to set ALL of these values for your animation to work.

### Examples

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
