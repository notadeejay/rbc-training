---
uuid: 4604f2d5-8017-4b40-9095-26bbc40034cf
---

## Creating Elements

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

### after
Creates a new element as a **sibling** of your selected element(s). This element will
appear **after** the selected element on the page.

```javascript
  $('li').after("<li>A new sibling list item</li>")
```

### before

Creates a new element as a **sibling** if your selected element(s). This new element will appear
**before** the selected element on the page.

```javascript
  $('li.higlight').after("<li>A new sibling list item</li>")
```

## Removing Elements

### remove

```javascript
  $('.alert').remove()
```

## Replacing Content


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

### text

The text element is similar to the html element, with a few key differences.

Instead of getting the content of the **first** element that matches it's selector, it will combine the text of ALL of the HTML elements that match it's selector, incuding the children. So, if we have some HTML like this:

```html
  <article>
    <h2>I'm the article title</h2>
    <p> I'm the first paragraph</p>
  </article>

  <article>
    <h2> I just have a title </h2>
  </article>
```
This line of jQuery:

```javascript
  $('article').text()
```

would return:
" I'm the article title
  I'm the first paragraph
  I just have a title"

It can also set the text of elements:

```javascript
  $('article').text("Hello there")
```

But, we can only include text, **not** HTML elements. For example:

```javascript
  $('article').text("<p>Hello there</p>")
```

Would result in this:

![](https://cl.ly/061Q0a0u2q28/Image%202017-10-04%20at%206.49.49%20PM.png)

## Manipulating Attributes

We can also change any attributes an element may have set using the `.attr` method.

```html
  <h2 title="I'm a title"></h2>
```

We can get the value that the attribute is set to:
```javascript
  $('h2').attr('title')
```

Or we can reset the value like this:

```javascript
  $('h2').attr('title', 'Brand new title')
```

We can also change more than one `attr` at a time, using an object:

```javascript
$('img').attr({
    src: 'https://placekitten.com/200/300',
    alt: 'Super Cute Kitten'
  })
```

## Collecting User Input With JQuery

### val

As our users fill out the search form, we need a way to collect their search terms. We can do this using the `.val` jQuery method.

This would fetch the value of this input:
```javascript
  $('input').val()
```

This would reset the value of the input
```javascript
  $('input').val('Hello there')
```
