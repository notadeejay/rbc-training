---
uuid: fde6f0c5-1abd-4e21-9123-f04839b2c673
---


## Block Vs. Inline Elements

By default, HTML elements are either **block** elements, or **inline** elements.

Block elements take up as much space width-wise as they can. Each block element will
appear on it's own line in an HTML page.

Inline elements only take up as much space as they actually need. Inline elements will
sit next to each other on an HTML page if space allows.

We can change the `display` property of HTML elements using CSS


### display: inline-block;

Inline-block elements are like inline elements, but you can set a width and height on them.
This means, they can sit next to each other nicely.

### display: flex;

To code the layout for our profile pages, we're going to be using **flexbox**. Since layouts are a common
problem in CSS, flexbox aims to fix some of the common issues developers encounter when building web pages.

Remember that when we nest HTML elements we refer to the outer element as the **parent** and the inner elements
as the **children**.

If you have some HTML set up like so:

```HTML
  <section class="parent">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </section>
```


To start using flex box, we add the `display: flex` property to the **parent** element.

```CSS  
  .parent {
    display: flex;
  }
```

Then, there are several properties we can apply to the parent, or flex box container.

- Flex Direction
- Flex Wrap
- Justify Content
- Align Items
- Align Content

Play around with these flexbox properties [here](http://learn-flexbox.surge.sh/), and see code snippets at the bottom of the page.
