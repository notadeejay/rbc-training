---
uuid: 05c9f4ac-ff28-47b3-af2e-66ad8006a023
---

Great. So you've got some elements appearing on your page when you submit your search form. Let's add a **Search Again** button that allows your users to see the search bar again, and find new information.


## Tasks

- [ ] Add a Search Again button to your header
- [ ] when the **Search Again** button is clicked, hide the previous results and show the search bar
- [ ] Allow users to search again and see the correct results
- [ ] Animate elements as they are shown and hidden

## Tips & Tricks

### val

This would fetch the value of this input:
```javascript
  $('input').val()
```

This would reset the value of the input
```javascript
  $('input').val('Hello there')
```

### hide
```javascript
  $('.box').hide(500);
```
#### show

```javascript
  $('.box').show(500);
```

### replaceWith

Will replace the content of your selected item with the new content.

```javascript
  $('li').replaceWith('Hello')
```

### remove

Would remove the selected element from the page.

```javascript
  $('li').remove()
```
