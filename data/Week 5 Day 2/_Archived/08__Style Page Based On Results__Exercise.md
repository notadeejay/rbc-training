---
uuid: d1a14183-de67-43c3-a39f-e41ce37dc603
archived: true
---

<!-- This is a stretch goal

Basically, students can change the colors or add images to their page that reflect the result of the API call.

Examples:
- For a rainy day, the background changes to grey
- For a fire type of pokemon, the background changes red

 -->

Now that you've got jQuery sending requests to your API, you could style your page based on the response you receive. If the weather for the day seems rainy, perhaps you could change the background of the page to grey. If you're building the horoscope application, try changing the styles based on the moods that are returned.


## Tasks
- [ ] Dynamically style your page based on the response from your API


## Tips & Tricks


### addClass
Will add a class to your HTML element

```javascript
$('h1').addClass('highlight')
```
### removeClass

Will remove a class from your HTML element

```javascript
  $('article').removeClass('bg-color-blue')
```

### toggleClass

Will add a class if the element does not currently have it, or remove a class if it does.

```javascript
  $('p').toggleClass('highlight')
```
