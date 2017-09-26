---
uuid: 589d4260-64b4-4e1b-ae7b-0bb08fea6a0e
---

Let's repeat the same exercise for our final section, the footer.

![footer](https://d3vv6lp55qjaqc.cloudfront.net/items/0e0t2Z2E1t0z1b09200x/%5B6840019aa5f6af6cb8b9423a6e797711%5D_Image+2017-08-26+at+3.22.58+PM.png)


<!-- Add instructions for how to add a link tag to the page -->

Links are how we navigate from page to page on the internet. To create a link, we use the anchor tag (`<a>`).

Anchor tags rely on the `href` attribute to work.

```html
<a href="https://www.lighthouselabs.ca/">Go to Lighthouse</a>
```

Anchor tags can be linked to other websites, email addresses and even phone numbers. In addition to an `href` attribute
they also take a **target** attribute.

If you would like an anchor tag to open in a different window:

```html
  <a href="https://www.lighthouselabs.ca/" target="_blank">Go to Lighthouse</a>
```

To have a link open an email client, you can add **mailto** to the `href`

```html
  <a href="mailto: info@lighthouselabs.ca">Email me!</a>
```

To have a phone number be dialed when you click a link, add **tel:** to the href:

```html
  <a href="tel:1231231234">Call me! </a>
```

### Tasks

- [ ] Add a `<footer>` tag to your HTML page inside add:
  - [ ] A `div` tag that contains:
    - [ ] An `h2` element that contains your name
    - [ ] A `p` tag that contains your occupation
  - [ ] Add a `ul`
    - Add a `li`, with an anchor tag linked to your:
      - email
      - telephone
      - twitter
      - linkedin
      - instagram

When you have added this content to your webpage, your footer should look something like:

![](https://cl.ly/2n072t0s3X0N/Image%202017-09-25%20at%208.34.05%20PM.png)
