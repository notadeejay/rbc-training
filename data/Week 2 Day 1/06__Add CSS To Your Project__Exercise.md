---
uuid: 3d2f23d0-494a-4115-b3bb-69fb8ee2d3df
---

On the first day we learned HTML, we learned that every HTML page has a few key tags in common. One of these is the `<head>` tag. The `<head>` is where we put any information the browser needs to know in order to render our page properly.

In order to add CSS to our HTML page, we need to add it to the `<head>` tag of our document. In other words, we need to
tell the browser "Hey, use this CSS file to style this HTML page".

The main way we do that is to use a `<link>` tag.

```HTML
<link rel="stylesheet" href="./style.css">
```

A link is a **self closing** tag that takes two attributes:

- `rel`: Stands for **relationship** and declares what the relationship between this file and your HTML is. In this case, we're loading a **stylesheet**.
- `href`: We've seen this attribute before on our anchor tags. It tells the browser where to find the stylesheet we want to load.

Remember that code is very specific. For example, if you call your CSS file `style.css` but try to link `styles.css` instead (the difference being the extra "s" in "styles"), your browser will not be able to find the correct CSS file to load.

## Tasks

- Create a new CSS file in your project (see the **Tips & Tricks** section below if you're not sure how to do this)
- Add a `<link>` tag to the `<head>` of your HTML document
- Add CSS rule(s) to turn the **Header** section of your HTML document blue
- Save your CSS file, and click the preview button within Brackets
- Confirm your CSS and HTML are successfully linked together

Once you have done this, your page should look something like:

![](https://d3vv6lp55qjaqc.cloudfront.net/items/1w3z0d08083h1V0I240u/Image%202017-08-26%20at%203.50.46%20PM.png)

Congrats! You're on your way to a beautifully styled web page!

## Tips & Tricks

#### Creating a new CSS file

Right-click on your `index.html` file within Brackets,
then select **New File**. Then, name your new file `style.css`.

![create css file gif](https://d3vv6lp55qjaqc.cloudfront.net/items/0x1C1Q300m2v2T2d3k3s/Screen%20Recording%202017-08-26%20at%2003.34%20PM.gif)

#### background-color

Changes the background colour of the selected HTML element:

```css
header {
  background-color: blue;
}
```
