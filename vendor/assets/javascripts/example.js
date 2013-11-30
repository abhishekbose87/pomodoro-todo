var clock;
var pomodoroTime= 1800;

			$(document).ready(function() {

                          //alert("I am inside example.js");
				 clock = $('.your-clock').FlipClock(pomodoroTime, {
		        clockFace: 'MinuteCounter',
		        autoStart: false,
		        callbacks: {
		        	stop: function() {
		        		$('.message').html('The clock has stopped!');
		        	}
		        }
        		});
                                
			});

                  // Attach a click event to a button a increment the clock
				$('.start').click(function() {
                                        clock.setTime(1800);
                                        clock.setCountdown(true);
					clock.start();
				});

				$('.stop').click(function() {
					clock.stop();
				});
