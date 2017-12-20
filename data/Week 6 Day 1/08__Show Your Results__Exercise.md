---
uuid: aff4947a-16e6-4b6d-bc55-41fdb9aae512
---

So far, we're sending GET requests to our API and getting a response. But our page is still displaying the information from our example responses. Instead, we want it to display the information our users search for.

## Tasks

- Delete the example response from the top of your file
- Change your code so that instead of displaying information from your example JSON response, it's displaying the response from your GET request


## Tips & Tricks

- Go slowly. Start by just displaying one property from the API response before building on it.
- Ask for help if and when you need it, that's what your mentors are here for.
- Keep an eye out for places where you might be repeating yourself (see if there's a way you can re-use a function, or another way to DRY up your code).

## JavaScript

#### Objects

Remember that the response from the API is a JavaScript **object**. It is made up of **key, value pairs**. We can treat the response just like the objects we've defined in our own code.

Remember that we can access values in an object using **dot notation**.

```javascript
var person = {
  name: 'Sherman',
  age: 5
}

// We can access the name ('Sherman') like this:
person.name
```

#### For Loops

If some information in your response comes back as an array, you might want to loop over it in order to display each piece of information, a for loop is a great way to do this.

```javascript
// replace array with the array you want to loop over
for(var i = 0; i < array.length; i ++ ) {
  // put your code here
}
```

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
