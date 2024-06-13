import Cookies from "../_cookies";
import { send } from "../_utils";

/**@type {HTMLInputElement} */
let usernameInput = document.getElementById("usernameInput");

/**@type {HTMLInputElement} */
let passwordInput = document.getElementById("passwordInput");

/**@type {HTMLButtonElement} */
let submitButton = document.getElementById("submit");

submitButton.onclick = async function () {
  console.log(usernameInput.value, passwordInput.value);

  /**@type {string} */
  let id = await send("/signUp", {
    username: usernameInput.value,
    password: passwordInput.value,
  });

  Cookies.set("id", id);

 top.location.href = "../login/login.html";
}















function validateForm() {
  var username = document.getElementById("new-username").value;
  var password = document.getElementById("new-password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  var phone = document.getElementById("phone").value;

  if (!/^[a-zA-Z]/.test(username)) {
    alert("Username must start with a letter.");
    return false;
  }

  if (password.length < 4 || !/[!@%$#^&*()_+]/.test(password)) {
    alert("Password must have at least 4 characters and contain a unique character (#$%).");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Password and Confirm Password must match.");
    return false;
  }
  return true;
}


