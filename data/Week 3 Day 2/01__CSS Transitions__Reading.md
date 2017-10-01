---
uuid: e05bb162-e79e-425b-b4fa-5874d4be235f
---

Not only can CSS change the colors, fonts and layouts of your page,
but we can even get our elements moving around our webpages, just using CSS.

There are two main ways to do this, with CSS **transitions** and CSS **animations**.
We'll start by looking at CSS Transitions.


### Animatable Properties
- font-size
- background-color
- width
- left

###### Performant Properties
- position
- scale
- rotation
- opacity

Cannot animate:
- display
- position
- font-family




### Introduce Transform Property
```css
  .box {
    transform: translate(), rotate()
  }
```
<!-- Note look up pointer evets -->

### How do you Trigger a Transformation?
- hover
- class changes

<!-- http://oli.jp/2010/css-animatable-properties/ -->
### CSS Transitions

CSS Transitions give you more control over how styles change on your webpage. For example,
we learned how we can change elements when they are being hovered over. CSS transitions can let
us control more of how that change in style takes place:

If we have this HTML:

```
<h1>Hover Over Me</h1>
```

With this CSS:

```css
h1:hover {
  color: red;
}
```

To add a transition we need to specify what **properties** we want to transition,
how long we want the transition to last for.

```css
  h1 {
    transition-property: color;
    transition-duration: 3s;
  }
```

Output:

![](https://cl.ly/1D103N2B3G2a/Screen%20Recording%202017-09-17%20at%2003.19%20PM.gif)

We can also transition more than one property:

```css
  h1:hover {
    color: red;
    font-size: 50px;
  }

  h1 {
    transition-property: color, font-size;
    transition-duration: 3s, 6s;
  }
```

In this example, the color transition will take 3 seconds, while the font-size will take 6.

![](https://cl.ly/2j2r3S0f1P3e/Screen%20Recording%202017-09-17%20at%2003.23%20PM.gif)

We can also add a delay to our transitions.

```css
  h1 {
    transition-property: color, font-size;
    transition-duration: 3s, 6s;
    transition-delay: 2s;
  }
```

This way, once we hover over our element, the transition won't occur for 2s.

![](https://cl.ly/1H0R1G45352e/Screen%20Recording%202017-09-17%20at%2003.28%20PM.gif)


We can also add a **timing function** to our transition. This dictates how the transition will take place, we can set it to:
- ease
![](https://cl.ly/1V3F3w0J1O1X/Screen%20Recording%202017-09-17%20at%2003.56%20PM.gif)
- linear
![](https://cl.ly/2H2V3d1u1q1d/Screen%20Recording%202017-09-17%20at%2003.57%20PM.gif)
- step-end
![](https://cl.ly/0a2s413f3S3u/Screen%20Recording%202017-09-17%20at%2003.57%20PM.gif)
- steps()
With steps, we can specify how many "steps" the transition will take:

```css
.cirlce {
  transition-timing-function: steps(4, end);
}  
```
![](https://cl.ly/2t2I1C251J0J/Screen%20Recording%202017-09-17%20at%2003.59%20PM.gif)




We can also add transitions in a single line of CSS.

Shorthand for the one transition value:

```css
div {
  transition: <property> <duration> <timing-function> <delay>;
}
```

So, our above transition can be written as:

```
h1 {
  transition: color, 3s,
}
```
