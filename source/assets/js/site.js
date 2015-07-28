/**
 * @name Site
 * @description Define global variables and functions
 * @version 1.0
 */
var Site = (function($, window, undefined) {
  var privateVar = 1;

  function privateMethod1() {
    // todo
  }

  return {
    publicVar: 1,
    publicObj: {
      var1: 1,
      var2: 2
    },
    publicMethod1: privateMethod1
  };

})(jQuery, window);

jQuery(function() {
  Site.publicMethod1();


  var $elem = $('.grid');
  if ($elem.length) {
    var $mason = $elem.masonry({
      itemSelector: '.fac-wrap',
      percentPosition: true
    });
    $elem.find('img').each(function(){
      $(this).get(0).onload = function(){
        $mason.masonry( 'layout' );
      };
    });
    $(window).on('resize.reloadMasonry', function(){
      $mason.masonry( 'layout' );
    });
  }

  // assign audio
  var audio = $("<audio autoplay><source src='http://poeboxes.com/demo/calmseas-hotel/mp3/quando.mp3'></source></audio>");
  $('body').append(audio);

  // ON OFF audio
  $('.audio-switch').on('click', function(){
    var audiodom = audio.get(0),
        self = $(this);

    if (audiodom.paused) {
      audiodom.play();
      self.addClass('active');
    } else {
      audiodom.pause();
      self.removeClass('active');
    }
  });

  // Back to top button
  $('.back-to-top').on('click', function(){
    $('body, html').animate({'scrollTop': '0px'}, 1400);
  });
});
