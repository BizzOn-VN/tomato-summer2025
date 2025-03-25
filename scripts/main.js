'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
    
});
 
    $('.banner .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:false,
        autoplayTimeout: 3000,
        autoplayHoverPause:false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.section-4 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause:false,
        dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }

    })

    $('.section-5 .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause:false,
        responsive:{
                0:{
                    items:2
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
    })

    $('.section-7 .owl-carousel').owlCarousel({
        loop:true,
    margin:10,
    nav:false,
    autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause:false,
        responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:2.5
                }
            }
    })

    $('.section-8 .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    $('.section-8 .owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        autoplay:true,
        autoplayTimeout: 3000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })


$('.ui.dropdown')
  .dropdown()
;

// $("#md-popup-2").fancybox().trigger('click');

$('.toggle-menu').click(function(){
    $('.menu-mb').toggleClass('active');
});


$(".md-section-1").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-1").offset().top - 60
    }, 1000);
});

$(".md-section-2").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-2").offset().top - 60
    }, 1000);
});

$(".md-section-4").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-2").offset().top - 60
    }, 1000);
});

$(".md-section-3").click(function() {
    $('html, body').animate({
        scrollTop: $("#section-3").offset().top - 60
    }, 1000);
});

$(window).scroll(function(){
    if ($(window).scrollTop() >= 90) {
        $('.page-header .main-menu').addClass('scroll-top');
    }
    else {
        $('.page-header .main-menu').removeClass('scroll-top');
    }                 
});

new WOW().init();