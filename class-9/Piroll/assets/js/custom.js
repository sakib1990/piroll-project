(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

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



    });
})(jQuery);

    
      
    
    