var $ = require ("jquery");

$(document).ready(function () {


  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $('header').addClass('positionFixed');
    } else {
      $('header').removeClass('positionFixed');
    }
  });
});
