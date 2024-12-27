(($) => {
  "use strict";

  // adapt header to height
  function adaptHeight() {
    var height = $(".top-header").innerHeight();
    if ($("header").offset().top > 10) {
      $(".top-header").addClass("hide");
      $(".navigation").addClass("nav-bg");
      $(".navigation").css("margin-top", "-" + height + "px");
    } else {
      $(".top-header").removeClass("hide");
      if (!$("#top-banner").length) {
        $(".navigation").removeClass("nav-bg");
      }
      $(".navigation").css("margin-top", "-" + 0 + "px");
    }
  }

  // load scripts
  $(window).on("load", function () {
    $(".preloader").fadeOut(100);
    adaptHeight();
    if ($("#top-banner").length) {
      $(".navigation").addClass("nav-bg");
      $(".hero-section").addClass("hs-banner");
      $(".page-title-section").addClass("pts-banner");
    } else {
      $(".hero-section").removeClass("hs-banner");
      $(".page-title-section").removeClass("pts-banner");
    }
  });

  // sticky menu
  $(window).scroll(adaptHeight);

  // hero slider
  $(".hero-slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: true,
    infinite: true,
    arrows: true,
    prevArrow:
      '<button type=\'button\' class=\'prevArrow\'><svg xmlns="http://www.w3.org/2000/svg" id="mdi-chevron-left" class="arrowIcon" viewBox="0 0 24 24" height="1em" width="1em" fill="currentColor"><path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" /></svg></button>',
    nextArrow:
      '<button type=\'button\' class=\'nextArrow\'><svg xmlns="http://www.w3.org/2000/svg" id="mdi-chevron-left" class="arrowIcon" viewBox="0 0 24 24" height="1em" width="1em" fill="currentColor"><path xmlns="http://www.w3.org/2000/svg" d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg></button>',
    dots: true,
  });

  // venobox popup
  $(document).ready(function () {
    // @ts-ignore
    new VenoBox({
      selector: ".vb-video",
      spinner: "grid",
    });
    // @ts-ignore
    new VenoBox({
      selector: ".vb-gallery",
      numeration: true,
      infinigall: true,
      share: true,
      shareStyle: "block",
      spinner: "grid",
      fitView: true,
      navTouch: true,
    });
  });

  // video-js
  $(document).ready(function () {
    document.querySelectorAll("video.video-js").forEach((video) => {
      // @ts-ignore
      videojs(video, {});
    });
  });

  // filter
  $(document).ready(function () {
    if ($(".filter-container").length != 0) {
      // @ts-ignore
      const shuffleInstance = new Shuffle($(".filter-container"), {
        itemSelector: ".filter-item",
        sizer: ".filter-sizer",
        delimiter: ",",
        isCentered: true,
      });
      $(".filter-controls li").on("click", function () {
        $(".filter-controls li").removeClass("active");
        $(this).addClass("active");
        shuffleInstance.filter($(this).data("filter"));
      });
    }
  });

  // counter
  $(window).on("scroll", function () {
    var oTop = 0;
    if ($(".count").length !== 0) {
      oTop = $(".count").offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      $(".count").each(function () {
        var $this = $(this),
          countTo = $this.attr("data-count");
        $({ countNum: $this.text() }).animate(
          { countNum: countTo },
          {
            duration: 1000,
            easing: "swing",
            step: function () {
              return $this.text(Math.floor(this.countNum));
            },
            complete: function () {
              return $this.text(this.countNum);
            },
          }
        );
      });
    }
  });

  $(window).on("DOMContentLoaded", function () {
    // @ts-ignore
    new PagefindUI({
      element: "#search",
      translations: {
        placeholder: "Suchen...",
        zero_results: "Leider konnten keine Ergebnisse zu [SEARCH_TERM] gefunden werden",
        clear_search: "Löschen",
      },
    });

    $("#pagefind-search").on("shown.bs.modal", function () {
      $(".pagefind-ui__search-input").focus();
    });
  });

  // enable matomo analytics
  // @ts-ignore
  var _paq = (window._paq = window._paq || []);
  _paq.push(["setDoNotTrack", true]);
  _paq.push(["disableCookies"]);
  _paq.push(["trackPageView"]);
  _paq.push(["enableLinkTracking"]);
  (function () {
    var u = "https://analytics.cantorgymnasium.de/";
    _paq.push(["setTrackerUrl", u + "matomo.php"]);
    _paq.push(["setSiteId", "1"]);
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0];
    g.async = true;
    g.src = u + "matomo.js";
    s.parentNode.insertBefore(g, s);
  })();

  // @ts-ignore
  new LazyLoad();
  // @ts-ignore
})(jQuery);
