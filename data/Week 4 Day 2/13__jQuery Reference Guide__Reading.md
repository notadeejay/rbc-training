---
uuid: 9f24fe26-4a5b-11e8-842f-0ed5f89f718b
---

We've mentioned a number of jQuery methods you can use to manipulate your web app. Below are just a few. For the full list, you can check out the official [docs](http://jquery.com/)
#### submit
Sent to an element when the user is attempting to submit a form. It can only be attached to `<form>` elements.

```javascript
$('form').on('submit', function(event) {
  //do stuff
})
```
### click

Triggered when a user clicks on an element

```javascript
$('.box').on('click', function(event) {
  //do stuff
})
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

