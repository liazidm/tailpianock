'use strict';

console.log('\'Allo \'Allo!');

var wWidth = $(window).innerWidth();
var wHeight = $(window).innerHeight();

// treshold
var SCROLLTRIGGER = 15;
// init value
var SCROLLED = 0;
// has switched?
var switched = false;

// rideau up
var showItUp = function showItUp() {
	$('#test').show();
	$('#container').addClass('rideaup').css({
		'transform': 'translateY(-' + wHeight + 'px)',
		// for the content underneath to stick
		'margin-bottom': -wHeight + 'px'
	});
};
$(document).ready(function () {
	$('#container').css({
		'width': wWidth + 'px',
		'height': wHeight + 'px'
	}).mousewheel(function (e) {
		SCROLLED = SCROLLED - e.deltaY;
		console.log('scroll :' + SCROLLED);
		if (SCROLLED >= SCROLLTRIGGER && !switched) {
			switched = true;
			// alert('changement de page')
			showItUp();
		}
	});
});
//# sourceMappingURL=main.js.map
