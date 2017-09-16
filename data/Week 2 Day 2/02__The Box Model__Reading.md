---
uuid: 5e7ad983-e07d-4741-a4bd-794f7d4d6487
---

Every HTML element on your page is a rectangle.

Every element has four properties that define it:

- margin: space between the border and the other elements
- padding: space between the content and the border
- border: Marks the outer edge of the visible box
- content: the content of the element


<!-- Add Diagram -->


We can alter all of these properties with CSS.


Standard Box Model:

 The size you specify in your CSS for an element is the size of the content box.
 Then the padding, border and margin are added onto that width. This can often be confusing.

 <!-- Add examples -->


Alternate Box Model:

```css
.example {
  box-sizing: border-box;
}
```

### Margin

Sets the space _between_ different an element and those that surround it.

```css
  .example {
    margin: 10px;
  }
```

Can be set on the top, bottom, left, and right of an element.

```css
  .example {
    margin-top: 5px;
    margin-bottom: 10px;
    margin-right: 30px;
    margin-bottom: 2px;
  }
```

order is: top, right, bottom, left.


### Padding

You can set the padding for the top, left, right, and bottom of a CSS element.
You can do this with an individual property for each:

```css
.sidebar {
  padding-top: 10px;
  padding-left: 20px;
  padding-bottom: 10px;
  padding-right: 10px;
}
```

Or you can declare them all on one line:

```css
.sidebar {
  padding-top: 10px 20px 10px 20px;
}
```

order is: top, right, bottom, left.

Both of these options will have the same output, so which one you choose is completely up to you.


### Borders

There are many properties that we can change for borders.

**Border Style**
- none
- dotted
- dashed
- solid
- double

```css
  .example {
    border-style: dotted;
  }
```

**Border Color**
Can be set to a hexidecimal color or any CSS color.

```css
  .example {
    border-color: blue;
  }
```

**Border Width**
How wide the border will appear.

```css
.example {

}
```

Play around with adding **margin**, **padding** and **borders** to elements on your HTML page.

[Play around with these properties here](learn-box-model.surge.sh)
