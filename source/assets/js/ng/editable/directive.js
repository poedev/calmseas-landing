angular.module('calmseas-landing')
  .directive('editablePage', function(){
    return {
      restrict: 'A',
      link: function(scope, elem){
        var overlay = null,
            elem = $(elem);
        if (elem.data('adoff') === undefined) {
          $('body').append('<div class="editable-overlay"><div class="util-btn edit"><i class="fa fa-pencil"/></div></div>');

          overlay = $('.editable-overlay');

          overlay
            .on('mouseleave', function(){
              $('.editable-overlay').stop().hide();
            });
          overlay.find('.edit').on('click.edit-block', function(){
          });

          // set util button events
          overlay.find('.util-btn.edit').on('click', function(){
            var overlay = $(this).closest('.editable-overlay'),
                blockID = overlay.data('block-id'),
                blockType = overlay.data('type'),
                adminScope = angular.element('body').scope(),
                textValue = scope.pageContent[blockID].content;
            adminScope.$apply(function(){
              adminScope.editorContent = {text: textValue};
              adminScope.editingBlock = {id: blockID};
            })

            $(window).trigger('openCustomEdit', blockType);
          });
        }
      }
    }
  })
  .directive('editableBlock', function(){
    return {
      restrict: 'A',
      link: function(scope, elem, self){
        elem.on('mouseenter', function(){
          var area = $(this),
              overlay = $('.editable-overlay');
          overlay
            .data('block-id', area.data('block-id'))
            .data('type', area.data('type'));

          overlay.stop().show().css({
            'width': area.outerWidth(),
            'height': area.outerHeight(),
            'top': area.offset().top,
            'left': area.offset().left
          });
        });
      }
    }
  })
