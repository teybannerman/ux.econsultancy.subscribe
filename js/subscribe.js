/**
* @name subscribe
*
* @description JS interactions and functions for subscribe promo takeovers
*
*/

$(function() {
  
  // Sticky navigation (headroom.js)
  $('.subscribe-navbar').headroom();

  $('.upgrade-reveal-btn').click (function(e) {
    e.preventDefault();
    $('.upgrade-ready').slideUp();
    $('.upgrade-reveal').slideDown();
  });

});
