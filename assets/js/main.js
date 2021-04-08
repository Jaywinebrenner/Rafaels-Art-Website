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


  // Animate text upon hovering over logo in NAV BAR
$( ".bioLinkImagesWrapper" ).hover(
    function() {
      $( ".bioLogoImagesText" ).addClass( "showText" );
    }, function() {
      $( ".bioLogoImagesText" ).removeClass( "showText" );
    }
  );

  $( ".workLinkImagesWrapper" ).hover(
    function() {
      $( ".workLogoImagesText" ).addClass( "showText" );
    }, function() {
      $( ".workLogoImagesText" ).removeClass( "showText" );
    }
  );

  $( ".showsLinkImagesWrapper" ).hover(
    function() {
      $( ".showsLogoImagesText" ).addClass( "showText" );
    }, function() {
      $( ".showsLogoImagesText" ).removeClass( "showText" );
    }
  );

  $( ".contactLinkImagesWrapper" ).hover(
    function() {
      $( ".contactLogoImagesText" ).addClass( "showText" );
    }, function() {
      $( ".contactLogoImagesText" ).removeClass( "showText" );
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

// Links for NAV BAR Logos

$('.bioLinkImagesWrapper').click(function () {
    window.location = 'bio.html';
});

$('.workLinkImagesWrapper').click(function () {
    window.location = 'work.html';
});

$('.showsLinkImagesWrapper').click(function () {
    window.location = 'shows.html';
});

$('.contactLinkImagesWrapper').click(function () {
    window.location = 'contact.html';
});





// MODAL

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}






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