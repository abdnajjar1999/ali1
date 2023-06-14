(function($) {

    "use strict";

    var $window = $(window);

    // scroll to top
    $window.on('scroll', function() {
        if ($(this).scrollTop() > 500) {
            $(".scroll-to-top").fadeIn(400);

        } else {
            $(".scroll-to-top").fadeOut(400);
        }
    });

    $(".scroll-to-top").on('click', function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });

    /*------------------------------------
        06. Wow animation - on scroll
    --------------------------------------*/
    
    var wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: false, // default
        live: true // default
    })
    wow.init();

    /*------------------------------------
        04. Parallax
    --------------------------------------*/

    // sections background image from data background
    var pageSection = $(".parallax,.bg-img");
    pageSection.each(function(indx) {

        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });


    $(document).ready(function() {

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });

        // demos-category carousel
        $(".demos-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: false,
            smartSpeed: 1200,
            autoplayTimeout: 2800,
            center: true,
            nav: true,
            dots: false,
            navText: ["<span class='fa-solid fa-arrow-left-long'></span>", "<span class='fa-solid fa-arrow-right-long'></span>"],
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    nav: false
                },
                481: {
                    items: 2,
                    margin: 5,
                    nav: false
                },
                768: {
                    items: 2,
                    margin: 20
                },
                992: {
                    items: 3,
                    margin: 30,
                },
                1200: {
                    items: 2,
                    margin: 50,
                }
            }
        });

        $('.current-year').text(new Date().getFullYear());

    });

})(jQuery);