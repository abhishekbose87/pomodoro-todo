var clock;
var pomodoroTime= 3;
var rowid;

$(document).ready(function(){
  $('.task').first().addClass('highlighted');
  $('.task').on('click',function(){
    $('.highlighted').removeClass('highlighted');
    $(this).addClass('highlighted');
    rowid = $(this).attr('value');
    //alert("Id = "+ rowid);
  });
});

function confirmFunction()
{
var r = confirm("Was that a pomodoro ??");
//alert("Outside if");
      if (r == true)
  {
    //alert("Inside true");
    //var id = $('.highlighted').text();
   // alert("Id = "+id.val());
      $("#task_id").val(rowid);
     //   alert(newurl);
     $("#form").submit();
  //window.location.replace(newurl);
  }
else
  {
  alert("Last pomdoro was cancelled");
  }
}

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
      //window.focus();
      //window.open("localhost:3000");
      window.focus();
      var r = confirmFunction();
      
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
