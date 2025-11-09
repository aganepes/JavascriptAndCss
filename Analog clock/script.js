const hourHand   = document.querySelector("#hour");
const minuteHand = document.querySelector("#minute");
const secondHand = document.querySelector("#second");



//Get our local date & time
let date = new Date();
let currentHour = date.getHours();
let currentMinute = date.getMinutes();
let currentSecond = date.getSeconds();

//Convert Hour,Minutes & Seconds to degrees equivalents
let hourPosition = (currentHour * 360 / 12) + (currentMinute * (360 / 60) / 12);    // Hour plus precise minutes
let minutePosition = (currentMinute * 360 / 60) + (currentSecond * (360 / 60) / 60); // 60; // Minutes plus milliseconds
let secondPosition = currentSecond * 360 / 60; // Every hour has 60 sec

function getCurrentTime(){
hourPosition = hourPosition + (3 / 360)
minutePosition = minutePosition + (6 / 60);
secondPosition = secondPosition + 6;

hourHand.style.transform = "rotate(" + hourPosition + "deg )";
minuteHand.style.transform = "rotate(" + minutePosition + "deg )";
secondHand.style.transform = "rotate(" + secondPosition + "deg )";
}

let timeInterval = setInterval(getCurrentTime, 1000);