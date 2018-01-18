---
uuid: 05c9f4ac-ff28-47b3-af2e-66ad8006a023
---

So you've got some elements appearing on your page when you submit your search form – great! Now, let's add a **Search Again** button that allows your users to see the search bar again, so they may find new information.

## Tasks

- Add a **Search Again** button to your Header
- When the **Search Again** button is clicked, hide the previous results and show the search bar
- Allow users to search again and see the correct results
- Animate elements as they are shown and hidden

**Note**: You might notice when you "search again" that you suddenly have twice the amount of information than you expected in your results div. If this is the case, try to remove the old search results before you add the new ones.

## jQuery reference

#### val

This will fetch the value of the input:

```javascript
$('input').val()
```

This will reset the value of the input:

```javascript
$('input').val('Hello there')
```

#### hide

```javascript
  $('.box').hide(500);
```

#### show

```javascript
  $('.box').show(500);
```

#### replaceWith

Will replace the content of your selected element(s) with the new content.

```javascript
$('li').replaceWith('Hello')
```

#### remove

Will remove the selected element(s) from the page.

```javascript
$('li').remove()
```
