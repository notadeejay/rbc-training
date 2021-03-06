---
uuid: 7c996092-4ec0-4d50-8ad0-44d771237683
---

When we get a response from our API, we want to display that information to our user. We've already added code to show our results `div`, but we'll need to make new elements to hold this new information.

## Tasks

### Weather app

- Write a function that takes the response object as an argument, and appends an HTML element containing the value of the `name` key to your page.
- Add code so this function is called when a user submits the search form

**Tip**: When you add your new HTML elements to your page, make sure they go _inside_ your results div.

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

### Feeling Stuck?

<details>
  <summary><strong>Click here to one way you could start solving this problem</strong></summary>
  It's important to note that when it comes to coding there are many ways to reach the same result, this is just one of them! Use the code below to add more elements to your results `<div>` 
  <img src="https://cl.ly/3b3u350S3D31/Image%202018-05-07%20at%2011.37.05%20AM.png">
  <img src="https://cl.ly/3M0p3q1E3C27/Image%202018-05-07%20at%2011.37.19%20AM.png">
</details>