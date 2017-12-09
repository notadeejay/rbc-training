---
uuid: aff4947a-16e6-4b6d-bc55-41fdb9aae512
---

So far, we're sending GET requests to our API and getting a response. But our page is still displaying the information from our example responses; instead, we want it to display the information our users search for.

## Tasks

- Refactor your code to display the information returned by the response to your GET request
- Delete the example response from the top of your file


## Tips & Tricks

- Go slowly. Start by just displaying one property from the API response before building on it.
- Ask for help if and when you need it, that's what your mentors are here for.
- Keep an eye out for places where you might be repeating yourself (see if there's a way you can re-use a function, or another way to DRY up your code).

## jQuery Reference

#### append

The jQuery `append` function lets you add a new element as the last **child** of your selected element(s).

```javascript
$('article').append("<p>I'll be the last paragraph in the article</p>")
```

### prepend

The jQuery `prepend` function will add a new element as the **first** child of your selected element(s).

```javascript
$('article').prepend("<p>I'll be the first paragraph in the article</p>")
```

#### after

Creates a new element as a **sibling** of your selected element(s). This element will appear **after** the selected element(s) on the page.

```javascript
$('li').after("<li>A new sibling list item</li>")
```

#### before

Creates a new element as a **sibling** of your selected element(s). This new element will appear **before** the selected element(s) on the page.

```javascript
$('li.highlight').before("<li>A new sibling list item</li>")
```
