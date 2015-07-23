(function($, window){
  $('body').append('<div class="editable-overlay"></div>');

  $('.editable')
    .on('mouseenter', function(){
      var area = $(this);
      console.log("IN");
      $('.editable-overlay').stop().show().css({
        'width': area.outerWidth(),
        'height': area.outerHeight(),
        'top': area.offset().top,
        'left': area.offset().left
      });

    });
  $('.editable-overlay')
    .on('mouseleave', function(){
      console.log("OUT");
      $('.editable-overlay').stop().hide();
    });

}($, window));
