---
uuid: fde6f0c5-1abd-4e21-9123-f04839b2c673
---

CSS not only lets us change fonts and colors, but also allows us to change the layout of our page. Before we start adjusting the layout of our page, we need to understand the `display` property.

We know that our browser applies default styles to our HTML elements. One of these default styles is `display`.

## display

### display: block

A block level element will take up the **entire** space of its parent element.

It can contain other block elements or inline elements.

A great example of a block element is a paragraph.

```html
<p>
  I'm a block level element.
</p>
```

The paragraph element will stretch all the way across its parent:

![block element example](https://cl.ly/3o1D32200U0j/Image%202017-10-01%20at%2012.30.59%20PM.png)

##### Block Elements

- headings (`<h1>`, `<h2>`, `<h3>`,`<h4>`,`<h5>`,`<h6>`)
- div (`<div>`)
- section (`<section>`)
- footer (`<footer>`)
- article (`<article>`)
- paragraph (`<p>`)
- lists (`<ul>`, `<ol>`)
- nav (`<nav>`)


### display: inline

Inline elements do not start a new line when they are rendered in the browser. They only take up as much space as the content needs. A span tag is an example of an inline element.

```html
<span>
  I'm an inline element.
</span>
```

When we compare a block element (the paragraph) to an inline element, the size difference becomes apparent.

![](https://cl.ly/030Y00123f2z/Image%202017-10-11%20at%207.07.33%20PM.png)

Inline elements contain only data and other inline elements.

Unlike block elements, we can't add a width, height, padding or margin to inline elements.
They simply take up as much room as they need to display their content. No more, and no less.

##### Inline Elements

- anchor (`<a>`)
- em (`<em>`)
- strong (`<strong>`)
- span (`<span>`)

### display: inline-block

An `inline-block` element has, as you might have guessed, properties of both. It doesn't automatically create a new line in the browser, but it can have a margin, padding, height, and width.

Image tags (`<img>`) and buttons (`<button>`) are the only two HTML tags who have a default `inline-block` display property.


### display: flex

To code the layout for our profile pages, we're going to be using **Flexbox**. Flexbox (also known as CSS Flexible Box) is a layout module in CSS. It allows you to specify
how elements on your page should appear. It is great for layouts that need to adapt to different screen sizes and display devices.

Remember that when we nest HTML elements we refer to the outer element as the **parent** and the inner elements as the **children**.

```html
<section class="parent">
  <div class="a">A</div>
  <div class="b">B</div>
  <div class="c">C</div>
  <div class="d">D</div>
</section>
```

To start using Flexbox, we add the `display: flex` property to the **parent** element.

```CSS  
.parent {
  display: flex;
}
```
![](https://cl.ly/1x3S3Y412O0J/Screen%20Recording%202017-10-01%20at%2012.57%20PM.gif)

## Parent Properties

These are a list of properties we can apply to the parent element when we're using Flexbox. The parent element is also sometimes referred to as the **container** element.

### flex-direction

Defines the direction that the children (also know as flex items) will appear in. We can set these to columns or rows,
and dictate if the child elements should be displayed in reverse order.

The flex direction also determines the **main axis** for the flex container. If we set to a row (the default), the main axis is horizontal,
if we set the flex direction to use columns, it will be vertical.

#### row-reverse

```css
.parent {
  display: flex;
  flex-direction: row-reverse;
}
```

![](https://cl.ly/1E3W2M3k3A2A/Image%202017-10-01%20at%201.01.42%20PM.png)

#### column

```css
.parent {
  display: flex;
  flex-direction: column;
}
```

![](https://cl.ly/2y3M3k3f1C2b/Image%202017-10-01%20at%201.02.19%20PM.png)

#### column-reverse

```css
.parent {
  display: flex;
  flex-direction: column-reverse;
}
```

![](https://cl.ly/140x052Q3Y2W/Image%202017-10-01%20at%201.03.10%20PM.png)

### justify-content

The `justify-content` property will determine where the flex items are along the **main axis**.

#### flex-end

```css
.parent {
  display: flex;
  justify-content: flex-end;
}
```

![](https://cl.ly/3V402n3s1O2o/Image%202017-10-01%20at%201.12.53%20PM.png)

#### center

```css
.parent {
  display: flex;
  justify-content: center;
}
```

![](https://cl.ly/0W0g3S0i1J3A/Image%202017-10-01%20at%201.13.27%20PM.png)

#### space-between

```css
.parent {
  display: flex;
  justify-content: space-between;
}
```

![](https://cl.ly/1m1d3c0a171S/Image%202017-10-01%20at%201.14.13%20PM.png)

#### space-evenly

```css
.parent {
  display: flex;
  justify-content: space-evenly;
}
```

![](https://cl.ly/2d031U0I0A0L/Image%202017-10-01%20at%201.14.47%20PM.png)


### align-items

Just how `justify-content` determines how the flex items are laid out on the main axis, `align-items` determines
how they are laid out on the **cross axis**.

So, if our flex-direction is set to row (the default), our cross axis is vertical.

#### flex-start

```css
.parent {
  display: flex;
  align-items: flex-start;
}
```

![](https://cl.ly/2j172l1v3v2q/Image%202017-10-01%20at%201.18.16%20PM.png)

#### flex-end

```css
.parent {
  display: flex;
  align-items: flex-end;
}
```

![](https://cl.ly/0J1F1t0a0a0S/Image%202017-10-01%20at%201.19.09%20PM.png)

#### center

```css
.parent {
  display: flex;
  align-items: center;
}
```

![](https://cl.ly/0h1o1w1F1i29/Image%202017-10-01%20at%201.19.37%20PM.png)

#### baseline

```css
.parent {
  display: flex;
  align-items: baseline;
}
```

![](https://cl.ly/3I3n3F0f1m0l/Image%202017-10-01%20at%201.20.41%20PM.png)

#### stretch

```css
.parent {
  display: flex;
  align-items: stretch;
}
```

![](https://cl.ly/3J0I3Q3A2v2I/Image%202017-10-01%20at%201.21.32%20PM.png)

## Child Properties

### order

We can control which order the elements appear in using the `order` property, whose default value is `0`.

If we add `order: 1;` to the div holding the letter A:

```css
.a {
  order: 1;
}

.b {
  order: 4;
}

.c {
  order: 3;
}

.d {
  order: 2;
}
```

This lets us reorder how the elements appear in on the page, without changing out HTML.

![](https://cl.ly/1F0l3Z2h381j/Image%202017-10-25%20at%207.46.29%20PM.png)


### flex-grow

The `flex-grow` property dictates how much space a flex item should take up.

```css
.b {
  flex-grow: 3;
}
```

Here the `.b` element takes up three times as much space as the others.
![](https://cl.ly/3G0J422y461I/Image%202017-10-01%20at%201.34.05%20PM.png)


## Resources

- [CSS Flexbox Explained by Road Tripping Across the Country](https://medium.freecodecamp.org/css-flexbox-explained-by-road-tripping-across-the-country-1217b69c390e)
- A more in-depth explanation of Flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- If you prefer a more interactive approach, you can play around with Flexbox properties here: <http://learn-flexbox.surge.sh/> – be sure to check out the corresponding code snippets at the bottom of the page.
