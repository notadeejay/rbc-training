---
uuid: cca29fa0-b8e2-47ef-966f-505727e077a8
---

Right now, when you click "Search" or press the <kbd>Enter</kbd> key on your form, you'll notice that the page refreshes. When we submit a form, our browser will gather up the information that has been inputted, send it to our sever, and the refresh the page. In our case we don't want this to happen, so we're going to override the default behaviour and send the request ourselves using jQuery.

To do this we can use the `preventDefault` function. The `preventDefault` function allows us to cancel events or to prevent the browser from taking a default action. For example, we could also use it to prevent the browser from navigating to a new URL when a link is clicked.

### preventDefault

Call the `preventDefault` function on the event that is returned as the first argument to the function on your event listener.

```javascript
$('form').on('submit', function(event) {
  event.preventDefault()
})
```

## Tasks

- Use the `preventDefault` function to stop your browser from refreshing the page when you submit your form
