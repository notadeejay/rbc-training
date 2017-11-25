$(document).ready(function() {
  // WRITE YOUR CODE HERE
  $('#results').hide()

  // LISTENERS
  $(document).on('click', '.sign-name', function(e) {
    e.preventDefault()
    getHoroscope($(this).text(), 'today')
    $('.options').css('position', 'relative').animate({ right: '1200px' }, function( ) { $('.options').hide(); } )
    toggleBackButton()
  })

  $(document).on('click', '.yesterday', function(e) {
    var sign = $('h2.sunsign').text().toLowerCase()
    getHoroscope(sign, 'yesterday')
    $('.yesterday').fadeOut('')
  })

  $(document).on('click', '.tomorrow', function(e) {
    var sign = $('h2.sunsign').text().toLowerCase()
    getHoroscope(sign, 'tomorrow')
    $('.tomorrow').fadeOut('')
  })

  $('.back-button').on('click', showHomePage);


  getSunSigns();

  // =======
  // HTTP Requests
  // =======

  function getSunSigns() {
    $.get("http://sandipbgt.com/theastrologer/api/sunsigns", function(data) {
      showSunSigns(JSON.parse(data));
    })
  }

  function getHoroscope(sign, time) {
    clearResults()
    $.get("http://sandipbgt.com/theastrologer/api/horoscope/"+ sign + "/" + time, function(data) {
      var data = JSON.parse(data);
      showHoroscope(data);
    })
  }

  // ========
  // HELPERS
  // ========

  function showSunSigns(signs) {
    console.log(signs);
    signs.forEach(function(sign) {
      $('.options').append('<h2 class="sign-name">' + sign + '</h2>')
    })
  }

  function showHoroscope(data) {
    var $results = $('#results');
    $('.sunsign').text(data.sunsign)
    $('.horoscope').text(data.horoscope.replace('(c) Kelli Fox, The Astrologer, http://new.theastrologer.com', ''))
    $('.meta').append(createMeta('Intensity', data.meta.intensity))
    $('.meta').append(createMeta('Keywords', data.meta.keywords))
    $('.meta').append(createMeta('Mood', data.meta.mood))
    $results.fadeIn(2000)
  }

  function createMeta(title, data) {
    var header = "<h3>" + title + "</h3>";
    var content = "<p>" + data + "</p>";
    return $('<div></div>').append(header, content)
  }

  function clearResults() {
    $('.sunsign, .horoscope, .meta').html('')
  }

  function toggleBackButton() {
    $('.back-button').toggleClass('hide');
  }

  function showHomePage() {
    $('.options').show().animate({right: '0px'})
    $('#results').hide()
    toggleBackButton();
  }
})
