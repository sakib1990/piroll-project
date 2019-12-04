(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

        // START MENU JS
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.navbar-light').addClass('menu-shrink');
            } else {
                $('.navbar-light').removeClass('menu-shrink');
            }
        });			
        
        $('.navbar-nav li a').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 500);
            e.preventDefault();
        });
  
        $(document).on('click','.navbar-collapse.show',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });	
        // END MENU JS	


        // Home Slider
        $('.home-slider').owlCarousel({
            items:1,
            loop:true,
            margin:0,
            dots: false,
            nav:true,
        
            animateIn: 'zoomIn',
            navText: [
                "<i class='icofont-thin-double-left'></i>",
                "<i class='icofont-thin-double-right'></i>"
            ],
        })

        // Popup gallery
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            }
        });

        // Popup youtube
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
    
            fixedContentPos: false
        });

        // Home Slider
        $('.testimonials-slider').owlCarousel({
            items:1,
            loop:true,
            margin:0,
            dots: true,
            nav:false,
            animateIn: 'zoomIn',
        })

        // Logo Slider
        $('.logo-slider').owlCarousel({
            loop:true,
            dots: false,
            nav:false,
            responsive : {
                0 : {
                    items:1,
                },
                576 : {
                    items:3,
                },
                768 : {
                    items:4,
                },
                1000 : {
                    items:5,
                }
            }
        })

        // WOW JS
        new WOW().init();

        // Back top to button
        $('body').append('<div id="toTop" class="bt-top-btn"><i class="icofont-swoosh-up"></i></div>');
        $(window).scroll(function () {
            if ($(this).scrollTop() != 0) {
                $('#toTop').fadeIn();
            } else {
                $('#toTop').fadeOut();
            }
        }); 
        $('#toTop').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    });
})(jQuery);

    
      
    
    