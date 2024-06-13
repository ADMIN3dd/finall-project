import Cookies from "./_cookies";

/** @type {HTMLInputElement} */
let logout = document.getElementById("logout");
let start = document.getElementById("start");
let page1 = document.getElementById("p1");
let page2 = document.getElementById("p2");
let page3 = document.getElementById("p3");
let page4 = document.getElementById("p4");
let page5 = document.getElementById("p5");
let page6 = document.getElementById("p6");
let singupdiv = document.getElementById("singupdiv");
let logindiv = document.getElementById("logindiv");
logout.onclick = function () {
    if (Cookies.get('id') != null) {
        Cookies.remove('id');
        alert("User deleted");
        singupdiv.classList.remove("hidden");
        logindiv.classList.remove("hidden");
        logout.classList.add("hidden");
    }
   
}

start.onclick = function () {
    if (Cookies.get('id') == null) {
        alert("You need to create an account");
        window.location.href = "/website/signup/signup.html";
    } else {
        window.location.href = "page1/page1.html";
    }
}

page1.onclick = function () {
    if (Cookies.get('id') == null) {
        alert("You need to create an account");
        window.location.href = "/website/signup/signup.html";
    } else {
        window.location.href = "page1/page1.html";
    }
}

page2.onclick = function () {
    if (Cookies.get('id') == null) {
        alert("You need to create an account");
        window.location.href = "/website/signup/signup.html";
    } else {
        window.location.href = "page2/page2.html";
    }
}

page3.onclick = function () {
    if (Cookies.get('id') == null) {
        alert("You need to create an account");
        window.location.href = "/website/signup/signup.html";
    } else {
        window.location.href = "page3/page3.html";
    }
}

page4.onclick = function () {
    if (Cookies.get('id') == null) {
        alert("You need to create an account");
        window.location.href = "/website/signup/signup.html";
    } else {
        window.location.href = "page4/page4.html";
    }
}

page5.onclick = function () {
    if (Cookies.get('id') == null) {
        alert("You need to create an account");
        window.location.href = "/website/signup/signup.html";
    } else {
        window.location.href = "page5/page5.html";
    }
}

page6.onclick = function () {
    if (Cookies.get('id') == null) {
        alert("You need to create an account");
        window.location.href = "/website/signup/signup.html";
    } else {
        window.location.href = "page6/page6.html";
    }
}

if (Cookies.get('id') == null) {
    singupdiv.classList.remove("hidden");
    logindiv.classList.remove("hidden");



}
else {
    logout.classList.remove("hidden");

}
