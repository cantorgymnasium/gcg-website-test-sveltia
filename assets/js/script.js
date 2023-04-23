(function ($) {
  'use strict';

  // adapt header to height
  function adaptHeight () {
    var height = $('.top-header').innerHeight();
    if ($('header').offset().top > 10) {
      $('.top-header').addClass('hide');
      $('.navigation').addClass('nav-bg');
      $('.navigation').css('margin-top','-'+height+'px');
    } else {
      $('.top-header').removeClass('hide');
      if ( !$('#top-banner').length) {
        $('.navigation').removeClass('nav-bg');
      }
      $('.navigation').css('margin-top','-'+0+'px');
    }
  }

  // load scripts
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
    adaptHeight();
    if ($('#top-banner').length) {
      $('.navigation').addClass('nav-bg');
      $('.hero-section').addClass('hs-banner');
      $('.page-title-section').addClass('pts-banner');
    } else {
      $('.hero-section').removeClass('hs-banner');
      $('.page-title-section').removeClass('pts-banner');
    }
  });

  // sticky menu
  $(window).scroll(adaptHeight);

  // background image
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  // hero slider
  $('.hero-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'><i class=\'mdi mdi-chevron-left arrowIcon\'></i></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'><i class=\'mdi mdi-chevron-right arrowIcon\'></i></button>',
    dots: true
  });

  // venobox popup
  $(document).ready(function () {
    new VenoBox({
      selector: '.vb-video',
      spinner: 'grid'
    });
    new VenoBox({
      selector: '.vb-gallery',
      numeration: true,
      infinigall: true,
      share: true,
      shareStyle: 'block',
      spinner: 'grid'
    });
  });

  // filter
  $(document).ready(function () {
    var containerEl = document.querySelector('.filtr-container');
    if (containerEl) {
      new Filterizr(
        '.filtr-container',
        {
          layout: 'sameWidth',
          gutterPixels: 10
        }
      );
    } 
    // active changer
    $('.filter-controls li').on('click', function () {
      $('.filter-controls li').removeClass('active');
      $(this).addClass('active');
    });
  });

  // count up
  function counter() {
    var oTop;
    if ($('.count').length !== 0) {
      oTop = $('.count').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 1000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });
  
})(jQuery);
