function generatePassword(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var modifiedPassword = modifyPassword(username);

    document.getElementById('generatedPassword').innerText = modifiedPassword;
}


function modifyPassword(username) {
    var hashedPassword = "abcd"+username;
    return hashedPassword;
}
