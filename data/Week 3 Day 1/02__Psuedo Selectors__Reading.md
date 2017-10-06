---
uuid: 647a2942-78cf-4dd2-b7c5-d3c1571d0099
---

Pseudo Classes let us style elements when they are in a specific state. For example, we can apply specific styles
to an element only when it's being hovered over.

This is the general syntax that we follow when we're using pseudo selectors. We add our selector, followed by a semi-colon and the name of the pseudo selector we'd like to use.

```css
selector:pseudo-class {
  property: value;
}
```

### Hover

Will style the specified element when the element is hovered over.

```css
  .box:hover {
    color: green;
  }
```

Example:
![hover example](https://cl.ly/3W1C0L3K0N22/Screen%20Recording%202017-10-05%20at%2008.03%20PM.gif)


### First Of Type

This will select the first element of that type.

If we have this list in our HTML:

```
<h4>Planets</h4>
<ul class="planet-list">
  <li>Mars</li>
  <li>Jupiter</li>
  <li>Saturn</li>
  <li>Mercury</li>
</ul>
```

This CSS:

```css
  .planet-list li:first-of-type {
    background-color: yellow;
  }
```

Would only apply to the first li element in the list.

![first-of-type example](https://d3vv6lp55qjaqc.cloudfront.net/items/2A4300010N0S2v1K091O/Image%202017-09-17%20at%202.06.38%20PM.png)

### Nth Of Type

Nth-of-type works let's you select an element based on its type and order. For example, if we wanted to only select
every other planet in our list:

```css
  .planet-list li:nth-of-type(odd) {
    background-color: yellow;
  }
```


![](https://cl.ly/0L0q1s1r1V0Y/Image%202017-09-17%20at%202.28.54%20PM.png)


We can also use even as an argument


```css
  .planet-list li:nth-of-type(even) {
    background-color: yellow;
  }
```

![](https://cl.ly/0d2Q1q0P1V2Y/Image%202017-09-17%20at%202.30.16%20PM.png)

We can also use a number, and say exactly which element we want to select.

```css
  .planet-list li:nth-of-type(2) {
    background-color: yellow;
  }
```

![](https://cl.ly/1Q0f0Y0R3I2P/Image%202017-09-17%20at%202.31.45%20PM.png)


### First Child

```css
  .planet-list li:first-child {
    color: green;
  }
```
![](https://cl.ly/3n1H0H2i1R2h/Image%202017-10-05%20at%208.05.58%20PM.png)

### Last Child

```css
  .planet-list li:last-child {
    color: green;
  }
```
![](https://cl.ly/2s3b0K0i1l0F/Image%202017-10-05%20at%208.06.22%20PM.png)

In addition to these psuedo classes, there are several more you can use.
[Here](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) is the official
documentation.


<!--  
  Add a challenge to make a tool tip of of HTMl + CSS
  https://codepen.io/MaggieMoss/pen/RLZZRR
-->


## Pseudo Elements

You can also do some fun things with **pseudo elements**. While pseudo classes style elements when they are in a specific **state**, pseudo elements style specific parts of an element.

In general, when we use pseudo elements, we use a selector, two semi colons, and the name of the psuedo element.

```css
selector::pseudo-element {
    property:value;
}
```


#### ::selection

This allows you to customize how your page appears when someone highlights text from it.

```css
  p::selection {
    color: yellow;
  }
```

![](https://cl.ly/0q0u1l133l1L/Screen%20Recording%202017-10-01%20at%2002.58%20PM.gif)

#### ::first-letter

Will style the first letter contained in the element

```css
  p::first-letter {
    font-size: 30px;
    color: red;
  }
```

![](https://cl.ly/1N2K2w1J1z2q/Image%202017-10-01%20at%202.59.19%20PM.png)
