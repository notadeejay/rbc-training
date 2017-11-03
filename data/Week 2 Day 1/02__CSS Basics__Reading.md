---
uuid: 8a4f881e-c4cf-4c1c-83a8-2f764aecf73b
---
CSS stands for **Cascading Style Sheets**, and it's what lets us fully customize the look and feel of our webpage. Previously, we compared building a webpage to building a house.
We said that HTML is like the framework and general structure of our house. It gives our content some context, and provides a way to group related elements together.

You can think of CSS like the paint, furniture and decorations of your house. CSS allows you to completely customize the layout, the font, and the colours on your page.

When we're adding styles to our page, we often want to only style a few elements. A red background might look great on an alert, but we probably don't want to give absolutely every element on the page a bright red background. This is where CSS **selectors** come into play. They allow us to specify exactly which elements on the page we want to change.

When we write CSS we have to follow a few key steps:

1. Determine which element(s) we want to style (using a **selector**)
2. Determine which **property** we want to change (color, font-family)
3. Determine which **value** you want to set the **property** to (green, Open Sans)

Anatomy of a CSS block:

![css block anatomy](https://d3vv6lp55qjaqc.cloudfront.net/items/28042d213b0v1A0h1H3P/Image%202017-09-06%20at%206.27.00%20PM.png?X-CloudApp-Visitor-Id=2818368&v=8bda0b15)

**Tip**: They might seem like _very_ small details, but as you start to write your CSS code,
pay attention to make sure your semi-colons and colons are in the right spots.

Also note that we can have more than one property changed in each CSS block:

```css
p {
  background-color: purple;
  font-size: 20px;
}
```

## Select HTML tags

When we select by HTML tags, we select **all** of those tags on the page.

For example, consider this CSS:

```css
div {
  background-color: orange;
}
```

This would make **all** of the divs on the page have an orange background.

We can also **nest** CSS selectors:

```css
section div p {
  font-size: 30px;
}
```

This would select only paragraph tags, inside of divs, that are inside of sections.

When we separate selectors by commas, we can apply the same styles to more than one element.

```css
div, section {
  border-width: 1px;
}
```

This CSS block would apply a border to **both** all the divs and all the sections on the page.

## Select by class(es)

If you haven't heard before, web developers are **lazy**. We don't like to write more code than we absolutely have to.
If you notice a lot of the elements on your page share a common style, you can use a **class** to style all of them at once.


To start using classes, we would need to add a **class** attribute to our HTML elements. We add classes to our HTML just like we did all of the other attributes we've seen. Remember that attributes *always* go in the opening tag.

Let's say we have three paragraph tags on our page:

```html
<main>
  <p> I'm the first paragraph tag </p>

  <p> I'm the second paragraph tag </p>

  <p> I'm the third paragraph tag </p>
</main>
```
If we want to style two of them to have a blue font, we could add a **class** to those elements:

```html
<main>
  <p class="blue"> I'm the first paragraph tag </p>

  <p> I'm the second paragraph tag </p>

  <p class="blue"> I'm the third paragraph tag </p>
</main>
```

Then, we style that class in CSS:

```css
.blue {
  color: blue;
}
```

Note that we use a `.` immediately before the class name to select all elements with that given class name.

You can re-use a class on as many different HTML elements on the page as you need to, and each HTML element can have as many classes as it needs to as well.

## Select by IDs

If we know we're only going to want to style **one** element in a specific way, we can use an ID.

Like all attributes, ID's are added to the *opening* HTML tags, like so:

```html
<div id="alert">
  Warning! I'm a div with an id!
</div>
```

Each ID on your page must be **unique** and each HTML element can have **only one** ID.

To use an ID as a selector in CSS, we use the `#` symbol before the ID name:

```css
#alert {
  border-color: red;
  border-width: 1px;
  border-style: solid;
}
```

This code would give our div with the ID "alert" a solid, one pixel red border.


## Colours

CSS has a bunch of colours built in that we can assign by name, such as:

- red
- yellow
- blue
- green
- papayawhip
- indigo
- flame
- primrose

We can also get even more specific with **hexadecimal** (aka hex) colours.

If you remember back to your grade school days, you were probably taught that you can make any colour possible using red, yellow, and blue. It turns out you can also create almost any colour using red, *green*, and blue – which is exactly how hexadecimal colours work.

![](https://cl.ly/2A1X3W082H1P/Image%202017-09-25%20at%208.56.28%20PM.png)

The first two values represent the amount of red in the colour, the next two the amount of green, and finally the last two the amount of blue. If all of the values are equal, the colour will be white, black, or a shade of grey. Don't feel pressure to memorize the values for your favourite colours. There are plenty of colour picker tools out there, and a quick internet search should return you quite a few options.

Something to note though, is that hex colours use 0-9 and a-f as values. "0" is the lowest, while "f" is the highest. So, `#000000` is black, and `#ffffff` is white.

**Tip:** When assigning a colour to an HTML element, you have to spell *color* the American way, without a 'u'.


## Inline Styles

In this course, we will be writing all of our CSS in an external style sheet. That is, we'll have a `.css` file that we link to in our HTML. There is another way that you can add styles to the elements on your page:  inline styles.

```html
<p style="color: orange">I'm a paragraph with inline styles</p>
```

In general, you want to avoid using inline styles. Writing your CSS in a separate file makes it much easier to update the styles on your page, and often means you'll write less CSS overall. For example, if you wanted **all** paragraph text on your page to be orange, with inline styles you'd have to add the `style` attribute to every single paragraph tag on your page.


## Comments

In most coding languages, there is a way to add a **comment** to your code.
When the browser comes across a comment, it skips over it. They are just for you, the developer.

```css
/*
  I am a comment in CSS
*/
```
