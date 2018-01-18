---
uuid: c579f98a-3dc9-47fc-a972-0965d6e91233
---

Now that we've gotten started using our example JSON responses, it's time to decide what information we would like to display to our users.

## Tasks

- Decide on which pieces of information you would like to display to your users
- Add more code to the function you created in the previous exercise ([Creating HTML Elements](/7c996092-4ec0-4d50-8ad0-44d771237683)) that displays all of the information you want to display to your users

## Tips & Tricks

- Keep your console open as you code
- Go slowly, break the task down into small pieces. No need to add all the information from your example JSON response object all at once, one at a time is fine
- Write a little bit of code, test it, and repeat

## jQuery and JavaScript reference

#### append

Will add a new element as the **last** child of your selected element(s).

```javascript
$('article').append("<p>I'll be the last paragraph in the article</p>")
```

#### prepend

Will add a new element as the **first** child of your selected elements(s).

```javascript
$('article').prepend("<p>I'll be the first paragraph in the article</p>")
```

#### replaceWith

Will replace the content of your selected element(s) with the new content.

```javascript
$('li').replaceWith('Hello')
```

#### html

The `html` function will do one of two things. If the function is called with no parameters, it will get the HTML contents of the **first** element that matches its selector. If the function is called with a parameter, it will set the content of all of the HTML elements that match its selector (and the new content will be the parameter's value).

In this first example, the `html` function will return the content of the first `<h2>` element on the page.

```javascript
$('h2').html()
```

In this second example, the `html` function will change the content of **all** of the `<p>` tags on the page to be "**All** of the paragraph tags have this content".

```javascript
$('p').html("<strong>All</strong> of the paragraph tags have this content")
```

#### For loops

For loops are used for looping over elements in an array.

```javascript
var students = [{ name: 'Bob', grade: 'A-' }, { name: 'Dylan', grade: 'B+' }]

for (var i = 0; i < students.length; i++) {
  console.log(students[i])
}
```
