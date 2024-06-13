function decrypt(text) {
    let decryptedText = "";
    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            charCode = ((charCode - 65 + 20) % 26) + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            charCode = ((charCode - 97 + 20) % 26) + 97;
        }
        decryptedText += String.fromCharCode(charCode);
    }
    return decryptedText;
}

function checkAnswer() {
    var userInput = document.getElementById('answer').value.trim().toLowerCase();
    var decryptedMessage = decrypt("Rqld exq exnlq jxyexqb!");
    if (userInput === decryptedMessage.toLowerCase()) {
        document.getElementById('hiddenText').style.display = "inline"; // Show the hidden text
        alert("Congratulations! You decrypted the message!");
    } else {
        alert("Oops! That's not correct. Try again!");
    }
}










let hint = "*pretty print*!"