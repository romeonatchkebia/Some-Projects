const container = document.getElementById("container");

function showtime() {
    let date = new Date();

    let hours = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    let formatedTime = formatTime(hours);
    hours = modified(hours);
    
    hours = addZero(hours);
    minute = addZero(minute);
    seconds = addZero(seconds);

    container.innerHTML = `${hours}:${minute}:${seconds} ${formatedTime}`
};
    


function modified(time) {
    if (time > 12) {
        time = time - 12;
    }
    if (time === 0) {
        time = 12;
    }

    return time;
};



function formatTime(time) {
    let format = "AM";
    if(time >= 12) {
        format = "PM";
    }
    return format;
};

function addZero(time) {
    if (time < 10){
        time = "0" + time
    }
    return time;
}

showtime();
//setInterval(showtime, 1000);