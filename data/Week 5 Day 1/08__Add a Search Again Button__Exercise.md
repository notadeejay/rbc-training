---
uuid: 05c9f4ac-ff28-47b3-af2e-66ad8006a023
---

So you've got some elements appearing on your page when you submit your search form – great! Now, let's add a **Search Again** button that allows your users to see the search bar again, so they may find new information.

## Tasks

- Add a **Search Again** button to your Header
- When the **Search Again** button is clicked, hide the previous results and show the search bar
- Allow users to search again and see the correct results
- Animate elements as they are shown and hidden

**Note**: You might notice when you "search again" that you suddenly have twice the amount of information than you expected in your results div. If this is the case, try to remove the old search results before you add the new ones.
### Add a button

Start by adding a `<button>` to your `<header>` section with a class of `search-again`. Next you'll want to write a function that is triggered when the user **clicks** on the button.

It might look something like this:

```javascript
    $('.search-again').on('click', function (){
      //do stuff
   });
```

### Clear the contents

There are multiple ways to clear the contents of a `<div>` using jQuery. You can see two of them [here](https://www.sitepoint.com/jquery-clear-div-contents/). Try out both and see what happens!

Another way uses `.html()`. This function allows you to set the HTML contents of an element. In this case, if you want to contents of the results `<div>` to be empty, you will need to set the HTML to and empty string, like so:

```javascript
  $('#results').html('')
```

### Show the form again

Now that our results are gone - we need to show the `<form>` so the user can search again. Remember how we hid the form using the following code?

```javascript
    $('form').fadeOut(500)
```

What function do you think does the opposite? If you think you've got it, add that into your function that is handling the click.


### Feeling Stuck?

<details>
  <summary><strong>Click here to one way you could solve this problem</strong></summary>
  It's important to note that when it comes to coding there are many ways to reach the same result, this is just one of them! Use the code below to add more elements to your results `<div>` 

  ```javascript
  $('.search-again').on('click', function (){
      $('.container').remove();
      $('form').delay(1000).fadeIn(500)
  });  
  ```
</details>