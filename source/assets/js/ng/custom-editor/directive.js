angular.module('calmseas-landing')
	.directive('customEditor', ['updateContent', function(updateContent){
		return {
			restrict: 'A',
			link: function(scope, elem) {
				var elem = $(elem),
					close = elem.find('.close'),
					saveBtn = elem.find('button.save'),
					previewBtn = elem.find('button.preview'),
					dragbar = elem.find('.drag-bar'),
					textHolder = elem.find('textarea'),
					win = $(window);
				win.on('openCustomEdit', function(e, blockType){
					elem
						.addClass('active')
				});
				close.on('click', function(){
					elem.removeClass('active').removeAttr('style');
				});
				previewBtn.on('click', function(){
					var adminScope = angular.element('body').scope(),
						blockID = scope.editingBlock.id;
			        adminScope.$apply(function(){
			          adminScope.pageContent[blockID].content = textHolder.val();
			        })
				});
				saveBtn.on('click', function(){
					var adminScope = angular.element('body').scope();
					updateContent.landingContent({
						content: adminScope.pageContent
					}).then(function(response){
						console.log(response);
					});
				});


				// setting drag event
				var dragging = false,
					startY = 0;
				dragbar
					.on('mousedown', function(e){
						dragging = true;
						startY = e.pageY;
						win.on('mousemove.custom-editor', function(e){
							var dragRange = e.pageY - startY;
							console.log(e);
							elem.height(elem.height() - dragRange);
							startY = e.pageY;
						});
					});
				win.on('mouseup', function(){
					dragging = false;
					win.off('mousemove.custom-editor');
				});
			}
		}
	}]);