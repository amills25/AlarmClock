var alarmTime = null;
var alarmTimeout = null;

function updateTime() {
    var time = new Date(); //holds current date and time
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    am_pm = "AM"; //sets default time to morning

    var clockDiv = document.getElementById("clock"); //links to html

    if (hour > 12) { // converts afternoon times to 12 hour clock
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) { // converts midnight to "12"
        hour = 12;
        am_pm = "AM";
    }

    //ternary operator turns "7" into "07" like you see on a digital clock
    hour = hour < 10 ? "0" + hour : hour;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    //sets the text of the digital clock
    clockDiv.innerText = hour + ":" + minutes + ":" + seconds + " " + am_pm; 
}
updateTime();

function setAlarmTime(value) { //sets alarm time to user input
    alarmTime = document.getElementById("alarmTime").value;
    console.log(alarmTime);
}

function setAlarm() {
    if(alarmTime) { //if there is an alarm time then...
        var current = new Date(); //current date and time
        var timeToAlert = new Date(alarmTime); //time alarm is set to alert

        if (timeToAlarm > current){ //making sure alarm is set to alert in the future
            var timeout = timeToAlert.getTime() - current.getTime(); //amount of time til alarm alerts
            alarmTimeout = setTimeout(alert('WAKE UP'), timeout); //js function to set alert when a time is reached
            alert('ALARM IS SET');
        }
    }
}

function clearAlarm() { //clear the time set if you don't want the alarm to go off anymore
    if (alarmTimeout) {
        clearTimeout(alarmTimeout);
        alert('Alarm cleared');
    }
}

setInterval(updateTime, 1000); //updates time in milliseconds