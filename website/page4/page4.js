import Cookies from "../_cookies";
/**@type {HTMLInputElement} */
let check = document.getElementById("check-button");

let seconds = 0;
let intervalID;
let RawrRawr = "hack_thid_site";
let raw = "" + RawrRawr + "";
let blo = RawrRawr / 15 + 10;
let war = blo * 2;
let rr = war + "" + blo + "";

function updateTimer() {
    seconds++;
    document.querySelector('.timer').innerText = seconds;
}
intervalID = setInterval(updateTimer, 1000);


check.onclick = function() {
    let password = document.getElementById("pass").value;

    if (password == RawrRawr) {
        alert("Rawr! Win!");
        clearInterval(intervalID);
        addRecord();
        window.location.href = "success4.html";
    } else {
        alert("Rawr, nope, try again!");
    }
}
function addRecord() {
    let record = {
        Id: Cookies.get("id"),
        Seconds: seconds,
        Level: 4
    };

    let recordString = JSON.stringify(record);

    fetch("/addRecord", {
        method: "POST",
        body: recordString
    });
}