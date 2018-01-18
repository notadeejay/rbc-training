---
uuid: 1f621206-76cf-11e7-b5a5-be2e44b06b34
---

<!-- Good candidate for a stretch goal -->

We just learned about some cool things we can do with anchor tags. We can link an email address or a phone number. Or choose whether or not a link will open in a new tab. We can also link to `id`s that are on our page.

We can add an anchor tag with an `href` to an `id` like this:

```html
<a href="#about">About</a>
```

And add an `id` to a `<section>` of our page:

```html
<section id="about">
</section>
```

Then, when we click our anchor tag, the page will automatically scroll to find an HTML element with the `id` specified in the section tag's `href`. For example, when you have added in the appropriate `id`s and `href`s, this is how your page should behave:

![](https://cl.ly/020F2V3c0U1W/Screen%20Recording%202017-12-19%20at%2001.39%20PM.gif)

## Tasks

- Add `id`s to the **About**, **Skills**, **Experience** and **Footer** sections
- In the **Header**, update the `href` attributes of the **About**, **Skills**, **Experience** and **Footer** anchor tags to match the `id` of their respective sections

When you have added these IDs and updated the `href` values, make sure you test out the links in your header, and ensure they're working just as you would expect them to.


Once you're done, pair up with a class mate and review each other's code. Make sure you check for proper indentation and properly closed tags :)
