---
uuid: 73d598f2-cbb7-4763-851e-52e5f7acd374
archived: true
---

Great! We're sending a GET request and logging the response to our console. Now, we need to take our user input, and use it in our GET request.

## Tasks

- Collect the user input (or user choice), and pass it to your GET request
- Concatenate the URL string and your user input
- `console.log` the result, and make sure it matches the values you're inputting into the search bar

## Tips & Tricks

#### Concatenating strings

We can concatenate strings together using the `+` operator:

```javascript
"http://example.com?search_term=" + "search_value"
```

- .val()

The `.val()` jQuery method is used to get or set the value of a form input element.

```javascript
$('input').val()
```
