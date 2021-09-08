setInterval(updateTime, 1000); //updates time in milliseconds

function updateTime() {
    var time = new Date(); //holds current date and time
    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    am_pm = "AM"; //sets default time to morning

    var clockDiv = document.getElementById('clock'); //links to html

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