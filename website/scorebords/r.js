import Cookies from "../_cookies";
/**@type {HTMLInputElement} */
let h = document.getElementById("home");

h.onclick = function () {
    window.location.href = "../index.html"
}

async function getRecords1() {
    let response = await fetch("/getRecords");
    let records = await response.json();
    console.log("records 1: ", records);
    for (let record of records) {
        let tr = document.createElement("tr");
        document.getElementsByTagName("table")[record.level - 1].appendChild(tr);
        let nameTd = document.createElement("td");
        tr.appendChild(nameTd);
        nameTd.innerText = record.username;
        let timeTd = document.createElement("td");
        tr.appendChild(timeTd);
        timeTd.innerText = record.seconds;
    }
}
getRecords1();