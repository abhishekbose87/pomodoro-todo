var clock;
var pomodoroTime= 5;
var rowid;
var notification;

$(document).ready(function(){
$('.task').filter(":first").addClass('highlighted');
$('#tasks').on('click','.task',function(){
    $('.highlighted').removeClass('highlighted');
    $(this).addClass('highlighted');
    rowid = $('.highlighted').attr('value');
    //alert(rowid);
  });

});


function confirmFunction()
{
  var r = confirm("Was the last pomodoro successfull ");
  //alert("Outside if");
  if (r == true)
  {
    //alert("Inside true");
    //var id = $('.highlighted').text();
    // alert("Id = "+id.val());
    if(rowid == null){
      rowid=$('.highlighted').attr('value');
      //alert("I gotcha the value");
    }
    $("#task_id").val(rowid);
    //alert("Before reaching" + rowid);
    $("#hidden_form").submit();
    //window.location.replace(newurl);
  }
  /*else
  {
   // alert("Last pomdoro was cancelled");
  } */
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
      
      //
      //var notifier = new Notifier();

      if(clock.getTime() == 0 ) {
        
        /*if (window.webkitNotifications.checkPermission() == 0) { // 0 is PERMISSION_ALLOWED
          // function defined in step 2
          alert('checkPermission == 0 ');         
        } 
        else { 
        window.webkitNotifications.requestPermission();
        notifier.RequestPermission();
        alert('Received permission');
        //}
        alert('Before creating Notification ');
        notification = window.webkitNotifications.createNotification(
        'http://i.stack.imgur.com/dmHl0.png', 'EXECUTE notification!',
        'One pomodoro of work has finished');
        //notification.ondisplay = function() { ... do something ... };
        //notification.onclose = function() { ... do something else ... };

        notification.show();
        alert('After creating Notification ');

        notification.onclick = function(){
          //window.focus();
          //window.open("localhost:3000");
          

          notification.close();
        } */

        window.focus();
        //window.open("localhost:3000");
        var r = confirmFunction();

      }
    }
  }
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
  alert('Did you successfully complete a pomodoro ??');
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

