---
uuid: 7aac2a91-4509-403d-80a3-dec1a9bda0c0
---


One of the things you can do with jQuery is hide and show elements on your page.

## Tasks
- Add code to hide your search input and button after the form has been submitted
- Add an attribute to the text input so there's appropriate placeholder text by default
- Add an animation to the elements as they are hidden
- Add some custom CSS and personalize your project

## jQuery reference

#### click

Listens/waits for clicks on the selected elements.

```javascript
$('p').on('click', function() {
  console.log("I was clicked!")
})
```

#### fadeOut

Will cause an element to slowly fade away.
```javascript
$('.box').fadeOut(2000)
```

#### slideDown

Will cause an element to slide down and into view.

```javascript
$('.box').slideDown(3000)
```

#### slideUp

Will cause the element to slide up and out of view.

```javascript
$('.box').slideUp(5000)
```

#### addClass

Will add a class to an HTML element.

```javascript
$('p').addClass('highlight')
```

#### removeClass

Will remove a class from an HTML element.

```javascript
$('p').removeClass('highlight')
```

#### toggleClass

This works kind of like a light switch. If the element has the class, it will remove it. If the element doesn't have the class, it will add it!

```javascript
$('p').toggleClass('highlight')
```

## CSS reference

#### display

The display property can be set to:

- `block`
- `inline`
- `inline-block`
- `flex`
- `none`

#### transition

The CSS transition property allows you to customize how a value handles a changing value on a specific CSS property.

```css
p {
  color: blue;
  transition: color 2s linear 3s;
}
```

## HTML reference

#### input

Input elements can have several attributes:

- `placeholder`
- `type`
- `name`
- `value

```html
<input name="" placeholder="" value="" type="" />
```
