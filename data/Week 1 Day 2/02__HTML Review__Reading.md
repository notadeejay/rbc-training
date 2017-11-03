---
uuid: a28d802c-0ebb-4066-87a7-74caf2da399b
---

<!--  TODO:
  - Add basic HTML skeleton code and example

-->

### <abbr title="Hyper Text Markup Language"> HTML</abbr> Basics

Before we jump into our HTML project, let's do a quick re-cap of what we've learned today.

HTML stands for Hyper Text Markup Language. Every website you've ever visited has been built with HTML. The main
function of HTML is to give structure to your webpage. If we pretend we're building a house, HTML is the skeleton and the framework. We organize HTML elements together in order to create a whole webpage.

When we write HTML, we're wrapping text or content we want to appear on our page in **tags**. In essence, we're writing instructions that our browser will read to display our content.

#### Tags
HTML elements are composed of three main components:
1. An opening tag
2. Some content
3. A closing tag

![html example](https://d3vv6lp55qjaqc.cloudfront.net/items/0m3z3e1m0R3I3K0l3m3H/Image%202017-08-27%20at%202.33.57%20PM.png?X-CloudApp-Visitor-Id=2818368&v=8fa49697)


#### Tags for Text
When you think of your favourite websites, chances are they contain a lot of text. Styling the text on your page gives it context, and makes it easier for your users to find what they're looking for. For example, if you're building a news site, and all the titles on your page are in a larger and bolder text, your users can easily scan the page for a headline they're interested in.

Luckily, HTML has tags specifically for styling the text on our page.

If we want to add a title to our page, we could use an `h1` tag.

```html
  <h1>I'm an h1</h1>
```

When this tag is rendered in the browser, its content would appear as large and bold text.

```html
  <h1>I'm an h1</h1>
  <h2>I'm an h2</h2>
  <h3>I'm an h3</h3>
  <h4>I'm an h4</h4>
  <h5>I'm an h5</h5>
  <h6>I'm an h6</h6>
```

The above would be rendered in the browser like:

![](https://cl.ly/2F3A3X302D3L/Image%202017-09-25%20at%206.48.54%20PM.png)


The **paragraph** tag is a very common tag used to wrap paragraphs of text.

If we have these two paragraphs:

```html
I'm the first paragraph on the page.

I'm another paragraph.
```

Even though we've added the space in our editor, our browser will interpret it like this:

![](https://cl.ly/2O461j1v2E3B/Image%202017-10-01%20at%209.11.53%20AM.png)

Even though we've left space, when the browser renders the page, our two paragraphs are squished next to each other.

If we wrap the same paragraphs in `<p>` tags:

```html
<p>
  I'm the first paragraph on the page.
</p>

<p>
 I'm another paragraph.
</p>
```

Now that we've added the `<p>` tags, the browser identifies the content as separate paragraphs.

![](https://cl.ly/0I0E1w2v3P1X/Image%202017-10-01%20at%209.11.09%20AM.png)

Much better.

HTML also has a `<strong>` tag which is used to wrap important text on your page. Text wrapped in a strong tag will appear bold by default.

The emphasis tag (`<em>`) is used for emphasizing text on the page, and is italic by default.

```html
<p>I'm <strong>the first paragraph</strong> on the page.</p>

<p>I'm <em>another</em> paragraph.</p>
```

![](https://cl.ly/352y1R321j3T/Image%202017-10-01%20at%209.14.38%20AM.png)


#### Structural Tags
We said earlier that HTML gives **structure** to your page. There are several HTML tags designed specifically for this. These tags are great for using as containers to organize our webpage into sections, like the navigation bar or a footer.

These tags are great for providing structure to your webpage:
- `div`: A general content container when no other tag is a better semantic fit
- `nav`: A page's navigation container
- `header`: A page's header container, often containing the title of the page
- `main`: The section that contains the main content of the page
- `section`: A more general container element, used when no other is a better semantic fit, but generally when the content it is wrapping has a heading
- `aside`: A sidebar or section on the side of the webpage
- `footer`: A page's footer element, usually placed at the bottom of a web page
- `article`: Usually contains a blog post or magazine or newspaper article

#### Attributes

In some cases, we need to give the browser a bit more information about an HTML tag in order for it to be displayed or to work properly. We can do this using **attributes**. Attributes are always added to the **opening** HTML tag. On most tags, attributes are optional, but there are a few that need attributes to work properly, like anchor and image tags.

Let's use an anchor (`<a>`) tag to create a link that directs users to the Lighthouse Labs website.

```html
  <a href="https://www.lighthouselabs.ca/">Lighthouse Labs</a>
```

Here we've used the **href** attribute, which stands for hyperlink reference. Anchor tags are how you navigate around the internet. The value of the `href` (`https://www.lighthouselabs.ca/`) is where your browser will navigate to when the content inside the anchor tag is clicked.

By default, anchor tags are blue, and underlined.

#### Self-closing Tags

Some tags are self-closing, meaning they don't have a closing tag. Content for self-closing tags is added using **attributes**.

```html
<img src="http://www.fillmurray.com/300/200" alt="Bill Murray" />
```

For image tags, the `src` attribute tells the browser where the image it should display can be found. The `alt` attribute will be displayed if the image cannot be displayed. It is important to **always** include the alt attribute when adding an image to your page.

The **alt** attribute is important for accessibility. As you develop your website, keep in mind that you may have users who have impaired vision. Some users to your site might be using a screen reader. When a screen reader encounters an image tag, it reads the alt text out loud. If the alt text is missing, the screen reader will simply say "image" – not very informative to your users.

#### Nesting Elements

We can also nest HTML elements together. This allows us to build more complicated web pages. When we nest elements together, we refer to the outer elements as **parents**, and the inner element as **children**. It is important to close child elements *before* you close their respective parent elements.

![nested elements example](https://d3vv6lp55qjaqc.cloudfront.net/items/320k0U0v0Y0z203P3N2Q/Image%202017-08-27%20at%202.41.45%20PM.png?X-CloudApp-Visitor-Id=2818368&v=c8bfc426)

When we nest elements, **indentation** becomes very important. In the example above, you can see that the child element is tabbed in a few spaces. This lets us easily see that the paragraph tag is a child of the div tag. If your code isn't indented properly, it will still work. However, it will make it a lot harder to spot errors as you go along. Be nice to yourself (and other developers you're working with), and do your best to consistently indent your code.

#### Comments

Sometimes in your code, you might want to leave a note for yourself or other developers. You can do this using a **comment**.

Comments in HTML look like this:

```html
  <!-- I'm a comment -->
```

Your browser will ignore comments, which means they won't be displayed to the user.
