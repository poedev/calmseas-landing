(function($, window){
	$(document).ready(function(){
		var resizeCalendar = function(){
			var packages = $('.package');

			packages.each(function(){
				var calendar = $(this).find('.calendar'),
						infoH = $(this).find('.package-info').height();
				calendar.height(infoH);
			});
		};
		resizeCalendar();		
	});
}(jQuery, window));