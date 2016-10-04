(function($) {
"use strict";
	$(document).ready(function(){

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
$( document ).on( "click", "#hero_over_link, .invite-button a", function(e) {
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-59;
  $('html, body').stop().animate({
      scrollTop: offsetTop,
  }, 500, 'easeInExpo');
  e.preventDefault();
});

/*--------------------------------------------------------------
  WEDZ - RESPONSIVE TOGGLE INIT
--------------------------------------------------------------*/
$( document ).on( "click", ".responsive-trigger", function(e) {
  $('.main-menu').slideToggle('slow', 'easeOutExpo');
});


$( window ).load(function() {

/*--------------------------------------------------------------
  WEDZ - TOOGLE MENU INIT
--------------------------------------------------------------*/
var stickyHeaderTop = $('#stick-menu').offset().top;
$(window).scroll(function(){
  if( $(window).scrollTop() > stickyHeaderTop ) {
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
$(window).resize(function(){
  if(winH < 302) {
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
  type:'inline',
  midClick: true
});

$( document ).on( "click", ".single-popup-close", function(e) {
    e.preventDefault();
    $.magnificPopup.close();
});

$('.popup-vimeo').magnificPopup({type:'iframe'});


/*--------------------------------------------------------------
  WEDZ - OWL SLIDER INIT
--------------------------------------------------------------*/
var owl = $("#gift-reg-slider");
  owl.owlCarousel({
  autoPlay : true,
  slideSpeed : 1000,
  items : 5,
  itemsDesktop : [1199,4],
  itemsDesktopSmall : [979,2],
  itemsTablet: [768,1],
  itemsMobile: [479,1],
  navigation : false,
  pagination: false
});



/*--------------------------------------------------------------
  WEDZ - MENU ACTIVE INIT
--------------------------------------------------------------*/
$(function () {

  var lastId,
  topMenu = $(".main-menu"),
  topMenuHeight = topMenu.outerHeight()+50,
  menuItems = topMenu.find("a"),
  scrollItems = menuItems.map(function(){
  var item = $($(this).attr("href"));
  if (item.length) { return item; }
  });

  menuItems.click(function(e){
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top-48;
    $('html, body').stop().animate({
        scrollTop: offsetTop,
    }, 500, 'easeInExpo');
    e.preventDefault();

  });

  $(window).scroll(function(){
     var fromTop = $(this).scrollTop()+topMenuHeight;
     var cur = scrollItems.map(function(){
       if ($(this).offset().top < fromTop)
         return this;
     });
     cur = cur[cur.length-1];
     var id = cur && cur.length ? cur[0].id : "";

     if (lastId !== id) {
         lastId = id;
         // Set/remove active class
         menuItems
           .parent().removeClass("active-menu")
           .end().filter("[href=#"+id+"]").parent().addClass("active-menu");
     }
  });

});


/*--------------------------------------------------------------
  WEDZ - DYNAMIC COUNTER INIT
--------------------------------------------------------------*/
$('#wedz_countdown').countDown({
  targetDate: {
    'day':    11,
    'month':  6,
    'year':   2016,
    'hour':   11,
    'min':    13,
    'sec':    0
  },
  omitWeeks: true
});

$('#wedz_bottom_counter').countDown({
  targetDate: {
    'day':    11,
    'month':  6,
    'year':   2016,
    'hour':   11,
    'min':    13,
    'sec':    0
  },
  omitWeeks: true
});



/*--------------------------------------------------------------
  WEDZ - GALLERY INIT
--------------------------------------------------------------*/
$(function () {
  new Photostack( document.getElementById( 'photostack-3' ), {
      callback : function( item ) {
          //console.log(item)
      }
  } );
});


/*--------------------------------------------------------------
  CONTACT FORM INIT
--------------------------------------------------------------*/
$( "#wedz-rsvp-form" ).on( "submit", function( e ) {

  //Stop form submission & check the validation
  e.preventDefault();

  // Variable declaration
  var error       = false,
    name          = $('#wedz_name').val(),
    email         = $('#wedz_email').val(),
    guests       = $('#wedz_guests').val(),
    message       = $('#wedz_message').val(),
    mail_fail     = $('#mail_fail'),
    mail_success  = $('#mail_success'),
    submit_btn    = $('#wedz_rsvp_btn');

// Form field validation
  if(name.length <= 1){
      var error = true;
      $('#wedz_name').after('<div class="field_error"><i class="fa fa-exclamation-triangle"></i></div>');
  }else{
      $('#wedz_name').next('.field_error').remove();
  }
  if(email.length <= 6 || email.indexOf('@') == '-1'){
      var error = true;
      $('#wedz_email').after('<div class="field_error"><i class="fa fa-exclamation-triangle"></i></div>');
  }else{
      $('#wedz_email').next('.field_error').remove();
  }
  if(message.length <= 0){
      var error = true;
      $('#wedz_message').after('<div class="field_error"><i class="fa fa-exclamation-triangle"></i></div>');
  }else{
      $('#wedz_message').next('.field_error').remove();
  }

  if (error == true) {
    $(mail_success).fadeOut(500);
    $(mail_fail).slideDown(800);
  };

  // If there is no validation error, next to process the mail function
  if(error == false){

      $(mail_success).hide();
      $(mail_fail).hide();
      $.ajax({
      url: $(this).attr('action'),
      data: $(this).serialize(),
      type: 'POST',
      success: function() {
        $('.single-form-item input, .single-form-item textarea').val('');
        $(mail_fail).fadeOut(500);
        $(mail_success).slideDown(800);
        $('.filed_error').remove();
      },
      error: function() {
        $(mail_success).fadeOut(500);
        $(mail_fail).slideDown(800);
      }
      });

  }
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
