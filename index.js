let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let dhour = document.getElementById("d-hour");
let dmin = document.getElementById("d-min");
let dsec = document.getElementById("d-sec");




function displayTime(){
    // Declaring Date
    let date = new Date();

    // Getting Hours Minute Date
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    let hour_rotation = 30*h + m/2;
    let min_rotation = 6*m;
    let sec_rotation = 6*s;

    hour.style.transform=`rotate(${hour_rotation}deg)`;
    min.style.transform=`rotate(${min_rotation}deg)`;
    sec.style.transform=`rotate(${sec_rotation}deg)`;
    
    dhour.textContent=`${h}`;
    dmin.textContent=`${m}`;
    dsec.textContent=`${s}`;

}
setInterval(displayTime,1000);