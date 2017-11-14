---
uuid: 6f92eca6-32c1-4023-9bf6-167da5aa1948
---

When we looked through our design for elements on our page that shared common styles, we noted that the **Header** section and our **Skills** section both had a blue background and white text. We can create a **class** to allow these two sections to share styles.

## Tasks

- Add a class to your `<header>` tag and the Skills `<section>` tag
- Style your class to have a blue background colour and white text
- Add CSS to style the anchor tags in your Nav bar to be white and **not** underlined.

After adding these styles, your Header should look something like this:

![](https://cl.ly/2P2l27213r1W/Image%202017-09-25%20at%209.33.42%20PM.png)

## Tips & Tricks

#### Using classes for styling

To add a class to an element, we want to add it to the opening tag of our element:

```html
<p class="highlight">
  I'm a paragraph tag with a class
</p>
```

To style a class in CSS, we use the `.` before the class name:

```css
.highlight {
  background-color: yellow;
}
```

#### text-decoration

By default, anchor tags have a `text-decoration` property applied to them. The `text-decoration` property can be set to several different values including:

- underline
- overline
- line-through
- initial
- none
