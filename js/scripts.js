/*

    Template Name : Walled Mahmoud Portfolio 
    Author : Walled Mahmoud
    Website :https://walledmahmoud.github.io/WalledMahmoud/	
	
*/


/*
   
   Table Of Content
   
   1. Preloader
   2. Smooth Scroll
   3. Scroll Naviagation Background Change with Sticky Navigation
   4. Mobile Navigation Hide or Collapse on Click
   5. Scroll To Top
   6. Typed.js
   7. Parallax Background
   8. Portfolio Filtering
   9. Magnific Popup
  10. Quotes Carousel/Slider
  11. Statistics Counter
  12. niceScroll
 

*/


(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        
       /* Preloader */
        $(window).on('load', function() {
          $('body').addClass('loaded');
        });
		
        
        // My Scroll
        $("html").niceScroll({ 
            cursorcolor: '#E74C3C',
            cursorwidth: '9px'
        });

       /* Smooth Scroll */
        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
		


       
       /* Scroll Naviagation Background Change with Sticky Navigation */
		 
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });
		
		
		
		
       /* Mobile Navigation Hide or Collapse on Click */
		
        $(document).on('click', '.navbar-collapse.in', function (e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        
		 });
		 
		
		
		
        /* Scroll To Top */
		
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });
	
	
	    $('.scroll-to-top').click(function(){
		  $('html, body').animate({scrollTop : 0},800);
		  return false;
	    });
		
		
		
		
        /* Typed.js */
		
        $(window).load(function(){
        $(".typing").typed({

            strings: ["I am An Engineer.", "I am A WordPress Developer.", "I am A Full-Stack Developer.", "I am A Freelancer."],    /* You can change the home section typing text from                                                                             here and do not use "&" use "and" */
            typeSpeed: 70,
            loop: true
          });
         });
        
		 
        /* Parallax Background */

        $(window).stellar({
            responsive: true,
            horizontalScrolling: false,
            hideDistantElements: false,
            horizontalOffset: 0,
            verticalOffset: 0,
        });

        
		
		
        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();

       
        /* Magnific Popup */

        $('.portfolio-popup').magnificPopup({
            type: 'image',
			
            gallery: { 
                enabled: true
            },
			zoom: { 
                
                enabled: true,
			    duration: 500	
          },
		  
         image:{
               markup: '<div class="mfp-figure portfolio-pop-up">'+
               '<div class="mfp-close"></div>'+
               '<div class="mfp-img"></div>'+
               '<div class="mfp-bottom-bar portfolio_title">'+
               '<div class="mfp-title"></div>'+
               '<div class="mfp-counter"></div>'+
               '</div>'+
               '</div>',

               titleSrc:function(item){
                return item.el.attr('title');
              }
            }
          });

	   		 
        /* Quotes Carousel/Slider */

        $(".Quotes-carousel-list").owlCarousel({
            items: 1,
            autoPlay: true,
            stopOnHover: false,
            navigation: true,
            navigationText: ["<i class='fa fa-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle : "backSlide"
        });
		
		
		
        /* Statistics Counter */
		
        $('.statistics').appear(function() {
           var counter = $(this).find('.statistics-count');
           var toCount = counter.data('count');
      
           $(counter).countTo({
           from: 0,
           to: toCount,
           speed: 5000,
           refreshInterval: 50
           })
           });
		   
              
        });

        // If Anyone Need My Cv Or Not
        /*$(".opinion .yes").click(function () {
            $(this).hide();
            $(".opinion .no").hide();
            $(".download").removeClass("invisible");
            sr.reveal('.sr-button', {
                duration: -200,
                delay:-200
            });
            $(".download a").fadeIn();
            $(".call-to-action h2").text("Thanks For Your Attention")
        });
        
        $(".opinion .no").click(function () {
        
            $(".bg-dark").fadeOut();
        });
    */

})(jQuery);