---
uuid: 4cc131e1-68da-4a62-8a11-840d6c86fba5
---


#### Meet your Console

When you are working on adding some JavaScript to your project, your **console**
will quickly become your new best friend. When you were first playing around with JavaScript
in [repl.it](https://repl.it/languages/javascript), you used `console.log` to print
values to the console on the right side of your screen.

Your browser has a console built in. To see it, right click anywhere on your page, click **inspect**
and then, click console.


![open console](https://d3vv6lp55qjaqc.cloudfront.net/items/1X31330J3E2o3x24152x/Screen%20Recording%202017-09-10%20at%2012.31%20PM.gif)


Alternatively, you can click the three dots at the edge of your chrome browser, go to **more tools**, and open up **developer tools**.

![open with clicks](https://d3vv6lp55qjaqc.cloudfront.net/items/212Z1o2H301z0b3D2s1U/Screen%20Recording%202017-09-10%20at%2012.34%20PM.gif)

#### Selecting Elements in JQuery

Just like when we were writing CSS, we didn't want to style *all* of the elements on our page the same.
We need to be able to target **specific** elements with JQuery.

Jquery uses similar selectors to CSS.

If we have this paragraph on our html page

```html
  <p class="highlight">I'm a paragraph</p>
```

If we want to select it using JQuery, we would write:

```javascript
  $('.highlight')
```

Just like in CSS we use a `.` to select elements with classes, and a `#` to select
elements with an id.

```javascript
  // would select an element with the id 'alert'
  $('#alert')
```

#### Listening for Events

Once we've selected the element we want, we can listen for specific events on that element.

For example, if we wanted to listen for someone clicking on our '.highlight' paragraph, we could write


```javascript
  $('.highlight').on('click', function() {
    console.log("I was clicked");
  })
```

This JQuery function takes two arguments. One, the name of the event to listen to, and the second a
function to call when the event occurs.

In this case, we are listening for a **click** on elements with the class **highlight** and when it occurs
we will call a function that will console.log "I was clicked".

![click example](https://d3vv6lp55qjaqc.cloudfront.net/items/3k1z2Z3F3U1r2a1I3P1e/Screen%20Recording%202017-09-10%20at%2001.17%20PM.gi)

#### Changing HTML elements

We can also use JQuery to alter HTML elements that are already on our page.

For example, using the `css` function, we can change the styles of an element in response to a user action.


```javascript
  $('h1').css('color', 'purple')
```

The `.css` function takes two arguments, the first is the **property** you would like to set,
and the second is the **value** you would like to change it to. In this example, we're changing the **color** of our
`h1` elements to **purple**

We can have this code run when a user hovers over our `h1` element by adding a listener to the event.

```javascript
$('h1').hover(function() {
  $('h1').css('color', 'purple');
});
```

When we add this code to our project, this would be the result:
![hover example](https://cl.ly/0Y3X2d0z3O0L/Screen%20Recording%202017-09-10%20at%2001.28%20PM.gif)

Using the `.css` method, we can change any attribute for a JQuery function.

#### Animations




#### Creating Elements With JQuery

<!--  appendTo, append, before, after -->
We can create and add new HTML elements to our page using JQuery.

You can create an element in JQuery like this:


```javascript
  $('.favourite-things-list').append('<li>JQuery</li>')
```
