---
uuid: 589d4260-64b4-4e1b-ae7b-0bb08fea6a0e
---

Let's repeat the same exercise for our final section, the **Footer**.

![footer](https://d3vv6lp55qjaqc.cloudfront.net/items/0e0t2Z2E1t0z1b09200x/%5B6840019aa5f6af6cb8b9423a6e797711%5D_Image+2017-08-26+at+3.22.58+PM.png)

When we break down the main components of our **Footer**, we find:

- A container element to hold all the content of the **Footer**
- Your name
- Your occupation
- Links to your email, telephone, LinkedIn, Twitter and Instagram


## Tasks

- Add a container element for all of the content in your **Footer**
- Add your name and occupation
- Add a link to your Instagram, that opens in a separate window
- Add a link to your Twitter, that opens in a separate window
- Add a link to your LinkedIn, that opens in a separate window
- Add a link to your email
- Add a link to your telephone number

**Note**: If you don't use any of these social media apps, feel free to add a link to your favourite website, or any other online profile you might have.

**Note**: We'll add the "Download CV" buttons to our project later.

## HTML tags reference

The following HTML tags might be helpful as you build out the **Footer** section of your website.

#### footer

The `<footer>` tag adds a footer for an HTML page. It commonly contains contact information, links, and information about who built the site.

```html
<footer>
  <!-- Content goes here -->
</footer>
```

#### a

Anchor tags are used to provide links to other sections, pages or outside webpages. They can also be used to link to an email or telephone.

```html
<a href="https://www.lighthouselabs.ca/">Go to Lighthouse Labs</a>
```

Other anchor attributes and tricks:

- `target`: Determines where the link should open
  - `self`: opens the link in the same frame as it was clicked (default)

  ```html
  <a href="https://www.lighthouselabs.ca" target="self">Go to Lighthouse Labs</a>
  ```

  - `_blank`: opens the link in a new browser tab
    
  ```html
  <a href="https://www.lighthouselabs.ca" target="_blank">Go to Lighthouse Labs</a>
  ```

- `mailto`: Directs the link to be opened in an email client

  ```html
  <a href="mailto:info@lighthouselabs.ca">Email Us</a>
  ```

- `tel`: A phone number is dialled when a link is clicked (on mobile)
  ```html
  <a href="tel:1231231234">Call me!</a>
  ```
