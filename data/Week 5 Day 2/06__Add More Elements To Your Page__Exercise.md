---
uuid: c579f98a-3dc9-47fc-a972-0965d6e91233
---

Now that we've gotten started using our example JSON response. Take a look at the object, and decide
what information you would like to display to your user.

If you need to, stop now and figure out how you can extract those pieces of information from your JSON object. If you're unsure, ask a mentor for help.

### Task
- Decide on which piece of information you would like to display to your user
- Write a function that takes the response object as an argument, and appends an HTML element containing a value from the JSON example to your page.
- Add code so this function is called when a user submits the search form
- Repeat until you have displayed all of the information you think your user would want to see



### Tips & Tricks
- Keep your console open as you code
- Go slowly, break the task down into small pieces
- Write a little bit of code, test it, and repeat

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

### for loops

For loops are used for looping over elements in an array.

```javascript
var students = [{ name: 'Bob', grade: 'A-' }, { name: 'Dylan', grade: 'B+' }]
for (var i = 0; i < students.length; i++) {
  console.log(students[i])
}
```
