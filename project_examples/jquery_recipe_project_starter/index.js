$(document).ready(function() {
<<<<<<< HEAD
  // WRITE YOUR CODE HERE

  $('form').submit(function(e) {
    e.preventDefault();
    getRecipe($('#drink-name').val())
  })

  // getRecipe('margarita');
  // HTTP Requests
  function getRecipe(name) {
    $.get('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + name + '&key=1', function(data) {
      console.log(data);
      // showDrinks(data.drinks)
    })
  }


  // Helpers

  function showDrinks(drinks) {
    drinks.forEach(function(drink) {
      $('#results').append(createDrinkDiv(drink));
    })
  }

  function createDrinkDiv(drink) {
    var container = $('<div class="results-drink"></div>')
    container.append(createTitleAndImageDiv(drink))
    container.append(createInstructions(drink))
    return container
  }

  function createTitleAndImageDiv(drink) {
    var div = $('<div class="title-and-image"></div>')
    var h2 = $('<h2></h2>').text(drink.strDrink)
    var img = $('<img>').attr('src', drink.strDrinkThumb)
    div.append(h2)
    div.append(img)
    return div;
  }

  function createInstructions(drink) {
    var div = $('<div class="instructions"></div>')
    div.append('<h2 class="indgredient-title">Ingredients</h2>')
    div.append(parseIngredients(drink))
    div.append('<h2>Instructions</h2>')
    div.append(drink.strInstructions)
    return div
  }

  function parseIngredients(drink) {
    var i = 1;
    var list = $('<ul></ul>')
    while (i < 16) {
      var ingredient = drink['strIngredient' + i]
      var amount = drink['strMeasure' + i]
      if (ingredient != '') {
        list.append('<li>' + amount + ' : ' + ingredient + '</li>')
      }
      i += 1
    }
    return list
  }
=======
  // WRITE YOUR CODE HERE.
>>>>>>> f19f091d24819b7d9631c572bbb57c3848495adf
});
