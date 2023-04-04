(function ($) {
  'use strict';

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

  // Preloader js
  $(window).on('load', function () {
    $('.preloader').fadeOut(100);
    adaptHeight();
    if ($('#top-banner').length) {
      $('.navigation').addClass('nav-bg');
      $('.hero-section').addClass('hs-banner');
      $('.page-title-section').addClass('pts-banner');
    } else {
      $('.navigation').removeClass('nav-bg');
      $('.hero-section').removeClass('hs-banner');
      $('.page-title-section').removeClass('pts-banner');
    }
  });

  // Sticky Menu
  $(window).scroll(adaptHeight);

  // Background-media
  $('[data-background]').each(function () {
    $(this).css({
      'background-image': 'url(' + $(this).data('background') + ')'
    });
  });

  //Hero Slider
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
      selector: '.vb-video'
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
          layout: 'sameWidth'
        }
      );
    } 
    //Active changer
    $('.filter-controls li').on('click', function () {
      $('.filter-controls li').removeClass('active');
      $(this).addClass('active');
    });
  });

  //  Count Up
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

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }, {passive: true});
}
