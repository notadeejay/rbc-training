---
uuid: 7aac2a91-4509-403d-80a3-dec1a9bda0c0
---

One of the things you can do with jQuery is hide and show elements on your page.

## Tasks

- Add code to hide your search input and button after the form has been submitted
- Add placeholder text to your input element

### Hiding Your Form

Now that you have a function that lets you submit your form, let's use it to hide the form once we click submit. Luckily there is a jQuery method that makes this simple. 

#### fadeOut

Will cause an element to slowly fade away. The number you see determines how quickly or slowly the element will fade out.

```javascript
$('.box').fadeOut(2000)
```
Use `$(this)` to target your form and have it fade out when a user clicks submit

### Adding a Placeholder

The placeholder attribute specifies a short hint that describes the expected value of an input field. What do you want your user to search by? 
#### input

Input elements can have several attributes:

- `placeholder`
- `type`
- `name`
- `value

```html
<input name="" placeholder="" value="" type="" />
```

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

