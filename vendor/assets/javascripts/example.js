var clock;
var pomodoroTime= 3;

			$(document).ready(function() {

                          //alert("I am inside example.js");
				 clock = $('.your-clock').FlipClock(pomodoroTime, {
		        clockFace: 'MinuteCounter',
		        autoStart: false,
		        callbacks: {
		        	stop: function() {
		        	//	$('.message').html('Did you successfully complete a pomodoro ?? ');
//alert('Did you successfully complete a pomodoro ?? ');
                                     // alertEndofPomodoro();
                                     //alert('Did you successfully complete a pomodoro ?? ');
  if (window.webkitNotifications.checkPermission() == 0) { // 0 is PERMISSION_ALLOWED
    // function defined in step 2
    //alert('Did you successfully complete a pomodoro ?? ');
   

 notification = window.webkitNotifications.createNotification(
      'http://i.stack.imgur.com/dmHl0.png', 'EXECUTE notification!',
      'Have you finished one pomodoro of work');
    //notification.ondisplay = function() { ... do something ... };
    //notification.onclose = function() { ... do something else ... };

    notification.onclick = function () {
      window.focus();
      //window.open("http://stackoverflow.com/a/13328397/1269037");
      notification.close();
    }    

    notification.show();
  } else {
    window.webkitNotifications.requestPermission();
  }
		        	}
		        }
        		});
                                
			});

                  // Attach a click event to a button a increment the clock
				$('.start').click(function() {
                                        clock.setTime(pomodoroTime);
                                        clock.setCountdown(true);
					clock.start();
				});

				$('.stop').click(function() {
					clock.stop();
				});

// check for notifications support
// you can omit the 'window' keyword
if (window.webkitNotifications) {
  console.log("Notifications are supported!");
}
else {
  console.log("Notifications are not supported for this Browser/OS version yet.");
}

function alertEndofPomodoro()
{
  alert('Did you successfully complete a pomodoro ?? ');
  if (window.webkitNotifications.checkPermission() == 0) { // 0 is PERMISSION_ALLOWED
    // function defined in step 2
    notification_test = window.webkitNotifications.createNotification(
      'http://i.stack.imgur.com/dmHl0.png', 'Chrome notification!',
      'Here is the notification text');
    //notification_test.ondisplay = function() { ... do something ... };
    //notification_test.onclose = function() { ... do something else ... };
    notification_test.show();
  } else {
    window.webkitNotifications.requestPermission();
  }
}
