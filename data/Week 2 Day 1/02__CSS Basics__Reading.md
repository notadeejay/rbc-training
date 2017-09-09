---
uuid: 8a4f881e-c4cf-4c1c-83a8-2f764aecf73b
---
As we style our page today, keep in mind that next class we are going to focus on the layout.
Today, we're going to alter the fonts and colors to get them as close to our mockup as we can.

Anatomy of a CSS block:

![css block anatomy](https://d3vv6lp55qjaqc.cloudfront.net/items/28042d213b0v1A0h1H3P/Image%202017-09-06%20at%206.27.00%20PM.png?X-CloudApp-Visitor-Id=2818368&v=8bda0b15)

The **selector** is what element(s) you're going to style.

The **property** is what you are going to change about it and the **value** is what you're going to change it to.

In this example, we are changing ALL of the paragraph tags on our page to have a purple background.

We can get as specific as we want with **selectors**.


## Select HTML Tags

When we select by HTML tags, we select **all** of those tags on the page.

For example:

```css
  div {
    background-color: orange;
  }
```

This would make **all** of the divs on the page have an orange background.

We can also **nest** CSS selectors

```css
  section div p {
    font-size: 30px;
  }
```

This would select only paragraph tags, inside of divs, that are inside of sections.


## Select By Classes

If we want to get more specific with our styling, we can use **classes**. To use a class to
style an HTML element, we need to do two things.
1. Add a class to our HTML element
2. Style that class in CSS


```html
  <p class="highlight">
    I'm a paragraph tag with a class attribute
  </p>
```

Note: Classes are always added to the *opening* tag of an HTML element

Then, we style that class in css

```css
  .highlight {
    color: yellow;
  }
```

We use the `.` before the class name.

You can re-use this class on several different HTML elements on the page, and each HTML element
can have as many classes as it needs.

When you add more than one class to your HTML element, it looks like this:


```html
  <p class="highlight important">
    This paragraph tag has two classes
  </p>
```


## Select by IDs

If we know we're only going to want to style **one** element in a specific way, we can use an ID.

Like all attributes, ID's are added to the *opening* HTML tags, like so:

```html
  <div id="alert">
    Warning! I'm a div with an id!
  </div>
```

Each ID on your page, must be **unique**, and each HTML element can only have **one** ID.

To use an ID as a selector in CSS, we use the `#` symbol.

```css
  #alert {
    border-color: red;
    border-width: 1px;
    border-style: solid;
  }
```

This code would give our div with the id 'alert' a red border.


## Fonts

| Property      | What it changes   |
|---------------|-----------------  |
| color    | Color of the text, takes hexidecimal colors, built in CSS  |
| font-size| Size of the text  |
| font-family| The font in that element. [Google fonts](https://fonts.google.com/) is a great place to find fonts for your project|
| font-weight | Change the boldness of the text |
| text-align | Pulls text to the right, center or left of the element |
| text-transform | Changes text to upper or lowercase |
| letter-spacing | Sets the space between letters. Can be set to negative numbers |


## Box Model

| Property | Explanation | Example |
| -------- | ------------| ------- |
| border | Adds a border to the selected HTML element | border: 1px solid black; |
| margin | adds space between elements | margin: 10px; |
| padding | Adds space between the content of the element, and the border | padding: 30px; |
| height | The height of an element | height: 20px; |  
| width | The width of an element | width: 100px; |

Note: All of these properties can be set to only apply to the top, bottom, right or left of our
element.

For example, we could add padding to just the **top** like so:

```css
  section .important {
    padding-top: 10px;
  }
```

## Colors
