#### slideDown

Will cause an element to slide down and into view.

```javascript
$('.box').slideDown(3000)
```

#### slideUp

Will cause an element to slide up and out of view.

```javascript
$('.box').slideUp(5000)
```

#### addClass

Will add a class to the selected HTML element(s).

```javascript
$('p').addClass('highlight')
```

#### removeClass

Will remove a class from the selected HTML element(s).

```javascript
$('p').removeClass('highlight')
```

#### toggleClass

This works kind of like a light switch. If the selected element(s) has the class, it will remove it. If the element(s) doesn't have the class, it will add it!

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