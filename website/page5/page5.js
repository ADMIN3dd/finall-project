import Cookies from "../_cookies";
/**@type {HTMLInputElement} */
let check = document.getElementById("check-button");


let seconds = 0;
let intervalID;
let pasword = 1;
let raw = pasword + 3;
let blo = pasword + raw;
let password = 5;
let passwordi = blo * 2;
let lok = passwordi * pasword;
let gg = 2 * 3 - lok
let mDL = "Naor"
let neme = mDL;

const secretMessage = "Congratulations! You found the hidden message.";

function updateTimer() {
    seconds++;
    document.querySelector('.timer').innerText = seconds;
}
intervalID = setInterval(updateTimer, 1000);

check.onclick = function() {
    let Userpassword = document.getElementById("pass").value;
    let UserName = document.getElementById("name").value;
    let UsersecretMessage = document.getElementById("secret").value;

    if (Userpassword.length == password && UserName == neme && UsersecretMessage == secretMessage) {
        alert("Damm! You Are Really Good At It!");
        clearInterval(intervalID);
        addRecord(UserName);
        window.location.href = "success5.html";
    } else {
        alert("You Are Close, Try Again");
    }
}

function addRecord() {
    let record = {
        Id: Cookies.get("id"),
        Seconds: seconds,
        Level: 1
    };

    let recordString = JSON.stringify(record);

    fetch("/addRecord", {
        method: "POST",
        body: recordString
    });
}