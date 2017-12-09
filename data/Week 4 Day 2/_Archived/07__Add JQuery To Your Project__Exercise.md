---
uuid: 65e8b521-7517-4f87-8e17-5c92c7dad684
archived: true
---

<!--
  Horatiu: Should we tell them to add script tags at the bottom of the body?
  - From my understanding script tags at the bottom of the page can help give the
  illusion of a faster page load, I'm not sure if it's a practice we want to enforce,
  or just explain it in a lecture so the students are aware of it.

  "If JavaScript just adds some not so important features to some content based page, then better load it at the end. Loading time will almost be the same, but the user will see the important parts earlier (before the page finished loading)."
 -->

Before we start writing JavaScript in our new JQuery project. We need to discuss
how to add JavaScript to your HTML.

Remember that the `<head>` of your HTML document is where we put any information
the browser needs to render properly. To add JavaScript to your project, we use a
`<script>` tag in the `<head>` of the document.


First, we'll need to include the JQuery library. There are a few ways to do this.
1. Download Jquery
- The entire JQuery library can fit in a single JavaScript file. To include jQuery in your project this way, you first download
jQuery, add the file to your project folder, and reference it in a script tag in your html document.
2. Use a <abbr title="Content Delivery Network">CDN</abbr>
- A CDN (Content Delivery Network) means that when a user visits your website, the browser will load jQuery from a source other than your computer.

<!-- Add server declaration, OR should we just include a copy of JQuery in the starter files? -->

```html
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
```

Once you have jQuery installed, you will then need to add a link to your JavaScript file in your HTML document:

```html
<script type="text/javascript" src="./index.js"></script>
```

### Tasks
- [ ] Add a `<script>` tag to the head of your document, to include jQuery in your project
- [ ] Add a `<script>` tag to the head of your documen to include your `index.js` file
- [ ] Add a `console.log` statement to your `index.js`
- [ ] Open up your `index.html` file in the browser
- [ ] Open up your dev tools console
- [ ] Confirm the string you passed to the `console.log` is visible in your console


## Tips and Tricks

#### Dev Tools

You can open up dev tools by **right clicking** anywhere on the page and selecting **inspect**, OR by clicking **more tools**, and then **developer tools**.

![](https://cl.ly/2C3w1B2s2Y0D/Screen%20Recording%202017-10-03%20at%2007.09%20PM.gif)

#### script

The `<script>` can be used to include a JavaScript file in your html. It takes a few key **attributes**

```html
  <script src="path/to/javascript/file.js" type="text/javascript"></script>
```

- **src**: Where the browser can find the file to be included
- **type**: The type of script you are loading, for the most part it will be `text/javascript`
