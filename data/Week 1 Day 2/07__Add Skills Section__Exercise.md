---
uuid: ad778b5d-4dc0-47f4-b304-6e0b8055def8
---

Let's break down our **Skills** section next. Remember that we will be changing
the styles of our HTML code with CSS next week. So if it isn't looking *quite* like you
pictured, that's okay.

![skills breakdown](https://d3vv6lp55qjaqc.cloudfront.net/items/442y1Q1L001Y2m0m3V1M/%5Ba08ec25c1321d4ff1f6c8988fae2e1ce%5D_Image+2017-09-09+at+10.55.59+AM.png)


Just like in our **About** section, we'll need an element to contain all of the information about our skills.

We'll also need an element for the title, 'Skills'. We'll also add a list element to contain all of our individual skills.

We can break down each skill item a little bit further. Each contain some text, with the name of the skill, a progress bar, and some text with a percentage.

![skill breakdown](https://d3vv6lp55qjaqc.cloudfront.net/items/3C3S3h0b103W0X3G0y3b/%5Bcda170b06dbd0cdb52750f04438b0f28%5D_Image+2017-09-09+at+11.01.45+AM.png)

There are two main types of lists, **ordered lists** and **unordered lists**. They have different
default styles. An ordered list will add numbers to the list items, while an unordered list will add bullet points.

An **unordered list tag** looks like this:

```html
<ul></ul>
```

If you were to make a list of things you'd find around Lighthouse, it might look like:

```html
<ul>
  <li>Sherman</li>
  <li>Rubber Ducks</li>
  <li>Pizza</li>
</ul>
```

I could also nest elements *within* the `<li>` tags. For example:

```html
  <ul>
    <li>
      <h5> Sherman </h5>
      <p>Office Dog</p>
    </li>
    <li>
      <h5>Rubber Ducks</h5>
      <p>For help debugging</p>
    </li>
  </ul>
```

As well, the skill section includes a **progress** bar, that indicates how good you are at that specific skill.
HTML has a built in `<progress>` element.

![progress](https://d3vv6lp55qjaqc.cloudfront.net/items/3U0d0a0b3I0w051a0628/Image%202017-09-09%20at%2011.21.01%20AM.png)

The progress element takes two **attributes**
1. **max**: the maximum amount for this progress bar
2. **value**: the value to be displayed

For example, if you wanted 60% of the bar to be filled - you would set **max** to be `10` and the **value** to be `6`.


### Tasks
Add a new `<section>` tag for your skills section, then:
- [ ] Add an `<h2>` element with the text **Skills**
- [ ] Add an `<ul>` tag, and list some of your skills in list item (`<li>`) tags
- [ ] For each `<li>` element
  - [ ] Add an `<h5>` with the name of your skill
  - [ ] Add a `<progress>` bar
  - [ ] Add a `<span>` with a percentage


Once you have completed that, the preview of your skills section should look something like:

![skills preview](https://d3vv6lp55qjaqc.cloudfront.net/items/1f1D440W3n1R0u1J1B1C/Image%202017-09-09%20at%2011.24.57%20AM.png)
