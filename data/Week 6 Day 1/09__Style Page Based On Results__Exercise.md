---
uuid: 5efc7b95-3ba6-4db9-b3c8-d86c4fd99f27
stretch: true
---

Now that you've got jQuery sending requests to your API, you could style your page based on the response you receive. If the weather for the day seems rainy, perhaps you could change the background of the page to grey. If you're building the horoscope application, try changing the styles based on the moods that are returned.

## Tasks

- Dynamically style your page based on the response from your API

## jQuery reference

#### addClass

Will add a class to an HTML element.

```javascript
$('p').addClass('highlight')
```

#### removeClass

Will remove a class from an HTML element.

```javascript
$('p').removeClass('highlight')
```

#### toggleClass

This works kind of like a light switch. If the element has the class, it will remove it. If the element doesn't have the class, it will add it!

```javascript
$('p').toggleClass('highlight')
```
