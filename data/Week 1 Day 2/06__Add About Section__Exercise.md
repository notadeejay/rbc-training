---
uuid: c93b98bd-9329-4574-bf91-0c75a6cdb9e8
---


#### Semantic Tags

Remember that HTML gives **structure** to your webpage. There are several HTML tags
that have the exact same default styles, but different names. You might be wondering
why HTML has so many tags that do the exact same thing. Well, these different tag names
are for YOU, the developer.

For example, a `<div>`, a `<section>` and a `<footer>` all share the same default styles. We *could*
use a div everywhere in our code, but if we use the semantic tags, it's much easier to scroll through an
HTML file and find the `<footer>` tag, than searching through a whole bunch of `<div>` tags.

Here are a few semantic tags you might find helpful going forward:

- `<article>`
- `<aside>`
- `<main>`
- `<nav>`
- `<section>`
- `<header>`
- `<footer>`

Next, let's break down our **About** section.

![about sections](https://d3vv6lp55qjaqc.cloudfront.net/items/3Q041Z0f0J1K3L2e1207/%5B11d28338047cc6565674104b4059d6f9%5D_Image+2017-08-26+at+2.02.24+PM.png?X-CloudApp-Visitor-Id=2818368)

When we look at the elements we have, it looks like we'll need one to contain the entire section. We'll also
need an element for the title 'About', an element for the subtitle, and some elements for the paragraphs.

To your `index.html`, **below your closing `header` tag**, add a `<section>` tag

Inside of your new section tag add:
- [ ] An `<h2>` That contains 'About'
- [ ] An `<h5>` With a subtitle
- [ ] Two `<p>` tags with some awesome information about **you**

If you've suddenly found yourself with a serious case of writers block, and are unsure of what to write about yourself,
a common technique is to use *Lorem Ipsum* text.

[Meet the Ipsums](http://meettheipsums.com/) is a great site to find filler text for your project.
