---
uuid: 73ea30f7-9fb9-4b7f-ac23-4b26774a8068
archived: true
---


## Tasks

- Add code so that when a user focuses inside an input element, the border of this input element changes colour
- Use CSS to style your inputs and submit buttons

## jQuery reference

#### focus

The focus event is triggered when a user focuses on an element, for example an input element.

```javascript
$('form input').on('focus', function() {
  // add code here
})
```

#### blur

The blur event is triggered when a user is no longer focused on an element, or, in other words, when they "focus out" of an element. They can do this in several ways, for example by clicking elsewhere on the page, or by moving to the next input in the form using the <kbd>Tab</kbd> key on their keyboard.

```javascript
$('form input').on('blur', function() {
  // add code here
})
```

#### change

The change event is triggered when the user changes the value of the input element. In other words, when they start typing.

```javascript
$('form input').on('blur', function() {
  // add code here
})
```

## CSS reference

#### :focus (pseudo selector)

Will add styles to an HTML element when it's in a focus state.

```css
.example:focus {
  background-color: green;
}
```

#### border-radius

Used to add rounded corners to an element.

```css
div {
  border-radius: 4px;
}
```

#### padding

Adds space between the content and the border of an element.

```css
div {
  padding: 10px;
}
```

#### outline

The outline property is a line that is drawn **around** elements (outside of the border). It's **not** added to an element's dimensions.

```css
div {
  outline: [width] [style] [color];
}
```

Just like with to the `border` CSS property, you can specify the `width`, `style` and `color` of the outline.

```css
.text {
  outline: 1px dotted red;
}
```
