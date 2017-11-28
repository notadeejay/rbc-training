---
uuid: 65e8b521-7517-4f87-8e17-5c92c7dad684
---

Before we start writing JavaScript in our new jQuery project, we need to discuss how to add JavaScript to your HTML.

## Adding jQuery to your project

In the case of adding the jQuery library, there are two common options.

### 1. Download jQuery

The entire jQuery library can be downloaded as a single JavaScript file. To include jQuery in your project this way, you first download jQuery, add the file to your project folder, and reference it in a script tag in your HTML document.

```html
<script type="text/javascript" src="./jquery.js"></script>
```

We're going to add jQuery to the bottom of the body. In other, words, the `<script>` tag in the previous example should go just **above** the `</body>` tag.


### 2. Use a <abbr title="Content Delivery Network">CDN</abbr>

Alternatively, you can you a CDN (Content Delivery Network). This means that when a user visits your website, the browser will load jQuery from a source other than your computer or the server hosting your website.

```html
<script src="https://ajax.googleapis.com/ajax/libs/jQuery/3.2.1/jQuery.min.js"></script>
```

We're going to add jQuery to the bottom of the body. In other, words, the `<script>` tag in the previous example should go just **above** the `</body>` tag.

## Adding your own JavaScript code to your project

Once you have jQuery loading, you will then need to add a link to your JavaScript file in your HTML document:

```html
<script type="text/javascript" src="./app.js"></script>
```

We're going to add our JavaScript to the bottom of the body, but after jQuery. In other, the `<script>` tag in the previous example should go just **below** the `<script>` that loads jQuery, and **above** the `</body>` tag.

## Tasks

- Add a `<script>` tag to your `index.html` file to include jQuery in your project
- Add a `<script>` tag to your `index.html` file to include your `index.js` file
- Add code that `console.log`s a string (like "Hello, world!") in your `index.js` file
- Open up your `index.html` page in the browser
- Open up your Dev Tools console
- Confirm the string you passed to the `console.log` is visible in your console – this means your JavaScript file is loading properly

## Tips & Tricks

#### Dev Tools

You can open up Dev Tools by right-clicking anywhere on the page and selecting **Inspect**, or by clicking **More Tools**, and then **Developer Tools**.

![](https://cl.ly/2C3w1B2s2Y0D/Screen%20Recording%202017-10-03%20at%2007.09%20PM.gif)

#### script

The `<script>` tag can be used to include a JavaScript file in your HTML. It requires two important attributes.

```html
<script src="path/to/javascript/file.js" type="text/javascript"></script>
```

- `src`: Where the browser can find the file to be included
- `type`: The type of script you are loading, which for the most part will be `text/javascript`
