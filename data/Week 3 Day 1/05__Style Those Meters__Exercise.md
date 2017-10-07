---
uuid: d2b0d0d1-b982-4654-878b-c6804d128fd9
---

<!--
  @Horatiu
  I'm currently re-writing this one here.
  (07/10/2017) Skip this one if you get to it in the review before I have a chance to finish it.
 -->

So far your resume page is looking pretty great. There's one spot we still need to take care of though:

The `<meter>` elements in your **Skills** section.

The `<meter>` element has a few Psuedo Elements we can use to style it.

```html
<meter max="10" value="8">
```

By default, this is how the browser styles our meter:

![](https://cl.ly/3P042M0n3y3l/Image%202017-10-07%20at%2012.45.00%20PM.png)

## Tasks
- [ ] Using pseudo elements style your meter tags to match the design
- [ ] Adjust the alignment, margin and padding of the **Skills** section to match the design

### Tips & Tricks

### Meter Bar

This is the container that holds the meter gauge. If our meter was a thermometer, it would be
the glass surrounding it.
```css
  meter::-webkit-meter-bar {
    /* Add properties here */
  }
```

### Meter Optimum Value

This is the current value of the meter element. By default, it's green.

```css
  meter::-webkit-meter-optimum-value {
    /* Add properties here */
  }
```

### background-color
Changes the background color of an HTML element. Can be set to a built in CSS color,
or a hexadecimal value.

```css
  article {
    background-color: blue;
  }
```

### What is Webkit?
We've said before that the browser adds default styles to our HTML. What those default styles look like depends on the browser that is used. For example, certain elements might look different in Firefox than they do in Chrome.

At the same time, just like human languages evolve over time, so do coding languages, like HTML and CSS. When new tags and properties are added to HTML and CSS, not all browsers implement them the exact same way, or at the same time.

Safari and Chrome use `-webkit` so, when we add that keyword, it's instructions specific to those browsers.

<!-- I can't figure out how to word this simply. Will come back and edit before thursday -->
