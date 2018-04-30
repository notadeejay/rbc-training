---
uuid: 9f1e7134-082e-47d9-9cce-f806f0a2031a
archived: true
---

Regardless of which app you chose to work on, you'll need to allow your users to search for information. In the completed version of your app, we'll be sending a request to an <abbr title="Application Programming Interface">API</abbr>. Today however, we'll be using a sample response instead, making it simpler to build our webpages. Some of these example responses look quite large. Keep in mind they are just objects like you've been using in this course. They just have more information contained in them than you are used to seeing. Before you jump in, you might find it helpful to review the [Objects reading](/b9823aaf-94b6-47b6-a9e2-26dc2e13ede0) from last week.

Below, find the sample response for your project. As you're looking at the information provided, start thinking about which values will be valuable for your users, and how you might access them.

## Horoscope app sample API request-response

```javascript
var response = {
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

## Weather app sample API request-response

```javascript
 var response = {
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

## Drinks app sample API request-response

```javascript
var response = {
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
        }
}
```

## Tasks

- Copy and paste the object for your respective project into the **top** of your `app.js` file

## Tips & Tricks

#### Objects review

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

If we wanted to access the `items` in the `order` object above, we could write the following code:

```javascript
order.items
```

If we wanted to get the **second** item (that is, at index 1 of the `items` array), we could write:

```javascript
order.items[1]
```

We could also access elements using square brackets notation:

```javascript
order['items'][0]
```

It may be helpful to play around with accessing different elements in your sample response object before
you start adding the information to your page.
