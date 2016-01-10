/***************** Waypoints ******************/

$(document).ready(function() {
'use strict';
	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated fadeInDown');
	}, {
		offset: '55%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp5').waypoint(function() {
		$('.wp5').addClass('animated fadeInUp');
	}, {
		offset: '75%'
	});
	$('.wp6').waypoint(function() {
		$('.wp6').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

});

/***************** Slide-In Nav ******************/

$(window).load(function() {
'use strict';
	$('.nav_slide_button').click(function(event) {
		
		//event.preventDefault();
		$('body').toggleClass( "move-left" );
		$('.pull').toggleClass( "revealmenu" );	
		event.preventDefault(event);
	});

});

/***************** Smooth Scrolling ******************/

$(function() {
'use strict';
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 2000);
				return false;
			}
		}
	});

});

/***************** Nav Transformicon ******************/

document.querySelector("#nav-toggle").addEventListener("click", function() {
	'use strict';
	this.classList.toggle("active");
});

/***************** Owl Carousel *****************/

$(document).ready(function() {
	'use strict'; 
	$("#portfolioSlider").owlCarousel({
		items : 3,
		navigation : false,
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,2],
		itemsTablet: [768,1],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		autoHeight : true,
		slideSpeed : 600,
		paginationSpeed : 1200,
		rewindSpeed : 1400,
		pagination : true,
	});

	$("#servicesSlider").owlCarousel({
		items : 1,
		navigation : false,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsTabletSmall: false,
		itemsMobile : [479,1],
		autoHeight : true,
		slideSpeed : 600,
		paginationSpeed : 1200,
		rewindSpeed : 1400,
		pagination : true,
	});

});
/***************** Nicescroll ******************/

$(document).ready(
	function() {
		'use strict';
		$("html").niceScroll({
			scrollspeed:"100",
			cursorwidth:"10px",
			zindex:"99999",
			cursorborder:"0",
			cursorborderradius:"0",
			cursorcolor:"rgba(0,0,0,0.5)",
			background:"rgba(0,0,0,0.1)"
		});
	}
);

/***************** Scroll to top ******************/
$(function() {
	'use strict';
    var upBtn = $(".up-btn");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 500) {
            upBtn.addClass("showBtn");
        } else {
            upBtn.removeClass("showBtn");
        }
    });
});