/*-----------------------------------------------------------------------------------

    Theme Name: Crypto - Bitcoin & Cryptocurrency HTML Template
    Description: Bitcoin & Cryptocurrency HTML Template
    Author: Chitrakoot Web
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. scrollIt
        03. Sticky Header
        04. Scroll To Top
        05. Navbar for Onepage
        06. Sidemenu toggleClass
        07. Parallax
        08. Video
        09. Resize function
        10. FullScreenHeight function
        11. ScreenFixedHeight function
        12. Copy to clipboard
        13. FullScreenHeight and screenHeight with resize function
        14. Charts
        15. Sliders
        16. Tabs
        17. CountUp
        18. Countdown
        19. Current Year
        20. Portfolio
            
    ---------------------------------- */    

(function($) {

    "use strict";

    var $window = $(window);

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });

    
        /*------------------------------------
            02. scrollIt
        --------------------------------------*/

        $.scrollIt({
          upKey: 38,                // key code to navigate to the next section
          downKey: 40,              // key code to navigate to the previous section
          easing: 'swing',          // the easing function for animation
          scrollTime: 600,          // how long (in ms) the animation takes
          activeClass: 'active',    // class given to the active nav element
          onPageChange: null,       // function(pageIndex) that is called when page is changed
          topOffset: -70            // offste (in px) for fixed top navigation
        });

        /*------------------------------------
            03. Sticky Header
        --------------------------------------*/

        $window.on('scroll', function() {
            var scroll = $window.scrollTop();
            var logochange = $(".navbar-brand img");
            var logodefault = $(".navbar-brand.logodefault img");
            if (scroll <= 50) {
                $("header").removeClass("scrollHeader").addClass("fixedHeader");
                logochange.attr('src', 'img/logos/logo-inner.png');
                logodefault.attr('src', 'img/logos/logo.png');
            } 
            else {
                $("header").removeClass("fixedHeader").addClass("scrollHeader");
                logochange.attr('src', 'img/logos/logo.png');
                logodefault.attr('src', 'img/logos/logo.png');
            }
        });

        /*------------------------------------
            04. Scroll To Top
        --------------------------------------*/

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
            05. Navbar for Onepage
        --------------------------------------*/

        $window.on("scroll",function () {

            var bodyScroll = $window.scrollTop(),
                navbar = $(".onepage-nav.navbar");

            if(bodyScroll > 100){
                navbar.addClass("nav-scroll");
            }else{
                navbar.removeClass("nav-scroll");
            }
        });

        var windowsize = $window.width();
            if (windowsize <= 991) {
            $('.onepage-nav .navbar-nav .nav-link').on("click", function(){
                $('.onepage-nav .navbar-nav').removeClass('open').hide();
                $('.onepage-nav .navbar-toggler').removeClass('menu-opened');
            });
        }

        /*------------------------------------
            06. Sidemenu toggleClass
        --------------------------------------*/

        if ($("#sidebar_toggle").length) {
           $("body").addClass("sidebar-menu");
           $("#sidebar_toggle").on("click", function () {
              $(".sidebar-menu").toggleClass("active");
              $(".side-menu").addClass("side-menu-active"), $("#close_sidebar").fadeIn(700)
           }), $("#close_sidebar").on("click", function () {
              $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".sidebar-menu").removeClass("active")
           }), $("#btn_sidebar_colse").on("click", function () {
              $(".side-menu").removeClass("side-menu-active"), $("#close_sidebar").fadeOut(200), $(".sidebar-menu").removeClass("active")
           });
        }

        /*------------------------------------
            07. Parallax
        --------------------------------------*/

        // sections background image from data background
        var pageSection = $(".parallax,.bg-img");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });
        
        /*------------------------------------
            08. Video
        --------------------------------------*/

        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });

        $('.source-modal').magnificPopup({
            type: 'inline',
            mainClass: 'mfp-fade',
            removalDelay: 160
        });
        
        /*------------------------------------
            09. Resize function
        --------------------------------------*/

        $window.resize(function(event) {
            setTimeout(function() {
                SetResizeContent();
            }, 500);
            event.preventDefault();
        });

        /*------------------------------------
            10. FullScreenHeight function
        --------------------------------------*/

        function fullScreenHeight() {
            var element = $(".full-screen");
            var $minheight = $window.height();
            element.css('min-height', $minheight);
        }

        /*------------------------------------
            11. ScreenFixedHeight function
        --------------------------------------*/

        function ScreenFixedHeight() {
            var $headerHeight = $("header").height();
            var element = $(".screen-height");
            var $screenheight = $window.height() - $headerHeight;
            element.css('height', $screenheight);
        }

        /*------------------------------------
            12. Copy to clipboard
        --------------------------------------*/

        if ($(".copy-clipboard").length !== 0) {
            new ClipboardJS('.copy-clipboard');
            $('.copy-clipboard').on('click', function() {
                var $this = $(this);
                var originalText = $this.text();
                $this.text('Copied');
                setTimeout(function() {
                    $this.text('Copy')
                    }, 2000);
            });
        };

        /*------------------------------------
            13. FullScreenHeight and screenHeight with resize function
        --------------------------------------*/        

        function SetResizeContent() {
            fullScreenHeight();
            ScreenFixedHeight();
        }

        SetResizeContent();

        // === when document ready === //
        $(document).ready(function(){

        /*------------------------------------
            14. Charts
        --------------------------------------*/        

          // pie chart 1
          if ($("#myPieChart").length !== 0) {
            var ctx = document.getElementById('myPieChart').getContext('2d');
            var myPieChart = new Chart(ctx,{
                type: 'pie',
                data: {
                    labels: ["Bounce Rate", "Funds", "Marketing", "ICO", "Token Sales"],
                    datasets: [{
                        data: [14, 24, 30, 50, 20],
                        backgroundColor: ['rgba(255, 185, 0, 1)', 'rgba(1, 72, 247, 1)', 'rgba(4, 35, 103, 1)', 'rgba(251, 55, 55, 1)' , 'rgba(255, 126, 68, 1)'],
                    }],
                },
                options: {
                    legend: {
                        labels: {
                            fontColor: 'black' 
                        }
                    }
                }
            });
        }    

        // pie chart 2
          if ($("#myPieChart2").length !== 0) {
            var ctx = document.getElementById('myPieChart2').getContext('2d');
            var myPieChart = new Chart(ctx,{
                type: 'pie',
                data: {
                    labels: ["Community", "Reserved Funds", "Advisor Team", "Sold Globaly"],
                    datasets: [{
                        data: [30, 24, 30, 50],
                        backgroundColor: ['rgba(249, 183, 7, 1)', 'rgba(108, 208, 134, 1)', 'rgba(57, 133, 189, 1)', 'rgba(251, 55, 55, 1)'],
                        borderColor: ['rgba(249, 183, 7, 1)', 'rgba(108, 208, 134, 1)', 'rgba(57, 133, 189, 1)', 'rgba(251, 55, 55, 1)'],
                    }],
                },
                options: {
                    legend: {
                        labels: {
                            fontColor: 'white' 
                        }
                    }
                }
            });
        }   

        // pie chart 3
          if ($("#myPieChart3").length !== 0) {
            var ctx = document.getElementById('myPieChart3').getContext('2d');
            var myPieChart = new Chart(ctx,{
                type: 'pie',
                data: {
                    labels: ["Projects", "Core Phase", "Partners", "Bonus & Resurve", "Marketing"],
                    datasets: [{
                        data: [20, 24, 10, 25, 40],
                        backgroundColor: ['rgba(249, 183, 7, 1)', 'rgba(108, 208, 134, 1)', 'rgba(57, 133, 189, 1)', 'rgba(251, 55, 55, 1)', 'rgba(168, 179, 197, 1)'],
                        borderColor: ['rgba(249, 183, 7, 1)', 'rgba(108, 208, 134, 1)', 'rgba(57, 133, 189, 1)', 'rgba(251, 55, 55, 1)', 'rgba(168, 179, 197, 1)'],
                    }],
                },
                options: {
                    legend: {
                        labels: {
                            fontColor: 'white' 
                        }
                    }
                }
            });
        }   

        // pie chart 4
          if ($("#myPieChart4").length !== 0) {
            var ctx = document.getElementById('myPieChart4').getContext('2d');
            var myPieChart = new Chart(ctx,{
                type: 'pie',
                data: {
                    labels: ["Community", "Reserved Funds", "Advisor Team", "Sold Globaly"],
                    datasets: [{
                        data: [30, 24, 30, 50],
                        backgroundColor: ['rgba(249, 183, 7, 1)', 'rgba(108, 208, 134, 1)', 'rgba(57, 133, 189, 1)', 'rgba(251, 55, 55, 1)'],
                        borderColor: ['rgba(249, 183, 7, 1)', 'rgba(108, 208, 134, 1)', 'rgba(57, 133, 189, 1)', 'rgba(251, 55, 55, 1)'],
                    }],
                },
                options: {
                    legend: {
                        labels: {
                            fontColor: 'black' 
                        }
                    }
                }
            });
        }   

        // pie chart 5
          if ($("#myPieChart5").length !== 0) {
            var ctx = document.getElementById('myPieChart5').getContext('2d');
            var myPieChart = new Chart(ctx,{
                type: 'pie',
                data: {
                    labels: ["Project", "Phases", "Partner", "Bonus", "Marketing"],
                    datasets: [{
                        data: [20, 24, 10, 25, 40],
                        backgroundColor: ['rgba(249, 183, 7, 1)', 'rgba(108, 208, 134, 1)', 'rgba(57, 133, 189, 1)', 'rgba(251, 55, 55, 1)', 'rgba(168, 179, 197, 1)'],
                        borderColor: ['rgba(249, 183, 7, 1)', 'rgba(108, 208, 134, 1)', 'rgba(57, 133, 189, 1)', 'rgba(251, 55, 55, 1)', 'rgba(168, 179, 197, 1)'],
                    }],
                },
                options: {
                    legend: {
                        labels: {
                            fontColor: 'black' 
                        }
                    }
                }
            });
        }      

        if ($("#chBar").length !== 0) {
              var chBar = document.getElementById("chBar");
              var chartData = {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    data: [350, 365, 425, 475, 525, 575, 625, 675, 725, 775, 825, 875, ],
                    backgroundColor: ['rgba(28, 51, 65,0.8)', 'rgba(0, 135, 115,0.8)', 'rgba(107, 185, 131,0.8)', 'rgba(242, 201, 117,0.8)', 'rgba(237, 99, 83,0.8)', 'rgba(242, 190, 84,0.8)', 'rgba(240, 217, 207,0.8)', 'rgba(135, 174, 180,0.8)', 'rgba(21, 62, 92,0.8)', 'rgba(237, 85, 96,0.8)', 'rgba(201, 223, 241,0.8)', 'rgba(240, 217, 207,0.9)'],
                }, ]
              };
              if (chBar) {
                new Chart(chBar, {
                    type: 'bar',
                    data: chartData,
                    options: {
                        scales: {
                            xAxes: [{
                                barPercentage: 0.5,
                                categoryPercentage: 1
                            }],
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false
                                }
                            }]
                        },
                        legend: {
                            display: false
                        }
                    }
                });
              }
        }

        /*------------------------------------
            15. Sliders
        --------------------------------------*/

        // roadmap-carousel
        $('.roadmap-carousel').owlCarousel({
            loop: false,
            pagination: true,
            autoplay: true,
            smartSpeed: 1500,
            paginationNumbers: false,
            nav:false,
            center:false,
            margin:20,
            dots: false,
            responsive:{
              0:{
                items:1
              },
              480: {
                items:2
              },
              768: {
                items:2
              },
              992:{
                items:3
              },
              1200:{
                items:4
              }
            }
          });

        // testimonial-carousel
        $('.testmonial-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 1500,
            nav: false,
            dots: true,
            center:false,
            margin: 25,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                768: {
                    items: 1,
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 2
                },
            }
        });

        // portfolio-details carousel
        $('.portfolio-details').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            smartSpeed: 1500,            
            nav: false,
            dots: true,
            center: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    dots: false
                },
                576: {
                    items: 2,
                    margin: 15
                },
                768: {
                    items: 2,
                    margin: 15
                },
                992: {
                    items: 3
                }
            }
        });

        // client carousel
        $('.client-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            items: 1,
            margin: 15
        });

        // client2-carousel
        $('.client2-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: true,
            autoplayTimeout: 5000,
            smartSpeed: 1500,
            nav: false,
            dots: false,
            center:false,
            margin: 0,
            responsive: {
                0: {
                    items: 1
                },
                481: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200:{
                    items: 5
                }
            }
        });

        // banner2
        $('.banner2 .owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            nav: true,
            navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],            
            margin: 0,
            autoplay: true,
            smartSpeed:800,
            mouseDrag:false,
            thumbs: false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            responsive: {
               0: {
                    nav: false,
                    dots: true
                },
                991: {
                    nav: false,
                    dots: true
                },
                1200: {
                    nav: true,
                    dots: false
                }
            }            
        });
        
        // default owlCarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            autoplay:true,
            smartSpeed: 1500
        });   

        // slider text animation
        var owl = $('.slider-fade');
        owl.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;     // Position of the current item
            $('h3').removeClass('animated fadeInDown');
            $('h1').removeClass('animated fadeInUp');
            $('p').removeClass('animated fadeInUp');
            $('.butn').removeClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInDown');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
            $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated fadeInUp');
        });

        /*------------------------------------
            16. Tabs
        --------------------------------------*/

        //Horizontal Tab
        if ($(".horizontaltab").length !== 0) {
            $('.horizontaltab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }

        /*------------------------------------
            17. CountUp
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });

        /*------------------------------------
            18. Countdown
        --------------------------------------*/

        // CountDown for coming soon page
        $(".countdown").countdown({
            date: "01 Apr 2026 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
            format: "on"
        });

        /*------------------------------------
            19. Current Year
        --------------------------------------*/

        $('.current-year').text(new Date().getFullYear());
      
    });

    // === when window loading === //
    $window.on("load", function() {

        /*------------------------------------
            20. Portfolio
        --------------------------------------*/

        $('.portfolio-gallery').lightGallery();

        $('.portfolio-link').on('click', (e) => {
            e.stopPropagation();
        });
    
    });

})(jQuery);