$(document).ready(function() {
  APP_ID = '2d42be2b30487debfb3941dd728142db'
  getFiveDayForecast('toronto')
  readable_names = {
    temp: 'Temperature',
    pressure: 'Pressure',
    humidity: 'Humidity',
    temp_min: 'Minumum Temperature',
    temp_max: 'Maximum Temperature',
    deg: 'Degrees',
    speed: 'Speed'
  }
  // LISTENERS
  $('#search-form').on('submit', function(e) {
    e.preventDefault()
    var cityName = $('#search-keywords').val()
    getWeather(cityName);
    $(this).fadeOut(1000)
    $(this).children('input').val('')
  })

  $('.search-again').on('click', showSearchBar);

  // HELPERS

  function showSearchBar() {
    $('#results').fadeOut(1000, clearResults)
    $('#search-form').delay(1000).fadeIn(1000)
  }

  function getWeather(cityName) {
    $.get("https://api.openweathermap.org/data/2.5/weather?units=metric&q=" + cityName + "&APPID=" + APP_ID, function(data) {
      console.log(data)
      showLocation(data)
      showWeatherResults(data.weather[0]);
      showSunrise(data.sys)
      $('.results-temperatures').append(createListItems(data.main))
      $('.results-wind').append(createListItems(data.wind))
    });
  }

  function getFiveDayForecast(cityName) {
    console.log('https://api.openweathermap.org/data/2.5/forecast?q=London,us' + "&APPID=" + APP_ID)
    $.get('https://api.openweathermap.org/data/2.5/forecast?q=London,us' + "&APPID=" + APP_ID, function(data) {
      console.log(data);
    })
  }

  function showLocation(data) {
    var title = data.name + ", " + data.sys.country;
    $('.results-title').text(title)
  }

  function showWeatherResults(weather) {
    $('.results-weather').text(weather.main);
    $('.results-description').text(weather.description);
    $('#results').delay(1000).fadeIn(1500)
  }

  function createListItems(temperatures) {
    var listItems = "";
    for (property in temperatures) {
      listItems += "<li><h4>" + readable_names[property] + "</h4>" + temperatures[property] + "</li>"
    }
    return listItems
  }

  function clearResults() {
    $('.results-weather, .results-description, .results-temperatures, .results-title').html('');
  }

  function getHoursAndMinutes(timestamp) {
    return new Date(timestamp * 1000).toLocaleString([], { hour12: true});
  }

  function showSunrise(sys) {
    var sunriseData = {
      "sunrise": getHoursAndMinutes(sys.sunrise),
      "sunset": getHoursAndMinutes(sys.sunset)
    }
    $('.results-sunrise').append(createListItems(sunriseData))
  }
})
