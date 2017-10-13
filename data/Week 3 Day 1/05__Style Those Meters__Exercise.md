---
uuid: d2b0d0d1-b982-4654-878b-c6804d128fd9
---

So far your resume page is looking pretty great. There's one spot we still need to take care of though: The `<meter>` elements in your **Skills** section. The `<meter>` element has a few pseudo elements we can use to style it.

```html
<meter max="10" value="8">
```

By default, this is how Google Chrome styles our meter:

![](https://cl.ly/3P042M0n3y3l/Image%202017-10-07%20at%2012.45.00%20PM.png)

We can break down our `<meter>` into two main components:

![](https://cl.ly/0e0d2V0r3k3f/[552bc9df5aa600c67b19da8507d54361]_Image%202017-10-07%20at%201.13.13%20PM.png)

Using CSS pseudo elements, we can add styles these meter components.


```css
meter::-webkit-meter-bar {
  background: blue;
}

meter::-webkit-meter-optimum-value {
  background: yellow;
}
```

## Tasks

- [ ] Using pseudo elements, style your meter tags to match the design
- [ ] Adjust the alignment, margin, and padding of the **Skills** section to match the design

## Tips & Tricks

### -webkit-meter-bar

This is the container that holds the meter gauge. If our meter were a thermometer, the `meter-bar` would be the glass surrounding it.

```css
meter::-webkit-meter-bar {
  border-radius: 10px;
}
```

### -webkit-meter-optimum-value

This is the current value of the meter element. By default, it's green.

```css
  meter::-webkit-meter-optimum-value {
    /* Add properties here */
  }
```

### background
Changes the background of an HTML element. Can be set to a built in CSS colour,
or a hexadecimal value.

```css
  article {
    background: blue;
  }
```

### What is Webkit?

We've said before that the browser adds default styles to our HTML. What those default styles look like depends on the browser that is used. For example, certain elements might look different in Firefox than they do in Chrome.

At the same time, just like human languages evolve over time, so do coding languages like HTML and CSS. When new tags and properties are added to HTML and CSS, not all browsers implement them exactly the same way, or even at the same time.

When Safari and Chrome add new CSS properties that can be styled – like the pseudo elements for meter tags above, a `-webkit-` prefix is added to these properties to signify that these CSS rules are specific to these browsers.
