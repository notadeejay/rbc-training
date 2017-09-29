---
uuid: 33067b13-1aae-47ca-87ff-7e388c7867ce
---

Let's move on to the experience section. First, let's take a second and notice
that we want all of our experience entries to **share** styles. When you notice shared
styles between elements, it's often a good indication that you can use a **class** for this.

To start adjusting the layout of our experience section:

- [ ] Add class to each `div` that contains the **date** and **job title**
  - **Tip**: Try to choose something descriptive. Avoid class names like 'element', 'container-1', etc.
- [ ] Style your new class to have a display property of flex

- [ ] Add a class name to the `div` that contains the **company name** and **job description**
- [ ] Style your new class to have a display property of flex (Is there anywhere in your CSS code you can prevent writing a whole other CSS block for this?)


After adding those CSS styles, your **Experience** section should look something like this:

![](https://cl.ly/1h1i140L343N/Image%202017-09-26%20at%209.17.19%20PM.png)

It looks, well, a littlebitsquished.

So far, we've mostly talked about properties we apply to the **parent** element when we're using flex box.
There are also several that we can apply to the **children**.

Let's start by focusing on the **flex-grow** property.

## flex-grow

Flex grow is used to define how much space inside a flex container (or parent) and element should take up.

If we have this HTML:

```html
<div class="container">
  <h1 class="one"></h1>
  <h1 class="two"></h1>
</div>
```

And this CSS

```css
  .container {
    display: flex;
  }

  .one {
    flex-grow: 3;
    background-color: #B6D6CC;
  }

  .two {
    flex-grow: 1;
    background-color: #FF3A20;
  }
```

The `.one` element will take up **threee** times as much space as the `.two` element.

Our two `h1` elements would end up looking something like this:

![](https://cl.ly/2v3k3U2s0B3O/Image%202017-09-28%20at%207.35.39%20PM.png)


What CSS styles can we add to fix that?

- [ ] Use flex-grow, margin, and padding to adjust the layout of your experience section


Once you have finished adding these styles your **Experience** Section should look something like this:

![](https://cl.ly/0a3q2C42041y/Image%202017-09-28%20at%207.19.28%20PM.png)
