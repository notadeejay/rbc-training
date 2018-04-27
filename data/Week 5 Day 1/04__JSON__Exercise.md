---
uuid: b8a54108-626d-4bc9-be27-671f736731f5
name: Getting Started with JSON
---

Our jQuery app lets users search for some information from an outside source. Next class, we'll learn all about how to implement this in jQuery using AJAX.

For today, we've created a JavaScript objects that mimic the responses you will get from the API.

Go through the sample responses, and take note of the information provided. What information would you like to display to your users?

## Weather app response
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
## Tasks

- Copy and paste the object to the **top** of your `index.js` file

You will use this data in today's exercises.

## Objects Review

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

If we wanted to access the items in this object we could write:

```javascript
order.items
```

If we wanted to get the **second** item, we could write:

```javascript
order.items[1]
```

We can also access object values using square brackets notation:

```javascript
order['items'][0]
```

It may be helpful to play around with accessing different elements in your sample response object before you start adding the information to your page.

Remember that the `debugger` keyword can be used to create a breakpoint, and allow you to stop code as it's running, and investigate what's happening at that moment in the program's execution.
