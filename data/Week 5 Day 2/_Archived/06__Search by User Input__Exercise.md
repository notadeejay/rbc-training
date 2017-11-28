---
uuid: 73d598f2-cbb7-4763-851e-52e5f7acd374
archived: true
---


Great! We're sending a GET request and logging the result to our console. Now, we need a way
to take our user input, and use it in our get request.

## Tasks

- [ ] Collect the user input, and pass it to your GET request
- [ ] Concatenate the url string and your user input
- [ ] `console.log` the result, and make sure it matches the values you're inputting into the search bar


## Tips & Tricks

### Adding Strings

We can add strings together using the `+` operator

```javascript
  "http://example.com?search_term=" + 'search_value'
```

### Val

The `val` jQuery method is used to get or set the value of a form element.

```javascript
  $('input').val()
```
