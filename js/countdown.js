(function($) {
	'use strict';

	function CountDown() {
		// Set static values
		var days = 920;
		var hours = 12;
		var minutes = 9;
		var seconds = 21;

		function updateDisplay() {
			$('.custom-countdown .days').text(days);
			$('.custom-countdown .hours').text(hours < 10 ? '0' + hours : hours);
			$('.custom-countdown .minutes').text(minutes < 10 ? '0' + minutes : minutes);
			$('.custom-countdown .seconds').text(seconds < 10 ? '0' + seconds : seconds);
		}

		function countdown() {
			if (seconds > 0) {
				seconds--;
			} else {
				seconds = 59;
				if (minutes > 0) {
					minutes--;
				} else {
					minutes = 59;
					if (hours > 0) {
						hours--;
					} else {
						hours = 23;
						if (days > 0) {
							days--;
						} else {
							// Reset to initial values when countdown reaches zero
							days = 920;
							hours = 12;
							minutes = 9;
							seconds = 21;
						}
					}
				}
			}
			updateDisplay();
		}

		// Initial display
		updateDisplay();

		// Start countdown
		setInterval(countdown, 1000);
	}

	// Initialize countdown when document is ready
	$(document).ready(function() {
		CountDown();
	});

})(jQuery);