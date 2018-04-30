---
uuid: bd64e7c8-10c5-44b5-82bc-64b83268a95d
archived: true
---

## Tasks

- Add code so that when a user clicks on an input element, the border of this input element changes colour
- Use CSS to style the text input and submit button of your form




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

The change event is triggered when the user changes the value of the input element. When this occurs depends on the type of element the user is interacting with, but generally speaking this event will be triggered *after* the user has made a change.

```javascript
$('form input').on('change', function() {
  // add code here
})
```

## CSS reference

#### :focus (pseudo selector)

Will add styles to an HTML element when its in a focus state.

```css
.example:focus {
  background-color: green;
}
```

#### border-radius

Will add rounded corners to an element.

```css
div {
  border-radius: 4px;
}
```

#### padding

Will add space between the content and the border of an element.

```css
div {
  padding: 10px;
}
```

