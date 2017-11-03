---
uuid: 5e7ad983-e07d-4741-a4bd-794f7d4d6487
---

We can think of every HTML element on our page as a **box**. Each box is composed of four parts:

- **margin**: Space between the border and the other elements
- **padding**: Space between the content and the border
- **border**: Marks the outer edge of the visible box
- **content**: The content of the element

When we refer to the box model we're referring to how the content, padding, margin, and border relate to each other.

![](https://s3.amazonaws.com/thinkific/file_uploads/34662/images/cb9/428/134/box-model-diagram.png)

Before we jump into CSS Layouts, understanding the box model is essential. The **margin**, **padding**, **border** and **content** dictate how an element appears on the page, and how the boxes sit in relation to each other.

### Margin

Sets the space _between_ an element and those that surround it.

We can set equal margins on all sides of an element like so:

```css
  .example {
    margin: 10px;
  }
```

Or we can specifically set the margin on the top, right, bottom, and left of an element.

```css
  .example {
    margin-top: 5px;
    margin-right: 30px;
    margin-bottom: 10px;
    margin-left: 2px;
  }
```

Or we can use a shorthand to write the above all on one line:

```css
.example {
  margin: 5px 30px 10px 2px;
}
```

From our list of margin sizes, the first will be assigned to the top, the second to the right, the third to the bottom and the fourth to the left.

```css
  selector {
    margin: [top] [right] [bottom] [left];
  }
```

![](https://cl.ly/2h001R370a3o/Screen%20Recording%202017-10-01%20at%2012.03%20PM.gif)

### Padding

Padding is the space between the content and the border.

You can set the padding to be the same on all sides of the content:

```css
  .sidebar {
    padding: 10px;
  }
```

Or you can specify how much padding will be added on each side of the element:

```css
.sidebar {
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
}
```

Or you can declare them all on one line:

```css
selector {
  padding: [top], [right], [bottom], [left];
}
```

```css
.sidebar {
  padding-top: 10px 20px 10px 20px;
}
```

Both of these options will have the same result, so which one you choose is completely up to you.

As you can see in this example, when we add padding to an element, the content (in this case the letters "A", "B", and "C") moves away from the border:

![](https://cl.ly/1u2B310S1Q0h/Screen%20Recording%202017-10-01%20at%2012.00%20PM.gif)


### Borders

The border of an element wraps around the content and padding.

There are three main properties that we can style to create a border.

#### border-style

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

#### border-color

Can be set to a hexadecimal colour or any CSS colour.

```css
  .example {
    border-color: blue;
  }
```

```css
  .example {
    border-color: #fafafa;
  }
```

#### border-width

How wide the border will appear.

```css
.example {
  border-width: 1px;
}
```

We can also use a **shorthand** and declare all of the above properties on one line:

```css
.example {
  border: 1px dotted green;
}
```

Or, more generally:

```css
selector {
  border: [width] [style] [color];
}
```

It's completely up to you whether you want to add borders to your elements using the separate properties or the shorthand. Both approaches will have the exact same effect on your page.

![](https://cl.ly/350O323G071d/Screen%20Recording%202017-10-01%20at%2012.02%20PM.gif)

### Standard Box Model

The standard box model is the default for elements on your page. When you set the **margin**, **padding**, **border**, **height**, and **width** of an element, each property adds to how much space an element takes up on the page. This can sometimes get confusing when we explicitly set the height or width of our element.

Say, for example we set the width of an element to be `100px`. In the standard box model, the `width` property will be applied to the **content** of your HTML element.

```css
div {
  width: 100px;
  padding: 20px;
  border: 5px;
}
```

The element will take up **more** than 100px.

For example, if we have three divs on our page, and we've set the `width` on each of them to be `100px`, and we start to add
margin, padding, and border values to one of them, the size difference between the elements will become apparent:

![](https://cl.ly/2j453E2O3J1I/Screen%20Recording%202017-10-01%20at%2012.06%20PM.gif)


### Alternate Box Model

The alternate box model takes a different approach. Instead of applying the `width` property to just the **content** of the element, it applies it to the element as a whole.
To use the alternate box model, we set the  `box-sizing` property to `border-box`.

```css
.example {
  box-sizing: border-box;
}
```

If we take our example from before, and add `border-box`:

```css
div {
  width: 100px;
  padding: 20px;
  border: 5px;
  box-sizing: border-box;
}
```

This time, the browser will include the padding and border into the width calculation. So even though we've added padding and a border, the element will only take up 100 pixels.

![](https://cl.ly/08323r3q3B3Q/Screen%20Recording%202017-10-01%20at%2012.09%20PM.gif)
