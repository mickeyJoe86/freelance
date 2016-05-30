/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

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

/////////////////FLYING DOTS
//var Vector = function (x, y) {
//	this.x = x;
//	this.y = y;

//	this.sub = function (other) {
//		return new Vector(
//						this.x - other.x,
//						this.y - other.y
//		);
//	}
//	this.isub = function (other) {
//		this.x -= other.x;
//		this.y -= other.y;
//	}
//	this.iadd = function (other) {
//		this.x += other.x;
//		this.y += other.y;
//	}
//	this.length = function () {
//		return Math.sqrt(this.x * this.x + this.y * this.y);
//	}
//	this.idiv = function (scalar) {
//		this.x /= scalar;
//		this.y /= scalar;
//	}
//	this.zero = function () {
//		this.x = 0;
//		this.y = 0;
//	}
//	this.validate = function () {
//		if (isNaN(this.x + this.y)) {
//			this.x = 0;
//			this.y = 0;
//		}
//	}
//}

//var Particle = function (canvas) {
//	var initial_speed = 1;
//	var speed_limit = 4;
//	var bounce_damping = 0.5;

//	this.acceleration = new Vector(0, 0);
//	this.velocity = new Vector(
//					Math.random() * initial_speed - initial_speed * 0.5,
//					Math.random() * initial_speed - initial_speed * 0.5
//	)
//	this.position = new Vector(
//					Math.random() * canvas.width,
//					Math.random() * canvas.height
//	)

//	this.step = function () {
//		this.acceleration.validate();
//		this.velocity.iadd(this.acceleration);

//		speed = this.velocity.length();
//		if (speed > speed_limit) {
//			this.velocity.idiv(speed / speed_limit);
//		}
//		this.position.iadd(this.velocity);
//		this.acceleration.zero();

//		// border bounce
//		if (this.position.x < 0) {
//			this.position.x = 0;
//			this.velocity.x *= -bounce_damping;
//		}
//		else if (this.position.x > canvas.width) {
//			this.position.x = canvas.width;
//			this.velocity.x *= -bounce_damping;
//		}

//		if (this.position.y < 0) {
//			this.position.y = 0;
//			this.velocity.y *= -bounce_damping;
//		}
//		else if (this.position.y > canvas.height) {
//			this.position.y = canvas.height;
//			this.velocity.y *= -bounce_damping;
//		}
//	}
//	this.draw = function (context) {
//		context.beginPath();
//		context.arc(this.position.x, this.position.y, 2.5, 0, Math.PI * 2, false);
//		context.fill();
//	}
//}

//var System = function (amount, milliseconds) {
//	var factor = 9;
//	var min_proximity = 4;

//	var canvas = document.getElementById('particles');
//	var context = canvas.getContext('2d');

//	var particles = [];
//	for (var i = 0; i < amount; i++) {
//		particles.push(new Particle(canvas));
//	}

//	setInterval(function () {
//		// fading
//		context.globalCompositeOperation = 'source-in';
//		context.fillStyle = 'rgba(128,128,128,0.85)';
//		context.fillRect(0, 0, canvas.width, canvas.height);

//		// dot drawing style
//		context.globalCompositeOperation = 'lighter';
//		context.fillStyle = 'rgba(128,128,128,0.5)';

//		// nbody code acceleration accumulation
//		for (var i = 0, il = amount; i < il; i++) {
//			var a = particles[i];
//			for (var j = i + 1; j < amount; j++) {
//				var b = particles[j];
//				var vec = a.position.sub(b.position);
//				var length = vec.length();
//				vec.idiv(Math.pow(length, 3) / factor); // scale the vector to the inverse square distance

//				// safeguard for execessive integration error
//				if (length > min_proximity) {
//					b.acceleration.iadd(vec);
//					a.acceleration.isub(vec);
//				}
//			}

//			a.step();
//			a.draw(context);
//		}
//	}, milliseconds);
//}

//var main = function () {
//	var system = new System(15, 40);
//};

///////////////////////////FLYING CIRCLES
var circles = [],
    canvas = document.getElementById("canvas1"),
    context = canvas.getContext("2d"),

    // SETTINGS
    opacity = 0.6,                                      // the opacity of the circles 0 to 1
    colors = ['rgba(34, 49, 63,' + opacity + ')',       // an array of rgb colors for the circles
              'rgba(189, 195, 199,' + opacity + ')',
														'rgba(24,188,156, ' + opacity + ')'
              //'rgba(241, 196, 15,' + opacity + ')',
              //'rgba(231, 76, 60,' + opacity + ')',
              //'rgba(231, 76, 60,' + opacity + ')'
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