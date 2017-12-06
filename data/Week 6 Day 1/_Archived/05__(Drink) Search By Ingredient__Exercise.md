---
uuid: 3dd2bde3-c9ce-4ac7-9165-6f4401bc8cec
archived: true
---


The API offers us ways we can use different search parameters. One, is that we can search by ingredient instead of by name.
We can do this by changing the query parameters that we send.


```javascript
  http://www.thecocktaildb.com/api/json/v1/1/search.php?i=orange
```

By using the `i`, it will return information about that ingredient.


This is an example of the response you will receive:

```javascript
{
  "ingredients": [
      {
          "idIngredient": "359",
          "strIngredient": "Orange",
          "strDescription": "The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae. It is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.\r\n\r\nThe orange is a hybrid between pomelo (Citrus maxima) and mandarin (Citrus reticulata). It has genes that are ~25% pomelo and ~75% mandarin; however, it is not a simple backcrossed BC1 hybrid, but hybridized over multiple generations. The chloroplast genes, and therefore the maternal line, seem to be pomelo. The sweet orange has had its full genome sequenced. Earlier estimates of the percentage of pomelo genes varying from ~50% to 6% have been reported.\r\n\r\nSweet oranges were mentioned in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world. Orange trees are widely grown in tropical and subtropical climates for their sweet fruit. The fruit of the orange tree can be eaten fresh, or processed for its juice or fragrant peel. As of 2012, sweet oranges accounted for approximately 70% of citrus production.\r\n\r\nIn 2014, 70.9 million tonnes of oranges were grown worldwide, with Brazil producing 24% of the world total followed by China and India.",
          "strType": "Fruit"
      }
  ]
}
```

## Task
- [ ] Add a function that would send a get request for information about each ingredient
- [ ] Add a listener so that when an ingredient is clicked, the get request will be sent
- [ ] Display the ingredient information to your user
- [ ] Add a way for the user to hide the additional ingredient information, should they want to


## Tips & Tricks

### Listening on New Elements

If you try to attach a listener to an element that you appended to the page, you may find that it never fires.
This is because those listeners are attached *before* the element is there. We can get around this by adding our listener
to the document itself, and then specifying which elements we'd like to target.

```javascript
  $('document').on('click', '.ingredient', function() {

  })
```
