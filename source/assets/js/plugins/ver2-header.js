;(function($, window){
  var win = $(window);

  // Calculating the left striangle and right striangle
  var setHeaderTopTriangle = function(){
    var winW = win.outerWidth(),
        header = $('#header'),
        logo = $('#header').find('.logo'),
        logoW = logo.outerWidth(),
        logoLeft = logo.offset().left,
        leftStrian = header.find('.left-strian'),
        leftCenterLogo = (logoLeft + logoW/2),
        rightStrian = header.find('.right-strian');


    leftStrian
      .css({
        'border-width': '0 ' + leftCenterLogo + 'px 50px 0'
      });
    rightStrian
      .css({
        'border-width': '0 0 50px ' + (winW - leftCenterLogo + 1) + 'px'
      });

  };

  var setMainbannerStrian = function(){
    var winW = win.outerWidth(),
        banner = $('.main-banner'),
        leftStrian = banner.find('.left-strian'),
        rightStrian = banner.find('.right-strian'),
        lPercent = 18,
        lWidth = 0,
        striangleH = 100;

    if (winW < 768) {
      lPercent = 38;
    }

    lWidth = lPercent * winW / 100;

    leftStrian
      .css({
        'border-width': striangleH + 'px ' + lWidth + 'px 0 0',
        'margin-top': - striangleH + 'px'
      });
    rightStrian
      .css({
        'border-width': striangleH + 'px 0 0 ' + (winW - lWidth + 1) + 'px',
        'margin-top': - striangleH + 'px'
      });
  };

  var mobileNavHandle = function(){
    $('.mobile-nav .switch-btn').on('click', function(){
      $('.mobile-nav-wrap').toggleClass('active');
    });
    $('.body-container, footer').on('click', function(){
      $('.mobile-nav-wrap').removeClass('active');
    });
  };

  var initHeader = function(){
    setHeaderTopTriangle();
    setMainbannerStrian();
    mobileNavHandle();

    win.on('resize.header', function(){
      setHeaderTopTriangle();
      setMainbannerStrian();
    });
  };

  // init css
  $('.nav-wrap .nav li').css({'padding-left': '1px'});
  $('.nav-wrap .nav li').animate({'padding-right': '20px'}, 700);


  initHeader();
}(jQuery, window));
