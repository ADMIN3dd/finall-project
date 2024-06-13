import Cookies from "../_cookies";
/**@type {HTMLInputElement} */
let check = document.getElementById("check-button");


let seconds = 0;
    let intervalID;
    let UserName = document.getElementById("UserName");
    let x = 10 * 9;
    let raw = x / 3;
    let moo = raw / 15 + 10;
    let war = moo * 2;
    let rr = war + moo;

    function updateTimer() {
        seconds++;
        document.querySelector('.timer').innerText = seconds;
    }
    intervalID = setInterval(updateTimer, 1000);

    check.onclick = function() {
        let password = document.getElementById("pass").value;

        if (password.length == moo) {
            alert("You Win!");
            clearInterval(intervalID);
            addRecord();
            window.location.href = "success2.html";
        } else {
            alert("Fail D:");
        }
    }

    function addRecord() {
        let record = {
            Id: Cookies.get("id"),
            Seconds: seconds,
            Level: 2
        };

        let recordString = JSON.stringify(record);

        fetch("/addRecord", {
            method: "POST",
            body: recordString
        });
    }