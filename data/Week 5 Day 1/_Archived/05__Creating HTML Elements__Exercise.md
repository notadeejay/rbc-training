---
uuid: d321d4d6-853f-46f5-bb83-eacd183ba3ec
archived: true
---

<<<<<<< HEAD
When an API responds to a request of ours with data, we want to display that data to our user. We've already added code to show our results div, but we'll need to make new elements to hold this new information.

## Tasks

- Go through the example response object and select which information you wold like to display to your users
- Once you have selected what information you would like to display, write code to access those values from the JSON example
- Use the information from the JSON example to create new HTML elements
- Write code to add your new HTML elements to the page
- Write code so that when a user clicks Search, HTML elements are created to display to the user the information you selected in the previous step
=======
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
>>>>>>> f19f091d24819b7d9631c572bbb57c3848495adf


## Tips & Tricks

<<<<<<< HEAD
- Start by determining what HTML elements you would like to build
- Figure out which content should go in to which parts of the HTML
- Write a function, or several, that take(s) data and builds HTML elements
- Write a function that adds a set of new elements to the page

#### append

The jQuery `append` function lets you add a new element as the last **child** of your selected element(s).

```javascript
$('article').append("<p>I'll be the last paragraph in the article</p>")
```

#### prepend

The jQuery `prepend` function will add a new element as the **first** child of your selected element(s).

```javascript
$('article').prepend("<p>I'll be the first paragraph in the article</p>")
```

#### replaceWith

The jQuery `replaceWith` function will replace the content of your selected item with the new content.

```javascript
$('li').replaceWith('<p>Hello</p>')
```

#### html

The `html` function will do one of two things. If the function is called with no parameters, it will get the HTML contents of the **first** element that matches its selector. If its called with a parameter, it will set the content of all of the HTML elements that match its selector (and the new content will be the parameter's value).

In this first example, the `html` function will return the content of the first `<h2>` element on the page.

```javascript
$('h2').html()
```

In this second example, the `html` function will change the content of **all** of the `<p>` tags on the page to be "**All** of the paragraph tags have this content".

```javascript
$('p').html("<strong>All</strong> of the paragraph tags have this content")
=======
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
>>>>>>> f19f091d24819b7d9631c572bbb57c3848495adf
```
