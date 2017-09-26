---
uuid: cf0433a2-ebe2-478d-8199-d9c50ea6954a
---

Changing the font on your website is a great way to give it some personality. Google Fonts has a bunch
of wonderful fonts that you can add to your site easily, and for free.

In our mockup, we're going to be using [open sans](https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans), but I encourage you to shop around for a font you like.

When you've found a font you like, click the **plus** button on the top right corner of the card.

![](https://cl.ly/00090t2O2Y15/Screen%20Recording%202017-09-25%20at%2009.54%20PM.gif)

Then, at the bottom right hand corner of the page, you'll notice a window:

![](https://cl.ly/3K300H2F2z21/Screen%20Recording%202017-09-25%20at%2009.55%20PM.gif)

First, hit the **customize** tab, and select italic and bold versions of the font, if you'd like to use them on your page.
Then, you'll notice a `<link>` tag already created for you. Copy that, and paste it **above** the link to your stylesheet in the `head` of your HTML document.

The last step is to copy the `font-family` CSS rule, and apply it to your document.

One way to do this is to style the body tag:

```css
  body {
    font-family: 'Lato', sans-serif;
  }
```

When you refresh your page, or open the preview your page should have a beautiful new font.
