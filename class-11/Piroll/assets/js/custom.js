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
        
        /*
        $('.nav li a').on('click', function(e){
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });
        
        $(document).on('click','.navbar-collapse.in',function(e) {
            if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
                $(this).collapse('hide');
            }
        });*/		
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

        //
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

        //
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
    });
})(jQuery);

    
      
    
    