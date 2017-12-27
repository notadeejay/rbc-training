---
uuid: 2ab89a95-b9fc-4eac-a63f-e022be7bda9b
---

Right now, when you click **Search** or press the <kbd>Enter</kbd> key on your form, you'll notice that the page refreshes. When we submit a form, our browser will gather up the information that has been inputted into it, send it to a specified server, and then refresh the page. In our case we don't want this to happen, so we're going to override the default behaviour and send the data to a server ourselves, using jQuery.

To do this we can use the `preventDefault` function. The `preventDefault` function allows us to cancel events or to prevent the browser from taking a default action. For example, we could also use it to prevent the browser from navigating to a new URL when a link is clicked.

### preventDefault

Call the `preventDefault` function on the event that is returned as the first argument to the function on your event listener.

```javascript
$('form').on('submit', function(event) {
  event.preventDefault()
})
```

## Tasks

- Add a jQuery event listener that will fire when the form on your page has been submitted
- Use the `preventDefault` function to stop your browser from refreshing the page when a user submits information using the form
