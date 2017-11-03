---
uuid: c8aa73e8-0135-4992-b388-4c65eadf4e20
---

<!-- Explain about the typographic scale, and style all h2 and h4 elements the same -->
<!-- Get Tsang to review this -- the design advice could be ALL wrong -->
<!-- https://designforhackers.com/blog/font-sizes/ -->

Most of the content on your resume page will be text. There are several CSS properties that help
you customize the look of the text on your page.

### Tasks
- [ ] Style all of the section titles on your page to be the same font size and font weight
- [ ] Style the subtitles on your page to be the same font size and font weight
- [ ] Style the anchor tags in your **Header** to be uppercase
- [ ] Style your name and occupation in the **Footer** to be the same font size and weight as in the **Header**
- [ ] Style the social media and contact links in the footer to be smaller and lighter than the title text


### CSS Properties Reference

The following CSS properties might come in handy as you style the text on your page.

#### font-size

Using the `font-size` property we can adjust how large our text is. A common unit for the `font-size` value is pixels (`px`).

```css
  p {
    font-size: 12px;
  }
```

**Tip:**
<!-- Get Tsang to review this -->
Just like when you're choosing colours for your webpage, you want the font-sizes on your page to look good together.
While this course doesn't focus too much on design principles, there's a quick rule that can make choosing font sizes a little bit simpler.

Use these pixel sizes for the text on your page:
`5, 7, 9, 12, 16, 21, 28, 37, 50, 67, 83`.

This is known as a typographic scale, and can help make the text on your page look a bit more harmonious.

#### color

Changes the colour of the text. Can be set to a variety of built in CSS colours, or a hexadecimal colour. Remember, the CSS property is spelled the American way, that is, "color".

```css
  h1 {
    color: green;
  }
```

```css
  p {
    color: #f42f2f;
  }
```

#### font-weight

Defines whether text will appear bold, light, or neither. It can be set to:

- bold
- normal (default)
- lighter

```css
h2 {
  font-weight: bold;
}
```

Alternatively  we can set it to a numerical value
- 100
- 200
- 300
- 400
- 500
- 600
- 700
- 800
- 900

```css
  p {
    font-weight: 200;
  }
```


#### letter-spacing

Increases or decreases the amount of space between letters in the text:

```css
  p {
    letter-spacing: 2px;
  }
```

To move letters closer together, you can set this property to a negative value.

```css
  article p {
    letter-spacing: -2px;
  }
```

#### text-transform

Can be set to `uppercase` or `lowercase`.

```css
  nav a {
    text-transform: uppercase;
  }
```

#### font-style
Specifies whether a font should be styled with the **normal**, **italic**, or **oblique** face from its font-family.

```css
  h1 {
    font-style: italic;
  }
```

#### font-family

The font for an element. When we set the `font-family` property we want to make sure we also set a fallback. A fallback is simply an alternative font to load if the first choice cannot be loaded for whatever reason.

```css
  p {
    font-family: 'Open Sans', sans-serif;
  }
```

### Tips & Tricks

Remember that you can select elements by classes, IDs and/or element names.
