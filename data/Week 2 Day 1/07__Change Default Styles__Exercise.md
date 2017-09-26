---
uuid: 2e1f71cf-2f96-4d43-9e94-aa5ff0480ca7
---

### Lists

We have three **unordered lists** on our page. All of them have bullet points next to the
list items. We can change the default styles on lists using the `list-style-type` property

```
ul {
  list-style-type: none;
}
```


Alternatively, you could set `list-style-type` to display something *other* than a bullet point. See what happens when you set
`list-style-type` to
- disc
- circle
- square
- decimal
- georgian


### Anchor Tags

We saw earlier that the browser adds a default color to our anchor tags, and also adds an underline to them.
We can remove this underline with the `text-decoration` property.

Since we want to remove the underline from *all* anchor tags on our page, we can add:

```css
  a {
    text-decoration: none;
  }
```

Since we've already added a CSS block to style our anchor tags, let's add our text decoration there:

```css
  a {
    color: inherit;
    text-decoration: none;
  }
```

Once you've added these styles your `header` section should look something like this:

![](https://cl.ly/3W0G2q312L0i/Image%202017-09-25%20at%209.49.18%20PM.png)
