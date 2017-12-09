---
uuid: 3d6c8074-1da6-4de9-af7f-6cda24f3966d
archived: true
---

<<<<<<< HEAD
Great! So you've got some elements appearing on your page when you submit your search form (or when you select a pre-defined option). Let's also add a **Search Again** button that allows your users to see the search bar again, so they may look up new information.

## Tasks

- Add a **Search Again** button to your Header
- When the **Search Again** button is clicked, hide the previous results and show the search bar
- Allow users to search again and see the new results
- Animate elements as they are shown and hidden

## jQuery reference

#### val

This would fetch the value of an input.

```javascript
$('input').val()
```

This would reset the value of an input.

```javascript
$('input').val('Hello there')
```

#### replaceWith
=======
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
>>>>>>> f19f091d24819b7d9631c572bbb57c3848495adf

Will replace the content of your selected item with the new content.

```javascript
<<<<<<< HEAD
$('li').replaceWith('<p>Hello</p>')
```

#### remove

Would remove the selected element(s) from the page.

```javascript
$('li').remove()
=======
  $('li').replaceWith('Hello')
```

### remove

Would remove the selected element from the page.

```javascript
  $('li').remove()
>>>>>>> f19f091d24819b7d9631c572bbb57c3848495adf
```
