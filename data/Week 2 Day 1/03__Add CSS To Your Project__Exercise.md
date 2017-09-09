---
uuid: 3d2f23d0-494a-4115-b3bb-69fb8ee2d3df
---

In order to add CSS to your project, you need to follow a few steps. The first,
is to create a CSS file in your project folder. To do this, right click on your `index.html` file within Brackets,
then click **create new file**. Then, name your new file `style.css`.


- [ ] Create a new CSS file in your project

![create css file gif](https://d3vv6lp55qjaqc.cloudfront.net/items/0x1C1Q300m2v2T2d3k3s/Screen%20Recording%202017-08-26%20at%2003.34%20PM.gif?X-CloudApp-Visitor-Id=2818368&v=c45297f3)


Next, you need to **link your HTML and CSS together**.

Remember that the `<head>` of your HTML document is where we put information that the browser
needs in order to render the page properly. So, it's a great place for us to add a link to our CSS file.

We add stylesheets to our HTML file using `<link>` tags. Add a line of code that looks like this:

```HTML
  <link rel="stylesheet" href="./style.css">
```

Remember that code is very specific, for example if you call your CSS file `style.css`, but try to link
`styles.css` it won't work.

- [ ] Add a `<link>` tag to the `<head>` of your HTML document

Next, let's confirm that your CSS and HTML file are successfully linked together.

Let's add some code that will change the background color of your header to blue.

```css
  header {
    background-color: blue;
  }
```

In your preview, you should see the background color change to blue. If it doesn't, double check that
you have correctly linked your HTML to your CSS file.

Once you have done this, your page should look something like:

![](https://d3vv6lp55qjaqc.cloudfront.net/items/1w3z0d08083h1V0I240u/Image%202017-08-26%20at%203.50.46%20PM.png)

Beautiful, right?
