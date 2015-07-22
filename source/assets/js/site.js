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


  var elem = document.querySelector('.grid');
  var msnry = new Masonry( elem, {
    // options
    itemSelector: '.fac-wrap',
    percentPosition: true
  });

  // assign audio
  var audio = $("<audio autoplay><source src='mp3/quando.mp3'></source></audio>");
  $('body').append(audio);

});
