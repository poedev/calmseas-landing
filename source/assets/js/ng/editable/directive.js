angular.module('calmseas-landing')
  .directive('editablePage', function(){
    return {
      restrict: 'A',
      link: function(scope, elem){
        var overlay = null;
        $('body').append('<div class="editable-overlay"><div class="util-btn edit"><i class="fa fa-pencil"/></div></div>');

        overlay = $('.editable-overlay');

        overlay
          .on('mouseleave', function(){
            $('.editable-overlay').stop().hide();
          });
        console.log(overlay.find('.edit'));
        overlay.find('.edit').on('click.edit-block', function(){
        });
      }
    }
  })
  .directive('editableBlock', function(){
    return {
      restrict: 'A',
      link: function(scope, elem, self){
        elem.on('mouseenter', function(){
          var area = $(this);
          console.log("IN");
          $('.editable-overlay').stop().show().css({
            'width': area.outerWidth(),
            'height': area.outerHeight(),
            'top': area.offset().top,
            'left': area.offset().left
          });
        });
      }
    }
  })
