---
uuid: b8a54108-626d-4bc9-be27-671f736731f5
---


Both of the jQuery app options let users search for some information from an outside source. Next class, we'll learn all about how to implement this in jQuery.

For today, we've created two JavaScript objects that mimic the responses you will get from the APIs.

Go through these two sample responses, and take note of the information provided. What information would you like to display to your users?

### Horoscope Response

```javascript
{
    "horoscope": "Your natural sense of caution kicks in today. You feel the urge to stick close to home, or at least familiar faces. Connecting with your people makes you feel safe and emotionally centered. On that note, it's a great day to delve into old photos or other memories from the past. Remind yourself where you came from. Gain insight from exploring the people and places that made you who you are.(c) Kelli Fox, The Astrologer, http://new.theastrologer.com",
    "credit": "(c) Kelli Fox, The Astrologer, http://new.theastrologer.com",
    "sunsign": "Scorpio",
    "date": "2017-10-12",
    "meta": {
        "keywords": "softhearted, warmhearted",
        "intensity": "63%",
        "mood": "loyal"
    }
}
```

### Weather Response
```javascript
 {
  base: "stations",
  clouds: {
    all: 1
  },
  coord: {
    lat: 43.65,
    lon: -79.38
  },
  dt: 1507510380,
  id: 6167863,
  main: {
    humidity: 77,
    pressure: 1014,
    temp: 17.99,
    temp_max: 20,
    temp_min: 16
  },
  name: 'Downtown Toronto',
  sys: {
    type: 1,
    id: 2117,
    message: 0.0041,
    country: 'CA',
    sunrise: 1507548290,
    sunset: 1507589027,
    type: 1
  },
  visibility: 16093,
  weather: [
    {
      description: 'clear sky',
      icon: '01n',
      id: 800,
      main: "Clear"
    }
  ],
  wind: {
    deg: 170,
    speed: 1.5
  }

}
```

## Drinks Response

```javascript
{
  "drinks": [
        {
            "idDrink": "13060",
            "strDrink": "Margarita",
            "strVideo": null,
            "strCategory": "Ordinary Drink",
            "strIBA": "Contemporary Classics",
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass",
            "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
            "strDrinkThumb": "http://www.thecocktaildb.com/images/media/drink/wpxpvu1439905379.jpg",
            "strIngredient1": "Tequila",
            "strIngredient2": "Triple sec",
            "strIngredient3": "Lime juice",
            "strIngredient4": "Salt",
            "strIngredient5": "",
            "strIngredient6": "",
            "strIngredient7": "",
            "strIngredient8": "",
            "strIngredient9": "",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strMeasure1": "1 1/2 oz ",
            "strMeasure2": "1/2 oz ",
            "strMeasure3": "1 oz ",
            "strMeasure4": "",
            "strMeasure5": "",
            "strMeasure6": "",
            "strMeasure7": "",
            "strMeasure8": "",
            "strMeasure9": "",
            "strMeasure10": "",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "dateModified": "2015-08-18 14:42:59"
        },
        {
            "idDrink": "11118",
            "strDrink": "Blue Margarita",
            "strVideo": null,
            "strCategory": "Ordinary Drink",
            "strIBA": null,
            "strAlcoholic": "Alcoholic",
            "strGlass": "Cocktail glass",
            "strInstructions": "Rub rim of cocktail glass with lime juice. Dip rim in coarse salt. Shake tequila, blue curacao, and lime juice with ice, strain into the salt-rimmed glass, and serve.",
            "strDrinkThumb": "http://www.thecocktaildb.com/images/media/drink/qtvvyq1439905913.jpg",
            "strIngredient1": "Tequila",
            "strIngredient2": "Blue Curacao",
            "strIngredient3": "Lime juice",
            "strIngredient4": "Salt",
            "strIngredient5": "",
            "strIngredient6": "",
            "strIngredient7": "",
            "strIngredient8": "",
            "strIngredient9": "",
            "strIngredient10": "",
            "strIngredient11": "",
            "strIngredient12": "",
            "strIngredient13": "",
            "strIngredient14": "",
            "strIngredient15": "",
            "strMeasure1": "1 1/2 oz ",
            "strMeasure2": "1 oz ",
            "strMeasure3": "1 oz ",
            "strMeasure4": "Coarse ",
            "strMeasure5": " ",
            "strMeasure6": " ",
            "strMeasure7": " ",
            "strMeasure8": " ",
            "strMeasure9": " ",
            "strMeasure10": "",
            "strMeasure11": "",
            "strMeasure12": "",
            "strMeasure13": "",
            "strMeasure14": "",
            "strMeasure15": "",
            "dateModified": "2015-08-18 14:51:53"
        }]
}
```

## Tasks

- Copy and paste the object for your respective project to the **top** of your `index.js` file


Then, you can use the information found in the hash for today's exercises.

## Tips & Tricks

### Objects Review

Objects are made up of key value pairs. The values can be set to any data type, even other objects.

```javascript
  var order = {
    items: [
      {
        name: 't-shirt',
        price: 10
      },
      {
        name: 'shoes',
        price: 30
      }
    ],
    orderId: 12345,
    shipping: {
      address: '46 Spadina Road',
      name: 'Larry Ducksworth',
      city: 'Toronto',
      province: 'ON'
    }
  }
```

If we wanted to access the **items** in this object we could write:

```javascript
  order.items
```

If we wanted to get the **second** item, we could write:

```javascript
  order.items[1]
```

We can also access elements using square brackets:

```javascript
  order['items'][0]
```


It may be helpful to play around with accessing different elements in your sample response object before
you start adding the information to your page.

Remember that the `debugger` keyword can be used to create a breakpoint, and allow you to stop code as it's running, and investigate what's happening at that moment in the program.
