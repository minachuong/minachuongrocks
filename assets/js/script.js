function menu() {
	$(".menu,.nav .home,.nav .about,.nav .work,.nav .contact ").click(function(){
		$(".nav-section").toggleClass("show");
		$(".menu .nav-bar:nth(0)").toggleClass("animate-0");
		$(".menu .nav-bar:nth(1)").toggleClass("animate-1");
		$(".menu .nav-bar:nth(2)").toggleClass("animate-2");
	});
	var offset = $(".menu").offset();
	var topPadding = 50;
	$(window).scroll(function() {
		if(this.innerWidth > 1100) {$(".menu").stop().animate({
		    marginTop: $(window).scrollTop() - offset.top + topPadding
		});
		} else {
		$(".menu").stop().animate({
		    marginTop: 0
		});
	};
	});
	$('.scroll').smoothScroll();
}


function backstretch() { // used for fulldiv backgrounds
	// $(".bp-post").backstretch("assets/img/11.jpg");
	$(".photo-album").backstretch([
		"assets/img/blese_ele_sanctuary.jpg", "assets/img/mina_bike_balboapark.jpg"], {
		duration: 10000,
		fade: 750
	});
	// $(".bp-post.two").backstretch("assets/img/12.jpg");
	$(".portfolio-img.one").backstretch("assets/img/paulsplanner_icons.jpg");
	// $(".portfolio-img.two").backstretch("assets/img/9.jpg");
	$(".portfolio-img.three").backstretch("assets/img/hourslogger_logo.png");
	$(".portfolio-img.four").backstretch("assets/img/mina_aerial_mermaid_300_bgblur.png");
	$(".portfolio-img.five").backstretch("assets/img/geniescenter_mini.png");
	$(".portfolio-img.six").backstretch("assets/img/brattleborotango.png");
	$(".portfolio-img.seven").backstretch("assets/img/14.jpg");
	$(".portfolio-img.eight").backstretch("assets/img/15.jpg");
	$(".portfolio-img.nine").backstretch("assets/img/16.jpg");
    $(window).resize(function () {
	$(".bp-post").backstretch("assets/img/11.jpg");
	$(".photo-album").backstretch([
		"assets/img/blese_ele_sanctuary.jpg", "assets/img/mina_bike_balboapark.jpg"], {
		duration: 10000,
		fade: 750
	});
	$(".bp-post.two").backstretch("assets/img/12.jpg");
	$(".portfolio-img.one").backstretch("assets/img/paulsplanner_icons.jpg");
	$(".portfolio-img.two").backstretch("assets/img/9.jpg");
	$(".portfolio-img.three").backstretch("assets/img/hourslogger_logo.png");
	$(".portfolio-img.four").backstretch("assets/img/mina_aerial_mermaid_300_bgblur.png");
	$(".portfolio-img.five").backstretch("assets/img/geniescenter_mini.png");
	$(".portfolio-img.six").backstretch("assets/img/brattleborotango.png");
	$(".portfolio-img.seven").backstretch("assets/img/14.jpg");
	$(".portfolio-img.eight").backstretch("assets/img/15.jpg");
	$(".portfolio-img.nine").backstretch("assets/img/16.jpg");
    });
}

function slider() {
	$('#slider').flexslider({
		animation: "slide"
	});
}

function panels() {
	// album panel
    $('#album').on('click', function() {
    	$("body").addClass("no-scroll");
        $('.panel').animate({
            'width': 'show'
        }, 1000, function() {
            $('.panel .album').fadeIn(500);
        });
    });
    $('.closeicon').on('click', function() {
        $('.panel .album').fadeOut(500, function() {
        	$("body").removeClass("no-scroll");
            $('.panel').animate({
                'width': 'hide'
            }, 1000);
        });
    });
	// portfolio panel
    $("#portfolio").on('click', function() {
    	$("body").addClass("no-scroll");
        $('.panel').animate({
            'width': 'show'
        }, 1000, function() {
            $('.panel .work').fadeIn(500);
        });
    });
    $('.closeicon').on('click', function() {
        $('.panel .work').fadeOut(500, function() {
        	$("body").removeClass("no-scroll");
            $('.panel').animate({
                'width': 'hide'
            }, 1000);
        });
    });
		$('#portfolio3').on('click', function() {
			$("body").addClass("no-scroll");
				$('.panel').animate({
						'width': 'show'
				}, 1000, function() {
						$('.panel .work3').fadeIn(500);
				});
		});
		$('.closeicon').on('click', function() {
				$('.panel .work3').fadeOut(500, function() {
					$("body").removeClass("no-scroll");
						$('.panel').animate({
								'width': 'hide'
						}, 1000);
				});
		});
		$('#portfolio4').on('click', function() {
			$("body").addClass("no-scroll");
				$('.panel').animate({
						'width': 'show'
				}, 1000, function() {
						$('.panel .work4').fadeIn(500);
				});
		});
		$('.closeicon').on('click', function() {
				$('.panel .work4').fadeOut(500, function() {
					$("body").removeClass("no-scroll");
						$('.panel').animate({
								'width': 'hide'
						}, 1000);
				});
		});
		$('#portfolio5').on('click', function() {
			$("body").addClass("no-scroll");
				$('.panel').animate({
						'width': 'show'
				}, 1000, function() {
						$('.panel .work5').fadeIn(500);
				});
		});
		$('.closeicon').on('click', function() {
				$('.panel .work5').fadeOut(500, function() {
					$("body").removeClass("no-scroll");
						$('.panel').animate({
								'width': 'hide'
						}, 1000);
				});
		});

    // $("#portfolio3").on('click', function() {
    // 	$("body").addClass("no-scroll");
    //     $('.panel').animate({
    //         'width': 'show'
    //     }, 1000, function() {
    //         $('.panel .work-3').fadeIn(500);
    //     });
    // });
    // $('.closeicon').on('click', function() {
    //     $('.panel .work-3').fadeOut(500, function() {
    //     	$("body").removeClass("no-scroll");
    //         $('.panel').animate({
    //             'width': 'hide'
    //         }, 1000);
    //     });
    // });
    // $("#portfolio, #portfolio2, #portfolio3, #portfolio4, #portfolio5, #portfolio6, #portfolio7, #portfolio8, #portfolio9").on('click', function() {
    // 	$("body").addClass("no-scroll");
    //     $('.panel').animate({
    //         'width': 'show'
    //     }, 1000, function() {
    //         $('.panel .work').fadeIn(500);
    //     });
    // });
    // $('.closeicon').on('click', function() {
    //     $('.panel .work').fadeOut(500, function() {
    //     	$("body").removeClass("no-scroll");
    //         $('.panel').animate({
    //             'width': 'hide'
    //         }, 1000);
    //     });
    // });
}

function blogposts() { // only use if span is at the end of the row
	$("#blogone").click(function(){
		$(".blog-post-item.one").toggleClass("reveal");
		$(".blog-post-item.two").removeClass("reveal"); // you dont have to add this line
	});
	$("#blogtwo").click(function(){
		$(".blog-post-item.two").toggleClass("reveal");
		$(".blog-post-item.one").removeClass("reveal"); // you dont have to add this line
	});
}

function contentslider() {
	$('#content').flexslider({
		animation: "slide",
		controlNav: false,
		directionNav: false
	});
}
//
// function map() {
// 	new GMaps({
// 		div: '#map',
// 		lat: 40.71435,
// 		lng: -74.00597,
// 		scrollwheel: false
// 	});
// }
