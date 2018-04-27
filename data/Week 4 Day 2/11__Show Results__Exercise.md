---
uuid: 4a17bd68-3365-4d23-bc54-623d7a6a8211
---

## Tasks

- Add a div to your HTML that will hold the results of your search
- Add code to show your new results div when your form is submitted
- Add animations to your elements that are being shown and hidden

Let's start by adding a `<div>` that will hold the results of our search. For now, we'll fill it with placeholder text for the purpose of viewing our results. 

Below your form, add code similar to the following (remember in coding there is not one right answer, so your code might not look **exactly** like this):

```html
  <div id="results">
      <h2 class="results-title">Results Title</h2>
      <img src="https://www.placecage.com/c/200/300">
  </div>
```
Your app should now look something like this:

![](https://cl.ly/2j24163W3t1E/Image%202018-04-27%20at%204.40.08%20PM.png)        

We can't display results if our user hasn't searched yet! Use the jQuery references below to hide them and then show them when the form is submitted 
## jQuery reference

#### hide

Will set the `display` property of an element to `none`, hiding it from the user.

```javascript
$('.box').hide(500)
```

#### show

Will make an element visible by restoring its `display` property to its original value.

```javascript
$('.box').show(500)
```

#### jQuery animations

jQuery provides us with some methods that let us animate an element being shown and hidden on the page. Some common ones are:

- slideUp
- slideDown
- fadeIn
- fadeOut


### Feeling Stuck?

<details>
  <summary><strong>Click here to one way you could solve this problem</strong></summary>
  It's important to note that when it comes to coding there are many ways to reach the same result, this is just one of them! 

  ```javascript
    $('#results').hide()

    $('form').on('submit', function(event) {
      event.preventDefault()
      $(this).fadeOut(2000) 
      $('#results').show(500)
    })
  ```
</details>
