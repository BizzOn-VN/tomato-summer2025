jQuery(document).ready(function ($) {
 
  var App = App || {};

  //---MAIN----
  $(function () {
      App.Site.getslide();

  });

  //--All site
    App.Site = function(){

        var getslide = function(){
            $('.banner .owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                autoplay:true,
                autoplayTimeout: 3000,
                autoplayHoverPause:false,
                nav:false,
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
        }

        
        return{
            getslide:getslide,

        };

    }(); 

  //--End All site


    
   
});    


$('.ui.dropdown')
  .dropdown()
;

// $("#md-popup-2").fancybox().trigger('click');

$('.toggle-menu').click(function(){
    $('.menu-mb').toggleClass('active');
})