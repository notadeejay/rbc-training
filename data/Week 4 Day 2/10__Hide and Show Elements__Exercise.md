---
uuid: 7aac2a91-4509-403d-80a3-dec1a9bda0c0
---

One of the things you can do with jQuery is hide and show elements on your page.

## Tasks

- Add code to hide your search input and button after the form has been submitted

Now that you have a function that lets you submit your form, let's use it to hide the form once we click submit. Luckily there is a jQuery method that makes this simple. 

#### fadeOut

Will cause an element to slowly fade away. The number you see determines how quickly or slowly the element will fade out.

```javascript
$('.box').fadeOut(2000)
```
Use `$(this)` to target your form and have it fade out when a user clicks submit


### Feeling Stuck?

<details>
  <summary><strong>Click here to one way you could solve this problem</strong></summary>
  It's important to note that when it comes to coding there are many ways to reach the same result, this is just one of them! 

  ```javascript
    $('form').on('submit', function(event) {
      event.preventDefault()
      $(this).fadeOut(2000) 
    })
  ```
</details>


## jQuery reference

#### click

Listens/waits for clicks on the selected elements.

```javascript
$('p').on('click', function() {
  console.log("A paragraph was clicked!")
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

#### input

Input elements can have several attributes:

- `placeholder`
- `type`
- `name`
- `value

```html
<input name="" placeholder="" value="" type="" />
```
