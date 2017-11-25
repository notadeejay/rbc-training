---
uuid: fe3a8976-aa1c-4d85-b2ed-9102b4f63676
---

## Forms

When we want to submit information on a webpage, we use a `<form>` element. A `<form>` element usually contains elements that allows the user to enter some information. For example, that might mean text inputs, checkboxes, radio buttons, or select boxes, as well as a submit button.

You probably use forms to log in to your favourite apps, or to create blog posts or tweets.

To define a form in HTML, we use the `<form>` tag.

```html
<form>
  <!-- form content goes here -->
</form>
```

## Input Elements

Input elements are one of the most common tags you'll see in a form. We change the `type` attribute on the input element
to help our users have a better experience.

### type

#### text

The text input is a common one, it allows the user to enter text.

```html
<input type="text" />
```

![](https://cl.ly/2k3t1x2T1y2Q/Screen%20Recording%202017-10-10%20at%2006.31%20PM.gif)

#### search

The search input type acts much like the `text` type. However, when a user types in a search bar the browser will add autocomplete options when they've searched on our site before.

```html
<input type="search" />
```

![](https://cl.ly/1I1U0D2h2T3E/Screen%20Recording%202017-10-10%20at%2006.35%20PM.gif)


#### email

The email type is useful for sign up and login forms. In most browsers, using the email input means that if users enter an invalid email address into the search bar, it will prevent the form from being submitted.

```html
<input type="email" />
```

![](https://cl.ly/2v1I350U1B09/Screen%20Recording%202017-10-15%20at%2004.03%20PM.gif)

### placeholder

The placeholder attribute adds some text to the input that will be shown when it is empty. You'll usually see it with a prompt or example.

```html
  <input type="text" placeholder="I'm a placeholder..."/>
```

![](https://cl.ly/0R2y133y1X0p/Screen%20Recording%202017-10-10%20at%2006.38%20PM.gif)

### value

The value attribute is set to the value of the text in the input. You can use it to pre-fill parts of a form.

```html
  <input type="search" value="pizza" />
```

![](https://cl.ly/050d0t26372F/Screen%20Recording%202017-10-10%20at%2006.40%20PM.gif)


## Labels

Labels let users know what information they should be inputting into what field.

```html
<label>Search Here</label>
```

We can link our label and input together using the `id` attribute on the `<input>` and the `for` attribute on the `<label>`:

```html
<label for="first_name">First Name</label>
<input id="first_name" type="text" />
```

Now, when we click our label, the input will automatically be focused on.

![](https://cl.ly/2E38312k1W1W/Screen%20Recording%202017-10-10%20at%2006.42%20PM.gif)
