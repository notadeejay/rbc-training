---
uuid: 27e6733f-4f05-473d-9198-3e95472dc285
---

Great! We're sending a GET request and logging the response to our console. Now, we need to take our user input, and use it in our GET request.

For example, when the form is submitted, we need to take the text that the user has submitted, and send it to the API we've chosen, so we get the correct response.

![](https://cl.ly/041o0o3r2D0M/Image%202017-12-19%20at%204.46.47%20PM.png)




## Tasks

- Collect the user input (or user selection), and save it to a variable
- Edit your code so your saved user input is added to the url you're using in your GET request.
- `console.log` the response and using your chrome developer tools and double check that the response matches the values you're inputting into the search bar

## Tips & Tricks

#### Concatenating strings

We can concatenate strings together using the `+` operator:

```javascript
"http://example.com?search_term=" + "margarita"
```

- .val()

The `.val()` jQuery method is used to get or set the value of a form input element.

```javascript
$('input').val()
```
