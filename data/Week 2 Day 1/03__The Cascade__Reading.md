---
uuid: c7f71617-089b-4182-b2d2-5075bbd087d7
---

CSS stands for **Cascading Style Sheets**. So, where does the cascade come in?

Three main ways that a style sheet will cascade:

1. A CSS rule can affect multiple elements on the page
2. One HTML tag can be affected by many styles in different ways
3. One CSS style sheet can style multiple pages

We've seen how one CSS rule can affect multiple elements on the page, for example:

```css
  p {
    color: blue;
  }
```

This code will change the text colour to blue for **all** paragraph elements on our page.

We've also seen how one HTML tag can be affected by many styles.

If we then add another bit of CSS code to our stylesheet:

```css
  p.highlight {
    background-color: yellow;
  }
```

```html
  <p class="highlight"> I'm a highlighted paragraph </p>
```

Then our paragraph tags with the class `highlight` will have blue text *and* a yellow background.

The third rule means that if we choose to add another page to our website, we can simply link the same CSS file in the `<head>` of our new page, and have one CSS file style both pages.

Lastly, in order to understand the cascade, we need to know that our stylesheets are read from top to bottom. This means that styles at the top are applied first, and have the potential to be overwritten by styles that are applied later.

In general, this is the rule:

**If there are two equal CSS rules, the browser will apply the one it reads last.**

Take this CSS code as an example:

```css
p {
  font-size: 20px;
  color: blue;
}

#alert {
  padding: 10px;
  background-color: red;
}

p {
  color: green;
}
```

First, our CSS code will apply a colour of blue to all of the paragraph elements on the page. Then, later on, it will style all of them to be green.

If you're struggling to figure out why some styles aren't being applied to your elements, take a second and double-check you're not overriding them later in your CSS file.
