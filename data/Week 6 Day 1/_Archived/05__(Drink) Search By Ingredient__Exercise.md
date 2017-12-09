---
uuid: 3dd2bde3-c9ce-4ac7-9165-6f4401bc8cec
archived: true
---

<<<<<<< HEAD
The Cocktail DB API allows us to use different search parameters, such as searching by ingredient instead of by name. We can do this by changing the query parameters that we send as part of a request.

```javascript
http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin
```

If we use the `i` query param in a request, the API will return a list of drinks made with that ingredient (for example gin).

This is an example of the response you will receive:

```javascript
{
  "drinks": [
        {
            "strDrink": "3-Mile Long Island Iced Tea",
            "strDrinkThumb": "http://www.thecocktaildb.com/images/media/drink/rrtssw1472668972.jpg",
            "idDrink": "15300"
        },
        {
            "strDrink": "69 Special",
            "strDrinkThumb": "http://www.thecocktaildb.com/images/media/drink/vqyxqx1472669095.jpg",
            "idDrink": "13940"
        },
        {
            "strDrink": "A1",
            "strDrinkThumb": "http://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
            "idDrink": "17222"
        }
      ]
}
```

We can also search for a specific drink recipe if we have its **id**.

```javascript
http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=17222
```

Here is an example of the response for this request:

```javascript
"drinks": [
        {
            "idDrink": "17222",
            "strDrink": "A1",
            "strVideo": null,
            "strCategory": "Cocktail",
            "strIBA": null,
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass",
            "strInstructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass.",
            "strDrinkThumb": "http://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
            "strIngredient1": "Gin",
            "strIngredient2": "Grand Marnier",
            "strIngredient3": "Lemon Juice",
            "strIngredient4": "Grenadine",
            "strIngredient5": "",
            "strIngredient6": "",
            "strIngredient7": "",
            "strIngredient8": null,
            "strIngredient9": null,
            "strIngredient10": null,
            "strIngredient11": null,
            "strIngredient12": null,
            "strIngredient13": null,
            "strIngredient14": null,
            "strIngredient15": null,
            "strMeasure1": "1 3/4 shot ",
            "strMeasure2": "1 Shot ",
            "strMeasure3": "1/4 Shot",
            "strMeasure4": "1/8 Shot",
            "strMeasure5": "\r\n",
            "strMeasure6": "\r\n",
            "strMeasure7": "\r\n",
            "strMeasure8": null,
            "strMeasure9": null,
            "strMeasure10": null,
            "strMeasure11": null,
            "strMeasure12": null,
            "strMeasure13": null,
            "strMeasure14": null,
            "strMeasure15": null,
            "dateModified": "2017-09-07 21:42:09"
        }
    ]
}
```

## Tasks

- Add a function that sends a GET request for a list of drinks you can make with that ingredient
- Add code so that the user can choose to search by drink name or by ingredient
- Display the list of drinks to your user
- Add code so when a user clicks on a drink, it will display its recipe
=======

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
>>>>>>> f19f091d24819b7d9631c572bbb57c3848495adf


## Tips & Tricks

<<<<<<< HEAD
### Listening for events on new elements

If on page load you try to attach an event listener to an element that you appended to the page *after* page load, you'll find that your callback never fires. This is because you tried to attach the listener *before* the element existed – that won't work. We can get around this by adding our listener to the document itself, and then specifying which elements we'd like to target.

```javascript
$('document').on('click', '.ingredient', function() {
  // handle click event on .ingredient element
})
=======
### Listening on New Elements

If you try to attach a listener to an element that you appended to the page, you may find that it never fires.
This is because those listeners are attached *before* the element is there. We can get around this by adding our listener
to the document itself, and then specifying which elements we'd like to target.

```javascript
  $('document').on('click', '.ingredient', function() {

  })
>>>>>>> f19f091d24819b7d9631c572bbb57c3848495adf
```
