import Cookies from "../_cookies";
/**@type {HTMLInputElement} */
let check = document.getElementById("check-button");

let seconds = 0;
let intervalID;
function updateTimer() {
    seconds++;
    document.querySelector('.timer').innerText = seconds;
}
intervalID = setInterval(updateTimer, 1000);
check.onclick = function () {
    let userInput = document.getElementById("pass").value.toLowerCase();
    let correctAnswer = "my first ctf hack";
    if (userInput === correctAnswer) {
        clearInterval(intervalID);
        addRecord();
        alert("Congratulations! You got it right!");
        window.location.href = "success1.html";
    } else {
        alert("Oops! That's not correct. Try again!");
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
    })
    
}