// Animate text upon hovering over logo
$( ".bioLinkWrapper" ).hover(
    function() {
      $( ".bioLogoText" ).addClass( "showText" );
    }, function() {
      $( ".bioLogoText" ).removeClass( "showText" );
    }
  );

  $( ".workLinkWrapper" ).hover(
    function() {
      $( ".workLogoText" ).addClass( "showText" );
    }, function() {
      $( ".workLogoText" ).removeClass( "showText" );
    }
  );

  $( ".showsLinkWrapper" ).hover(
    function() {
      $( ".showsLogoText" ).addClass( "showText" );
    }, function() {
      $( ".showsLogoText" ).removeClass( "showText" );
    }
  );

  $( ".contactLinkWrapper" ).hover(
    function() {
      $( ".contactLogoText" ).addClass( "showText" );
    }, function() {
      $( ".contactLogoText" ).removeClass( "showText" );
    }
  );





// Links for Home Page Logos

$('.bioLinkWrapper').click(function () {
    window.location = 'bio.html';
});

$('.workLinkWrapper').click(function () {
    window.location = 'work.html';
});

$('.showsLinkWrapper').click(function () {
    window.location = 'shows.html';
});

$('.contactLinkWrapper').click(function () {
    window.location = 'contact.html';
});






// $(function() {


// 	var $window = $(window);
	
// 	// Parallax Backgrounds
// 	// Tutorial: http://code.tutsplus.com/tutorials/a-simple-parallax-scrolling-technique--net-27641
	
// 	$('section[data-type="background"]').each(function(){
// 		var $bgobj = $(this); // assigning the object
		
// 		$(window).scroll(function() {
		
// 			// Scroll the background at var speed
// 			// the yPos is a negative value because we're scrolling it UP!								
// 			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			
// 			// Put together our final background position
// 			var coords = '50% '+ yPos + 'px';
			
// 			// Move the background
// 			$bgobj.css({ backgroundPosition: coords });
			
// 		}); // end window scroll
// 	});
	
// });