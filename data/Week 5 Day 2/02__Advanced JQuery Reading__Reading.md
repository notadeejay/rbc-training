---
uuid: 61c2d1ed-4fcd-4c14-9145-e2365124a62a
name: Advanced jQuery
---

We've learned how to add animations and interactivity to our web page using jQuery. We can also use jQuery to create and manipulate elements on our page. This is useful when our user makes a request for information, and we want to display it back to them.

## Creating elements

#### append

The jQuery `append` function lets you add a new element as the **last** child of your selected element(s).

```javascript
$('article').append("<p>I'll be the last paragraph in the article</p>")
```

#### prepend

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
$('li').before("<li>A new sibling list item</li>")
```

## Removing elements

#### remove

Removes an element from the page, along with all its descendants and content.

```javascript
$('.alert').remove()
```

## Replacing content

#### replaceWith

Will replace the content of your selected item with the new content.

```javascript
$('li').replaceWith('<p>Hello</p>')
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

#### text

The `text` function is similar to the `html` function, with a few key differences.

Instead of getting the content of the **first** element that matches its selector, it will combine the text of ALL of the HTML elements that match its selector, including their children. So, if we have some HTML like this:

```html
<article>
  <h2>I'm the article title</h2>
  <p> I'm the first paragraph</p>
</article>

<article>
  <h2>I just have a title</h2>
</article>
```

This line of jQuery:

```javascript
$('article').text()
```

would return:

```
" I'm the article title
  I'm the first paragraph
  I just have a title"
```

The `text` function can also set the text of elements:

```javascript
$('article').text("Hello there")
```

But, we can only include text, **not** HTML elements. For example:

```javascript
$('article').text("<p>Hello there</p>")
```

Would result in this:

![](https://cl.ly/061Q0a0u2q28/Image%202017-10-04%20at%206.49.49%20PM.png)

## Manipulating attributes

We can also change any attributes an element may have set using the `attr` function.

```html
<h2 title="I'm a title"></h2>
```

We can get the value that the `title` attribute is set to:

```javascript
$('h2').attr('title')
```

Or we can set a new value like this:

```javascript
$('h2').attr('title', 'Brand new title')
```

We can also change more than one attribute at a time by passing an object as a parameter to the `attr` function, for example:

```javascript
$('img').attr({
  src: 'https://placekitten.com/200/300',
  alt: 'Super Cute Kitten'
})
```

## Collecting user input with jQuery

#### val

As our users fill out the search form, we need a way to collect their search terms. We can do this using the `val` jQuery function.

This would fetch the value of the input:

```javascript
$('input').val()
```

This would reset the value of the input:

```javascript
$('input').val('Hello there')
```
