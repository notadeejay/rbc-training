---
uuid: a28d802c-0ebb-4066-87a7-74caf2da399b
---

<!--  TODO:
  - Add basic HTML skeleton code and example

-->

### HTML Basics

Before we jump into our HTML project, let's do a quick re-cap of what we've learned today.

HTML gives your webpage structure. If we use the analogy of building a house, HTML is the basic frame. It gives you a structure to work from. Every HTML tag has a default style.


HTML elements are composed of three main components:
1. The opening tag
2. Some content
3. A closing tag

![html example](https://d3vv6lp55qjaqc.cloudfront.net/items/0m3z3e1m0R3I3K0l3m3H/Image%202017-08-27%20at%202.33.57%20PM.png?X-CloudApp-Visitor-Id=2818368&v=8fa49697)


#### Structural Tags

These tags are great for providing structure to your webpage:
- `div`
- `nav`
- `header`
- `main`
- `section`
- `aside`
- `footer`
- `article`

#### Tags for Text

We can also use HTML to add **context** to our content. Our web browsers (Chrome, Safari, Firefox, etc.) will give default styles to our HTML elements. If we want to add a title to our page, we could use an `h1` tag.

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

Would be rendered in the browser like:

![](https://cl.ly/2F3A3X302D3L/Image%202017-09-25%20at%206.48.54%20PM.png)


The **paragraph** tag is a very common tag used to wrap paragraphs of text.

If we have these two paragraphs:

```html
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu justo ac ex consequat eleifend in quis risus. Maecenas imperdiet diam at tincidunt tincidunt. Maecenas odio quam, consequat consequat interdum in, gravida ut ex. Phasellus justo nulla, maximus sit amet accumsan vitae, blandit in tellus.

Quisque pellentesque arcu varius lacus tempor, eget semper turpis eleifend. Vivamus nisl ante, ultricies et maximus at, aliquet sit amet ante. Etiam a convallis sem. Nullam vel libero in mi tristique convallis et eget lorem. Nam eleifend at sapien sed luctus. Vivamus eget varius velit.
```

Even though we've added the space in our editor, our browser will intepret it like this:

![](https://cl.ly/2D3T173Y3r2V/Image%202017-09-25%20at%206.56.26%20PM.png)

If we wrap the same paragraphs in `<p>` tags:

```html
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu justo ac ex consequat eleifend in quis risus. Maecenas imperdiet diam at tincidunt tincidunt. Maecenas odio quam, consequat consequat interdum in, gravida ut ex. Phasellus justo nulla, maximus sit amet accumsan vitae, blandit in tellus.
</p>

<p>
  Quisque pellentesque arcu varius lacus tempor, eget semper turpis eleifend. Vivamus nisl ante, ultricies et maximus at, aliquet sit amet ante. Etiam a convallis sem. Nullam vel libero in mi tristique convallis et eget lorem. Nam eleifend at sapien sed luctus. Vivamus eget varius velit.
</p>
```

The browser will render it like this:

![](https://cl.ly/1b343S1m2N3D/Image%202017-09-25%20at%206.57.57%20PM.png)


We can also use the `<strong>` to make text bold, and the `<em>` to make text italic.

#### Attributes

In some cases, we need to give our HTML tags a little bit more information. We can do this using **attributes**. Attributes are always added to the opening HTML tag. On most tags, attributes are optional, but there are a few that need attributes to work properly, like anchor and image tags.

One type of attribute is a CSS class. It's often used for styling elements on your webpage.

Say we wanted this paragraph tag to have the class highlights:

![attribute example](https://d3vv6lp55qjaqc.cloudfront.net/items/2u1K232V3C1T1N300n2y/Image%202017-08-27%20at%202.36.57%20PM.png?X-CloudApp-Visitor-Id=2818368&v=47387a39)

### Nesting Elements

We can also nest HTML elements together. This allows us to build more complicated web pages. When we nest elements together, we refer to the outer elements as **parents**, and the inner element as **children**. It is important to close child elements *before* you close their respective parent elements.

When we nest elements, **indentation** becomes very important. Here you can see that the child element is tabbed in a few spaces. This lets us easily see that the paragraph tag is a child of the div tag. Properly indenting your code will help you build web pages faster, and make it easier to spot errors.

![nested elements example](https://d3vv6lp55qjaqc.cloudfront.net/items/320k0U0v0Y0z203P3N2Q/Image%202017-08-27%20at%202.41.45%20PM.png?X-CloudApp-Visitor-Id=2818368&v=c8bfc426)

### Self Closing Tags

Some tags are self-closing. Meaning they don't have a closing tag. Content for self-closing tags is added using **attributes**.
```html
  <img src="http://www.fillmurray.com/300/200" alt="picture of Bill Murray" />
```

For image tags, the **src** attribute tells the  `img` tag where to find the picture it should display. The **alt** attribute will be displayed if the image cannot be displayed. The **alt** tag is also what is read to screen readers. It is important to **always** include the alt attribute when adding an image to your page.
