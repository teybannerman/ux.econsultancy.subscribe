/**
* @name subscribe
*
* @description JS interactions and functions for subscribe promo takeovers
*
*/

$(function() {
  
  // Sticky navigation (headroom.js)
  $('.subscribe-navbar').headroom();

  // Navigation scroll to anchor
  $('.navbar-links a').click(function() {
    $this = $(this);
    var anchor = $this.attr('href').substring(1);
    scrollToAnchor(anchor);
  });

  // On scroll events
  $(window).scroll(function(){

    // Fixed navigation position indicator
    $('.subscribe-panel').each(function() {

    });

    // Price nav panel only appears when scrolled down past main panel
    if ($('.-intro').length) { //check if price nav panel exists
      pricePanelPosition = $('.-intro').eq(0).height() + $('.-intro').eq(0).position().top;
      if ($(window).scrollTop() > (pricePanelPosition + 50)) {
        $('.subscribe-navbar .navbar-cta').slideDown(300);
      }
      else {
        $('.subscribe-navbar .navbar-cta').slideUp(300);
      }
    }
  });

  // Show/hide for upgrade button section
  $('.upgrade-reveal-btn').click (function(e) {
    e.preventDefault();
    $('.upgrade-ready').slideUp();
    $('.upgrade-reveal').slideDown();
  });

});


function scrollToAnchor(aid){
  var aTag = $("section[name='"+ aid +"']");
  $('html,body').animate({scrollTop: aTag.offset().top - 40},'slow');
}

