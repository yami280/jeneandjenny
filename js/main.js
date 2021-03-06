(function($) {
    "use strict";
    $(document).ready(function() {

        /*--------------------------------------------------------------
          WEDZ - SUPERSLIDER INIT
        --------------------------------------------------------------*/
        $('#wedz-hero-slides').superslides({
            animation: 'fade',
            play: 7000,
            pagination: false,
            animation_speed: 3000
        });

        /*--------------------------------------------------------------
          WEDZ - SMOOTH SCROLL ON CLICK INIT
        --------------------------------------------------------------*/
        $(document).on("click", "#hero_over_link, .invite-button a", function(e) {
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top - 59;
            $('html, body').stop().animate({
                scrollTop: offsetTop,
            }, 500, 'easeInExpo');
            e.preventDefault();
        });

        /*--------------------------------------------------------------
          WEDZ - RESPONSIVE TOGGLE INIT
        --------------------------------------------------------------*/
        $(document).on("click", ".responsive-trigger", function(e) {
            $('.main-menu').slideToggle('slow', 'easeOutExpo');
        });


        $(window).load(function() {

            /*--------------------------------------------------------------
              WEDZ - TOOGLE MENU INIT
            --------------------------------------------------------------*/
            var stickyHeaderTop = $('#stick-menu').offset().top;
            $(window).scroll(function() {
                if ($(window).scrollTop() > stickyHeaderTop) {
                    $('#pixiefy-wedz-main-menu').addClass('fixed-menu');
                    $('.stick-logo').addClass('logoSticked');
                } else {
                    $('#pixiefy-wedz-main-menu').removeClass('fixed-menu');
                    $('.stick-logo').removeClass('logoSticked');
                }
            });

            /*--------------------------------------------------------------
              WEDZ - MENU INIT
            --------------------------------------------------------------*/
            var winW = $(window).width();
            var winH = $(window).height();
            $(window).resize(function() {
                if (winH < 302) {
                    $('.main-menu').addClass('overflowScroll');
                }
            });

            /*--------------------------------------------------------------
              WEDZ - PRELOADER INIT
            --------------------------------------------------------------*/
            $("#wedz-preloader").delay(500).fadeOut(600);

        });


        /*--------------------------------------------------------------
          WEDZ - LIGHBOX INIT
        --------------------------------------------------------------*/
        $('a').nivoLightbox({
            effect: 'fall'
        });
        var gal = $('.wedz-popup');
        gal.magnificPopup({
            type: 'inline',
            midClick: true
        });

        $(document).on("click", ".single-popup-close", function(e) {
            e.preventDefault();
            $.magnificPopup.close();
        });

        $('.popup-vimeo').magnificPopup({
            type: 'iframe'
        });


        /*--------------------------------------------------------------
          WEDZ - OWL SLIDER INIT
        --------------------------------------------------------------*/
        var owl = $("#gift-reg-slider");
        owl.owlCarousel({
            autoPlay: true,
            slideSpeed: 1000,
            items: 5,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 1],
            itemsMobile: [479, 1],
            navigation: false,
            pagination: false
        });

        $('.map-address-wed-party').click(function() {
					var url = "https://www.google.com/maps/dir/''/google+maps+casa+real/@37.6514559,-121.8772069,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x808fdd55857c2aab:0x2ffc930768c5ce0a!2m2!1d-121.8071669!2d37.6514766";
					window.open(url, "_blank");
				});

        /*--------------------------------------------------------------
          WEDZ - MENU ACTIVE INIT
        --------------------------------------------------------------*/
        $(function() {

            var lastId,
                topMenu = $(".main-menu"),
                topMenuHeight = topMenu.outerHeight() + 50,
                menuItems = topMenu.find("a"),
                scrollItems = menuItems.map(function() {
                    var item = $($(this).attr("href"));
                    if (item.length) {
                        return item;
                    }
                });

            menuItems.click(function(e) {
                var href = $(this).attr("href"),
                    offsetTop = href === "#" ? 0 : $(href).offset().top - 48;
                $('html, body').stop().animate({
                    scrollTop: offsetTop,
                }, 500, 'easeInExpo');
                e.preventDefault();

            });

            $(window).scroll(function() {
                var fromTop = $(this).scrollTop() + topMenuHeight;
                var cur = scrollItems.map(function() {
                    if ($(this).offset().top < fromTop)
                        return this;
                });
                cur = cur[cur.length - 1];
                var id = cur && cur.length ? cur[0].id : "";

                if (lastId !== id) {
                    lastId = id;
                    // Set/remove active class
                    menuItems
                        .parent().removeClass("active-menu")
                        .end().filter("[href=#" + id + "]").parent().addClass("active-menu");
                }
            });

        });


        /*--------------------------------------------------------------
          WEDZ - DYNAMIC COUNTER INIT
        --------------------------------------------------------------*/
        $('#wedz_countdown').countDown({
            targetDate: {
                'day': 26,
                'month': 3,
                'year': 2017,
                'hour': 16,
                'min': 30,
                'sec': 0
            },
            omitWeeks: true
        });




        /*--------------------------------------------------------------
          WEDZ - GOOGLEMAP INIT
        --------------------------------------------------------------*/
        function init() {
            // Basic options for a simple Google Map
            // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
            // How to get LatLng for more info visit : http://www.latlong.net/convert-address-to-lat-long.html
            var myLatLng = new google.maps.LatLng(37.654462, -121.811577);

            var mapOptions = {
                zoom: 15,
                center: myLatLng,
                disableDefaultUI: true,
                scrollwheel: false,
                navigationControl: true,
                mapTypeControl: false,
                scaleControl: false,
                draggable: true,

                // How you would like to style the map.
                // This is where you would paste any style found on Snazzy Maps.
                styles: [{
                    featureType: 'water',
                    stylers: [{
                        color: '#DEABAA'
                    }, {
                        visibility: 'on'
                    }]
                }, {
                    featureType: 'landscape',
                    stylers: [{
                        color: '#f2f2f2'
                    }]
                }, {
                    featureType: 'road',
                    stylers: [{
                        saturation: -100
                    }, {
                        lightness: 45
                    }]
                }, {
                    featureType: 'road.highway',
                    stylers: [{
                        visibility: 'simplified'
                    }]
                }, {
                    featureType: 'road.arterial',
                    elementType: 'labels.icon',
                    stylers: [{
                        visibility: 'off'
                    }]
                }, {
                    featureType: 'administrative',
                    elementType: 'labels.text.fill',
                    stylers: [{
                        color: '#444444'
                    }]
                }, {
                    featureType: 'transit',
                    stylers: [{
                        visibility: 'off'
                    }]
                }, {
                    featureType: 'poi',
                    stylers: [{
                        visibility: 'off'
                    }]
                }]
            }

            // Get the HTML DOM element that will contain your map
            // We are using a div with id="map" seen below in the <body>
            var mapElement = document.getElementById('map-canvas');

            // Create the Google Map using our element and options defined above
            var map = new google.maps.Map(mapElement, mapOptions);

            // Let's also add a marker while we're at it
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(37.654462, -121.811577),
                map: map,
                icon: 'images/map-marker.png',
            });

        }
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);


    });
})(jQuery);
