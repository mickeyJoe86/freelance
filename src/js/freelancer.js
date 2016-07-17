/////// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
	$('body').on('click', '.page-scroll a', function (event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

/////////// Floating label headings for the contact form
$(function () {
	$("body").on("input propertychange", ".floating-label-form-group", function (e) {
		$(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
	}).on("focus", ".floating-label-form-group", function () {
		$(this).addClass("floating-label-form-group-with-focus");
	}).on("blur", ".floating-label-form-group", function () {
		$(this).removeClass("floating-label-form-group-with-focus");
	});
});

//////////// Highlight the top nav as scrolling occurs
$('body').scrollspy({
	target: '.navbar-fixed-top'
})

////////// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
	$('.navbar-toggle:visible').click();
});

/////////////BOUNCING ANIMATION
var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop();
	var window_bottom_position = (window_top_position + window_height);

	$.each($animation_elements, function () {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);

		//check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
			$element.addClass('in-view');
		} else {
			$element.removeClass('in-view');
		}
	});
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');

///////////////////////////FLYING CIRCLES
var circles = [],
    canvas = document.getElementById("canvas1"),
    context = canvas.getContext("2d"),

    // SETTINGS
    opacity = 0.6,                                      // the opacity of the circles 0 to 1
    colors = ['rgba(34, 49, 63,' + opacity + ')',       // an array of rgb colors for the circles
              'rgba(189, 195, 199,' + opacity + ')',
														'rgba(24,188,156, ' + opacity + ')'

    ],
    minSize = 1,                                        // the minimum size of the circles in px
    maxSize = 10,                                       // the maximum size of the circles in px
    numCircles = 100,                                   // the number of circles
    minSpeed = -2,                                     // the minimum speed, recommended: -maxspeed
    maxSpeed = 2,                                    // the maximum speed of the circles
    expandState = true;                                      // the direction of expansion

function buildArray() {
	'use strict';

	for (var i = 0; i < numCircles ; i++) {
		var color = Math.floor(Math.random() * (colors.length - 1 + 1)) + 1,
						left = Math.floor(Math.random() * (canvas.width - 0 + 1)) + 0,
						top = Math.floor(Math.random() * (canvas.height - 0 + 1)) + 0,
						size = Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize,
						leftSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed) / 10,
						topSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed) / 10,
						expandState = expandState;

		while (leftSpeed == 0 || topSpeed == 0) {
			leftSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed) / 10,
			topSpeed = (Math.floor(Math.random() * (maxSpeed - minSpeed + 1)) + minSpeed) / 10;
		}
		var circle = { color: color, left: left, top: top, size: size, leftSpeed: leftSpeed, topSpeed: topSpeed, expandState: expandState };
		circles.push(circle);
	}
}

function build() {
	'use strict';

	for (var h = 0; h < circles.length; h++) {
		var curCircle = circles[h];
		context.fillStyle = colors[curCircle.color - 1];
		context.beginPath();
		if (curCircle.left > canvas.width + curCircle.size) {
			curCircle.left = 0 - curCircle.size;
			context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
		} else if (curCircle.left < 0 - curCircle.size) {
			curCircle.left = canvas.width + curCircle.size;
			context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
		} else {
			curCircle.left = curCircle.left + curCircle.leftSpeed;
			context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
		}

		if (curCircle.top > canvas.height + curCircle.size) {
			curCircle.top = 0 - curCircle.size;
			context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
		} else if (curCircle.top < 0 - curCircle.size) {
			curCircle.top = canvas.height + curCircle.size;
			context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
		} else {
			curCircle.top = curCircle.top + curCircle.topSpeed;
			if (curCircle.size != maxSize && curCircle.size != minSize && curCircle.expandState == false) {
				curCircle.size = curCircle.size - 0.1;
			}
			else if (curCircle.size != maxSize && curCircle.size != minSize && curCircle.expandState == true) {
				curCircle.size = curCircle.size + 0.1;
			}
			else if (curCircle.size == maxSize && curCircle.expandState == true) {
				curCircle.expandState = false;
				curCircle.size = curCircle.size - 0.1;
			}
			else if (curCircle.size == minSize && curCircle.expandState == false) {
				curCircle.expandState = true;
				curCircle.size = curCircle.size + 0.1;
			}
			context.arc(curCircle.left, curCircle.top, curCircle.size, 0, 2 * Math.PI, false);
		}

		context.closePath();
		context.fill();
		context.ellipse;
	}
}

