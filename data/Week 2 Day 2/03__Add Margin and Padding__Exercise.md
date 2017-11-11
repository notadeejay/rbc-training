---
uuid: 6ce9139f-ac11-465a-b70e-6fbda046d607
---

Let's add some **margin** and **padding** to our sections. If we look at the mockup,
we see that out **header**, **about**, **skills**, **experience** and **footer** all have
the same amount of padding on them.


![](https://cl.ly/202p1r0p283y/[b09fa9030c63b4131456162e9d585711]_Image%202017-09-26%20at%208.11.42%20PM.png)


Remember that we can add the same styles to multiple elements, by separating our selectors
with commas. For example:

```css
  header, .highlight, p strong, h1 {
    color: blue;
  }
```

This CSS would style all `header` elements, all elements with the class `.highlight`,
all `strong` tags nested in `p` tags and all `h1` elements on the page.

Using this same technique:
- [ ] Add padding to the `header`, `about`, `skills`, `experience` and `footer` elements

After you've added padding to the sections, you might notice some space between your
sections, and the edge of the web page. The browser automatically adds some padding to your
`body` element.

- [ ] Adjust the padding on the `body` element to eliminate any gaps on the page.
