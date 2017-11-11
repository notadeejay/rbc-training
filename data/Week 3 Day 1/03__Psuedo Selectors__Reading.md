---
uuid: 647a2942-78cf-4dd2-b7c5-d3c1571d0099
---

Pseudo Selectors allow us to add a little bit of interactivity to our web page.
We can style elements when they are in a specific state. For example, when an element
is being hovered over, we can dictate if the styles should change.

To style an element using a pseudo selector we follow this pattern:

```css
selector:pseudo-class {
  property: value;
}
```

We first select our elements using a class name, element name or an id, and then
we say which pseudo selector we'd like to target.

### Hover

Will trigger when a user moves their cursor over the selected element. It's useful
when you want a button or link to change it's appearance when a user hovers over it.

```css
  p:hover {
    color: green;
  }
```

Example:
![hover example](https://d3vv6lp55qjaqc.cloudfront.net/items/1v3i1G083w0G1T2b2H1y/Screen%20Recording%202017-09-17%20at%2001.59%20PM.gif)


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

We can also use an number as an argument, here we're only selecting the second element
of that type:

```css
  .planet-list li:nth-of-type(2) {
    background-color: yellow;
  }
```

![](https://cl.ly/1Q0f0Y0R3I2P/Image%202017-09-17%20at%202.31.45%20PM.png)


### First Child

```css
  .planet-list:first-child {

  }
```

### Last Child

```css
  .planet-list:last-child {

  }
```

In addition to these psuedo classes, there are several more you can use.
[Here](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) is the official
documentation on what each psuedo class does.
