---
uuid: cf0433a2-ebe2-478d-8199-d9c50ea6954a
---

One of the quickest ways to overhaul the look and feel of your website is to add a custom font. A great way to do this is to use a Google Font.

Visit https://fonts.google.com/ and search through their collection for a font you think would look great on your resume page.

In our design, we used **Open Sans** (https://fonts.google.com/specimen/Open+Sans?selection.family=Open+Sans), but don't be afraid to use a different font, if you find one that you like better.

## Tasks

- Select a Google Font
- Select the italic and bold version of your font
- Copy the generated `<link>` tag and paste it into the `<head>` of your HTML page
- Add a CSS rule so all the text on your page uses your new font

## How to add a Google font to your page

When you've selected a font, click the **plus** button on the top right corner of the card.

![](https://cl.ly/00090t2O2Y15/Screen%20Recording%202017-09-25%20at%2009.54%20PM.gif)

Then, at the bottom right hand corner of the page, you'll notice a minimized tab. Click to expand it:

![](https://cl.ly/3K300H2F2z21/Screen%20Recording%202017-09-25%20at%2009.55%20PM.gif)

First, go to the **Customize** tab and select italic and bold versions of the font, if you'd like to use them on your page.
Then, you'll notice a `<link>` tag already created for you. Copy that and paste it **above** the link to your stylesheet in the `<head>` of your HTML document.

The last step is to copy the `font-family` CSS rule and apply it to your document.

One way to do this is to style the body tag:

```css
body {
  font-family: 'Open Sans', sans-serif;
}
```

