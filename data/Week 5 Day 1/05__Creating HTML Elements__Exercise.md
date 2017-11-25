---
uuid: d321d4d6-853f-46f5-bb83-eacd183ba3ec
---

When we get a response from our API, we want to display that information to our user. We've already added code to show our results `div`, but we'll need to make new elements to hold this new information.

## Tasks
<!--
  I want them to slowly add pieces of information from the example object to the page
  it's difficult to be specific here without telling them exactly what to do for each
  different project.
-->

- [ ] Go through the example response and pick out information you would like to display
- [ ] When a user clicks 'search', write functions that will be passed information from your example object, and use them to create HTML objects
- [ ] Create a function that will create an HTML element(s) and return them
- [ ] Use a JQuery method to add your new HTML element to the page


## Tips & Tricks

### append

Append lets you add new elements as a **child** of your selected element(s). It will
add the new element as the **last** child of your selected element(s).

```javascript
  $('article').append("<p>I'll be the last paragraph in the article</p>")
```

### prepend
Will add a new element as the **first** child of your selected elements.

```javascript
  $('article').prepend("<p>I'll be the first paragraph in the aricle</p>")
```

### replaceWith
Will replace the content of your selected item with the new content.

```javascript
  $('li').replaceWith('Hello')
```

### html
The `.html()` method will do two things. It will either get the HTML contents of the **first** element that matches it's selector. Or it will set the content of all of the HTML elements that match it's selector.

In this first example, it will return the content of the first `<h2>` element on the page.
```javascript
  $('h2').html()
```

In this second example, it will change the content of **all** of the `<p>` tags on the page to be "I'm a paragraph".

```javascript
  $('p').html("<strong>All</strong> of the paragraph tags have this content")
```
