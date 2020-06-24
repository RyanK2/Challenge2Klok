function giveTime() {
var today = new Date();
var hour = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();
var day = String(today.getDate()).padStart(2, '0');
var month = String(today.getMonth() + 1).padStart(2, '0');
var year = today.getFullYear();

if (sec.toString().length == 1) {
    sec = "0" + sec;
}

if (min.toString().length == 1) {
    min = "0" + min;
}

if (hour.toString().length == 1) {
    hour = "0" + hour;
}

if(hour >= 24) {
    hour = 0;
}

document.getElementById('time').innerHTML = hour + ":" + min + ":" + sec + " CET";
document.getElementById('date').innerHTML = day + "/" + month + "/" + year;
var t = setTimeout(giveTime, 100);

if(hour < 7 ) {
document.getElementById('background').style.backgroundImage = 'url(images/night.png)';
document.body.style.backgroundColor = "#537C84";
}

if(hour >= 7 && hour < 12) {
 document.getElementById('background').style.backgroundImage = 'url(images/day.png)';
document.body.style.backgroundColor = "#B3DDC2";
}

if(hour >= 12 && hour <= 23) {
 document.getElementById('background').style.backgroundImage = 'url(images/afternoon.png)';
 document.body.style.backgroundColor = "#F58F3C";
}

};