var xVal = 0;

window.requestAnimFrame = (function (callback) {
	'use strict';
	return window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.oRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};
})();

function animate() {
	'use strict';
	var canvas = document.getElementById("canvas1"),
					context = canvas.getContext("2d");

	// clear the canvas
	context.clearRect(0, 0, canvas.width, canvas.height);

	// draw the next frame
	xVal++;
	build();

	//console.log("Prep: animate ==> requestAnimFrame");
	// request a new frame
	requestAnimFrame(function () {
		animate();
	});
}
window.onload = function () {
	'use strict';
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	buildArray();
	animate();
};

window.onresize = function () {
	'use strict';
	console.log("resize");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	//buildArray();
	animate();
};

///////////////////Services steps animation
$("#showr").click(function () {
	$(".container-animation div").first().show("slow", function showNext() {
		$(this).next(".container-animation div").show("slow", showNext);
		$(this).next("#hidr").show();
		$("#hidr ").click(function () {
			$(".container-animation div").hide(1000);
			$('#hidr').hide();
		});
	});
});

$(" #showr-two ").click(function () {
	$(".container-animation-two div").first().show("slow", function showNext() {
		$(this).next(".container-animation-two div").show("slow", showNext);
		$(this).next(" #hidr-two").show();
		$(" #hidr-two ").click(function () {
			$(".container-animation-two div").hide(1000);
			$(' #hidr-two').hide();
		});
	});
});

$(" #showr-three ").click(function () {
	$(".container-animation-three div").first().show("slow", function showNext() {
		$(this).next(".container-animation-three div").show("slow", showNext);
		$(this).next(" #hidr-three").show();
		$(" #hidr-three ").click(function () {
			$(".container-animation-three div").hide(1000);
			$(' #hidr-three').hide();
		});
	});
});

$(" #showr-four ").click(function () {
	$(".container-animation-four div").first().show("slow", function showNext() {
		$(this).next(".container-animation-four div").show("slow", showNext);
		$(this).next(" #hidr-four").show();
		$(" #hidr-four ").click(function () {
			$(".container-animation-four div").hide(1000);
			$(' #hidr-four').hide();
		});
	});
});

$(" #showr-five ").click(function () {
	$(".container-animation-five div").first().show("slow", function showNext() {
		$(this).next(".container-animation-five div").show("slow", showNext);
		$(this).next(" #hidr-five").show();
		$(" #hidr-five ").click(function () {
			$(".container-animation-five div").hide(1000);
			$(' #hidr-five').hide();
		});
	});
});

if ($(window).width() < 760) { }

//TYPE

(function ($, w, d, undefined) {
	function typewriter() {
		// Globals
		var self = this, speed;

		function init(element, options) {
			// Set Globals
			var str;
			var indice = 0;

			self.options = $.extend({}, $.fn.typewriter.options, options);
			$currentElement = $(element);
			elementStr = $currentElement.text().replace(/\s+/g, ' ');
			dataSpeed = $currentElement.data("speed") || self.options.speed;
			$currentElement.empty();
			var showText = setInterval(
	function () {
		if (indice++ < elementStr.length) {
			$currentElement.append(elementStr[indice - 1]);
		} else {
			clearInterval(showText);
		}
	}, dataSpeed);
			// self.animation = setInterval(function(){animate_calification()}, 20);
		}

		// Metodos publicos
		return {
			init: init
		}
	}

	// Plugin jQuery
	$.fn.typewriter = function (options) {
		return this.each(function () {
			var writer = new typewriter();
			writer.init(this, options);
			$.data(this, 'typewriter', writer);
		});
	};

	$.fn.typewriter.options = {
		'speed': 300
	};
})(jQuery, window, document);

// Typing Intro Init
$(".typed").typewriter({
	speed: 120
});

//DEVELOPERS PROFILE
$("#maria-profile").click(function () {
	$(".maria-description").slideToggle();
});
$("#mike-profile").click(function () {
	$(".mike-description").slideToggle();
});

$(document).on('click', '.navbar-collapse a', function(){
	$(".navbar-collapse").collapse('hide');
});