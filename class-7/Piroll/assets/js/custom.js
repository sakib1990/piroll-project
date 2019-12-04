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

 
    });
})(jQuery);

    
      
    
    