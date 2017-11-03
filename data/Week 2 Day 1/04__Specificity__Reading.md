---
uuid: 9d1bab17-fa85-4136-baf4-4a44258188d3
---

When we have conflicting styles, CSS needs a way to determine which style will actually be applied.
We learned earlier that the general rule is:

**If there are two equal CSS rules, the browser will apply the one it reads last.**

But, what determines if two CSS rules are equal? The answer is **specificity**.

There are four main ways to select an element in CSS.

#### Tag Names

```css
  p {
    color: blue;
  }
```

#### Classes

```css
  .highlight {
    color: yellow;
  }
```

#### IDs:

```css
  #alert {
    background-color: red;
  }
```


#### Inline Styles

```html
  <p style="color: orange;">I'm a paragraph with inline styles</p>
```

Each of these methods of selecting an element has a different **specificity**. Selecting by an ID is more specific than selecting by a class name, and selecting by a class name is more specific than selecting my an element name.

When there are conflicting styles, CSS uses specificity to figure out which style should be applied to the page.

### Calculating CSS Specificity

To calculate the specificity of a CSS rule we can essentially count the different types of selectors that are used.

![](https://cl.ly/0T3I3L2O0y2t/Image%202017-10-11%20at%206.27.14%20PM.png)

We can write the specificity of a CSS block as `0, 0, 0, 0`. The first space is for inline styles, the second is for IDs, the third is for classes, and the last is for tag names.

### Example

```html
<article class="blog-post">
  <p id="highlight"> We're learning about specificity </p>
</article>
```

If we want to change the font colour of the paragraph tag, we could add some CSS that looks like this:

```css
  p {
    color: blue;
  }
```

When we're calculating specificity we could say that this selector has a specificity score of `0, 0, 0, 1`, since it uses 1 tag.

If we edit our CSS to look like this:

```css
article p {
  color: red;
}

p {
  color: blue;
}
```

We might at first expect the paragraph to have a blue font colour, since the second rule is applied later, right? Not in this case, because the first selector (`article p`) is more specific, since its specificity is `0, 0, 0, 2` and `0, 0, 0, 2` is more specific than `0, 0, 0, 1`.

Let's bring classes into the mix. We'll edit our CSS to look like this:

```css
/*
  0, 0, 1, 0
*/
.blog-post {
  color: orange;
}

/*
  0, 0, 0, 2
*/
article p {
  color: red;
}

/*
  0, 0, 0, 1
*/
p {
  color: blue;
}
```

You might be tempted to think that the `article p` selector is more specific than `.blog-post` because it uses 2 tags compared to 1 class. Instead, class names are **always** more specific than element names, which means `.blog-post` (`0, 0, 1, 0`) is more specific than `article p` (`0, 0, 0, 2`).

A selector using one class will always be more specific than a selector using only tag names.

Let's bring in **IDs**. They are more specific than classes or tag names. Let's update our CSS to include a rule for an ID:

```css
/*
  0, 1, 0, 0
*/
  #highlight {
    color: yellow;
  }

  /*
    0, 0, 1, 0
  */
  .blog-post p {
    color: orange;
  }

  /*
    0, 0, 0, 2
  */
  article p {
    color: red;
  }

  /*
    0, 0, 0, 1
  */  p {
    color: blue;
  }
```

The text in our paragraph element will appear yellow because the `#highlight` selector is the most specific.

### Specificity Rule Recap

Let's go back to the rule we declared earlier:

**If there are two equal CSS rules, the browser will apply the one it reads last.**

Specificity helps determine which styles should be applied to particular elements. If you find yourself adding CSS styles that don't seem to be having any affect on your HTML, double check there is not a more specific style somewhere else in your code.

### Extra Resources

- Video Explanation of Specificity: https://www.youtube.com/watch?v=fy07HYm-geM
- Specificity Calculator: https://specificity.keegan.st/
- Article on Specificity: https://css-tricks.com/specifics-on-css-specificity/
