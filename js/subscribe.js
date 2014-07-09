/**
* @name subscribe
*
* @description JS interactions and functions for subscribe promo takeovers
*
*/

$(function() {
  
  // Sticky navigation (headroom.js)
  $('.subscribe-navbar').headroom();

  // Price nav panel only appears when scrolled down past main panel
  $(window).scroll(function(){
    pricePanelPosition = $('.-intro').eq(0).height() + $('.-intro').eq(0).position().top;
    if ($(window).scrollTop() > (pricePanelPosition + 50)) {
      $('.subscribe-navbar .navbar-cta').slideDown(300);
    }
    else {
      $('.subscribe-navbar .navbar-cta').slideUp(300);
    }
  });

  // Show/hide for upgrade button section
  $('.upgrade-reveal-btn').click (function(e) {
    e.preventDefault();
    $('.upgrade-ready').slideUp();
    $('.upgrade-reveal').slideDown();
  });

});
