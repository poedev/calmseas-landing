/**
 *  @name plugin
 *  @description description
 *  @version 1.0
 *  @options
 *    option
 *  @events
 *    event
 *  @methods
 *    init
 *    publicMethod
 *    destroy
 */
;(function($, window, undefined) {
  var desktopSizes = {
        bannerHeight: 220,
        footerHeight: 62,
        booknowButtonHeight: 58
      };
  var mobileSizes = {
        bannerHeight: 80,
        footerHeight: 58,
        booknowButtonHeight: 52
      };

  var resizeNav = function() {
    var win = $(window),
        mainNav = $('nav.main-nav'),
        minusHeightTotal = 0,
        mainSlider = $('#home-slider');
    if (win.width() > 480) {
      minusHeightTotal = desktopSizes.bannerHeight + desktopSizes.footerHeight + desktopSizes.booknowButtonHeight;
      mainNav.css({display: 'block'});
      mainNav.css({
        height: win.height() - minusHeightTotal
      });
    } else {
      mainNav.css({display: 'none'});
      minusHeightTotal = mobileSizes.bannerHeight + mobileSizes.footerHeight + mobileSizes.booknowButtonHeight;
      // nav with content
      mainNav.css({
        height: mainSlider.height() + 'px'
      });
    }
  };

  $(window).load(function(){
    $("nav.main-nav").mCustomScrollbar();
  });
  $(window).resize(function(){
    resizeNav();
    setTimeout(resizeNav, 500);
  });

  $(document).ready(function(){
    resizeNav();
  });

  // mobile swithc menu
  $('.menu-switch').on('click', function(){
    if ($(this).attr('class') === 'open menu-switch inline-svg') {
      $(this).attr('class', 'menu-switch inline-svg');
    } else {
      $(this).attr('class', 'open menu-switch inline-svg');
    }
    $('nav.main-nav').stop().slideToggle('normal', function(){
      $(this).mCustomScrollbar();
    });
  });

  var setActiveSubNav = function(subFor){
    var path = window.location.href,
        mobileNav = null;
    console.log(subFor);
    switch (subFor) {
      case 'fac': {
        mobileNav = $('#mobile-nav-content [data-id="fac"]');
        switch (true) {
          case (path.indexOf('meal') > -1):
            $('.sub-nav li[data-id="meal"]').addClass('active');
            mobileNav.find('[data-id="meal"]').addClass('active');
            break;
          case (path.indexOf('park') > -1):
            $('.sub-nav li[data-id="park"]').addClass('active');
            mobileNav.find('[data-id="park"]').addClass('active');
            break;
          case (path.indexOf('oto') > -1):
            $('.sub-nav li[data-id="oto"]').addClass('active');
            mobileNav.find('[data-id="oto"]').addClass('active');
            break;
          case (path.indexOf('beach') > -1):
            $('.sub-nav li[data-id="beach"]').addClass('active');
            mobileNav.find('[data-id="beach"]').addClass('active');
            break;
          case (path.indexOf('massage') > -1):
            $('.sub-nav li[data-id="mass"]').addClass('active');
            mobileNav.find('[data-id="mass"]').addClass('active');
            break;
          case (path.indexOf('airport') > -1):
            $('.sub-nav li[data-id="trans"]').addClass('active');
            mobileNav.find('[data-id="trans"]').addClass('active');
            break;
        }
      }break;
      case 'accom': {
        mobileNav = $('#mobile-nav-content [data-id="accom"]');
        console.log(mobileNav);
        switch(true){
          case (path.indexOf('standard') > -1):
            $('.sub-nav li[data-id="standard"]').addClass('active');
            mobileNav.find('[data-id="standard"]').addClass('active');
            break;
          case (path.indexOf('deluxe') > -1):
            $('.sub-nav li[data-id="deluxe"]').addClass('active');
            mobileNav.find('[data-id="deluxe"]').addClass('active');
            break;
          case (path.indexOf('suit') > -1):
            $('.sub-nav li[data-id="suit"]').addClass('active');
            mobileNav.find('[data-id="suit"]').addClass('active');
            break;
        }
      }break;
    }
  };

  var setActiveNav = function(){
    var path = window.location.href;
    switch (true) {
      case (path.indexOf('accommodation') > -1):
        $('.nav li[data-id="accom"] a').addClass('active');
        $('#mobile-nav-content li[data-id="accom"]')
          .addClass('active').end()
          .find('ul').addClass('active');
        setActiveSubNav('accom');
        $('.sub-nav.accom').addClass('active');
        break;
      case (path.indexOf('facility') > -1):
        $('.nav li[data-id="fac"] a').addClass('active');
        $('#mobile-nav-content li[data-id="fac"]')
          .addClass('active').end()
          .find('ul').addClass('active');
        $('.sub-nav.facili').addClass('active');
        setActiveSubNav('fac');
        break;
      case (path.indexOf('restaurant') > -1):
        $('.nav li[data-id="res"] a').addClass('active');
        $('#mobile-nav-content li[data-id="res"]')
          .addClass('active');
        break;
      case (path.indexOf('offer') > -1):
        $('.nav li[data-id="offer"] a').addClass('active');
        $('#mobile-nav-content li[data-id="offer"]')
          .addClass('active');   
        break;
      case (path.indexOf('gallery') > -1):break;
      case (path.indexOf('contact') > -1):break;
      default:
        $('.nav li[data-id="home"] a').addClass('active');
        $('#mobile-nav-content li[data-id="home"]')
          .addClass('active');   
    }
  };
  setActiveNav();

  // Language switching
  $('.lang-sel .selector a').on('click', function(e){
    e.preventDefault();
    var checkLanPath = '',
        path = window.location.pathname;
    switch ($(this).attr('title')) {
      case 'EN': checkLanPath = 'en';break;
      case 'VI': checkLanPath = 'vi';break;
      default: checkLanPath = 'en';
    }
    if (path.indexOf(checkLanPath) <= -1) {
      window.location.href = $('base').attr('href') +
                            ((checkLanPath === 'en') ? '' : checkLanPath) +
                            '/' + path.substr(path.lastIndexOf('/') + 1);
    }
  });
}(jQuery, window));
