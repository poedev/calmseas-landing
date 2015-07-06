(function($, window){
	// toggle page info
	$('#page-info h2').on('click', function(){
		$('#page-info').toggleClass('active');
	});

	// toogle language select
	$('.lang-sel').on('click', function(){
		console.log('helo');
		$(this).find('.selector').fadeToggle('fast');
	});

	// Mobile menu show up
	$('#header .mobile-nav .switch-btn').on('click', function(){
		$("#mobile-nav-content")
			.toggleClass('active');
	});
	$('#main-slider').on('click.active-nav', function(){
	   $("#mobile-nav-content").removeClass('active');
	});

	// Toggle quick booking
	// var bookForm = $('#booking-widget .booking-form');
	// $('#booking-widget .wg-btn').on('click', function(){
	// 	bookForm.addClass('active');
	// });
	// function hideBook() {
	// 	bookForm.removeClass('active');
	// }
	// bookForm.find('.close-btn').on('click', function(){
	// 	hideBook();
	// });
	// $('#main-slider').on('click.toggle-book', function(){
	// 	hideBook();
	// });
	
	// Toggle available rooms calendar
	var avaiCalendar = $('#available-calendar-widget');
	$('#booking-widget .wg-btn').on('click', function(){
		avaiCalendar.addClass('active');
	});
	avaiCalendar.find('.close-btn').on('click', function(){
		avaiCalendar.removeClass('active');
	});

	$('[data-mcscrollbar]').mCustomScrollbar({
		theme: 'dark'
	});

	function setFlipCard() {
		$('[data-flip]').flip();
		setTimeout(function(){	
			$('[data-flip]').each(function(){
				var _this = $(this);
				_this.height(_this.find('.back').height());
			});
		}, 300);
	}
	$(window).on('resize.flip', function(){
		setFlipCard();
		setTimeout(function(){
			setFlipCard();
		}, 150);
	});
	setFlipCard();

	// FLEX-SLIDER INIT
	$('[data-flex-slider]').each(function(){
		var id = $(this).attr('id'),
			thumb = $(this).data('thumb');
		$(this).flexslider({
		    animation: "fade",
		    controlNav: false,
		    animationLoop: false,
		    slideshow: false,
		    sync: thumb
		 });
		$(thumb).flexslider({
			animation: "slide",
		    controlNav: false,
		    animationLoop: false,
		    slideshow: false,
		    itemWidth: 60,
		    itemMargin: 7,
		    asNavFor: '#' + id
		});
		console.log("HELO");
	});

	function initGallerySlider(){
		$('.gallery-slider .close').on('click', function(){
			console.log("HELO");
			console.log($(this).closest('.gallery-slider').hide());
			$(this).closest('.gallery-slider').fadeOut('fast');
		});

		$('.gallery-wrap').on('click', function(){
			$('.gallery-slider.onready')
				.hide()
				.removeClass('onready');
			$('.gallery-slider' + $(this).data('gslider'))
				.fadeIn('fast');
			console.log($('.gallery-slider' + $(this).data('gslider')));
		});		
	}
	initGallerySlider();
	
	// footer map handling
	var map = $('#footer .map');
	map.find('.switcher').on('click', function(){
		map.find('.map-wrap').slideToggle('normal', function(){
			map.find('.map-wrap iframe').fadeToggle('fast');
		});
	});

}(jQuery, window));