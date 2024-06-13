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
    let Userpassword = document.getElementById("pass").value;

    if (Userpassword == blabla) {
        alert("Damm You are smart!");
        clearInterval(intervalID);
        addRecord();
        window.location.href = "success3.html";
    } else {
        alert("Noob");
    }
}

function addRecord() {
    let record = {
        Id: Cookies.get("id"),
        Seconds: seconds,
        Level: 3
    };
    let recordString = JSON.stringify(record);

    fetch("/addRecord", {
        method: "POST",
        body: recordString
    })
}




    let div0 = document.getElementById("votes0");
    let div1 = document.getElementById("votes1");
    let div2 = document.getElementById("votes2");
    let div3 = document.getElementById("votes3");
    let nameDisplay = document.getElementById("nameDisplay");
    function handleClick(index) {
        if (index == 0) {
            div0.innerText++;
        }
        if (index == 1) {
            div1.innerText++;
        }
        if (index == 2) {
            div2.innerText++;
        }
        if (index == 3) {
            div3.innerText++;
        }
    }


    function handleClick2() {
        if (div0.innerText > div1.innerText && div0.innerText > div2.innerText && div0.innerText > div3.innerText) {
            nameDisplay.innerText = "The winner is: Bibi ";
        }
        else if (div1.innerText > div0.innerText && div1.innerText > div2.innerText && div1.innerText > div3.innerText) {
            nameDisplay.innerText = "The winner is: Noa Kirel ";
        }
        else if (div2.innerText > div0.innerText && div2.innerText > div1.innerText && div2.innerText > div3.innerText) {
            nameDisplay.innerText = "The winner is: Garfield ";
        }
        else if (div3.innerText > div0.innerText && div3.innerText > div1.innerText && div3.innerText > div2.innerText) {
            nameDisplay.innerText = "The winner is: David Ben-Gurion ";
        }
    }






    function decrypt(text) {
        let decryptedText = "";
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            if (charCode >= 65 && charCode <= 90) {
                charCode = ((charCode - 65 + 7) % 26) + 65;
            } else if (charCode >= 97 && charCode <= 122) {
                charCode = ((charCode - 97 + 7) % 26) + 97;
            }
            decryptedText += String.fromCharCode(charCode);
        }
        return decryptedText;
    }

    function checkAnswer() {
        var userInput = document.getElementById('answer').value.trim().toLowerCase();
        var decryptedMessage = decrypt("CVGV XSZI YVRU ZHHW QZWB RMMZ QZWB QZWB VGOV WBRM MHRMTW ZS YVB QHSSR IB WRQ XIOWBV");
        if (userInput === decryptedMessage.toLowerCase()) {
            document.getElementById('hiddenText').style.display = "inline"; // Show the hidden text
            alert("Congratulations! You cracked the code!");
        } else {
            alert("Oops! That's not correct. Try again!");
        }
    }
