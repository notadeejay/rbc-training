---
uuid: 2b71211b-5f3d-4569-8f97-70ffccafe37c
archived: true
---

The Open Weather Map API also gives us the option to search for a five day forecast, instead of a daily weather report.


### Forecast Url
`api.openweathermap.org/data/2.5/forecast`


### Example Response

```javascript

{
    "cod": "200",
    "message": 0.0064,
    "cnt": 40,
    "list": [
        {
            "dt": 1507572000,
            "main": {
                "temp": 296.89,
                "temp_min": 296.68,
                "temp_max": 296.89,
                "pressure": 992.82,
                "sea_level": 1026.2,
                "grnd_level": 992.82,
                "humidity": 98,
                "temp_kf": 0.21
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 68
            },
            "wind": {
                "speed": 3.11,
                "deg": 269.002
            },
            "rain": {},
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-10-09 18:00:00"
        },
        {
            "dt": 1507582800,
            "main": {
                "temp": 296.67,
                "temp_min": 296.534,
                "temp_max": 296.67,
                "pressure": 993.5,
                "sea_level": 1026.8,
                "grnd_level": 993.5,
                "humidity": 93,
                "temp_kf": 0.14
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 3.02,
                "deg": 271.5
            },
            "rain": {
                "3h": 0.0075000000000003
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2017-10-09 21:00:00"
        }
      ],
        "city": {
        "id": 4517009,
        "name": "London",
        "coord": {
            "lat": 39.8865,
            "lon": -83.4483
        },
        "country": "US"
    }
```

Note that some of the fields in this response look similar to the ones you saw in the current weather response. Can you re-use any of the functions or code you previously wrote to display this information?

## Tasks

- [ ] Add a button that allows the user to search for daily weather or a five day forecast
- [ ] Create a function that sends a GET request to the forecast url
- [ ] Log out the response to your console, and look through the information
- [ ] Decide which pieces of information you would like to display to the user
- [ ] Display a five day forecast to your users when they request it.
