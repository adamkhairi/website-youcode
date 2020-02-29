//******* */ function of form verification ***********

let error, username, email, form, msg, phone;
username = document.getElementById('username');
error = document.getElementById('error');
form = document.getElementById('contactUs_form');
email = document.getElementById('email');
phone = document.getElementById('phone');
msg = document.getElementById('message');
function send() {
    if (username.value == '') {
        error.innerText = "Please enter your Information !"
        username.style.border = "2px solid red";
        email.style.border = "2px solid red";
        phone.style.border = "2px solid red";
        msg.style.border = "2px solid red";
        return false;
    } else if (username.value.length < 3) {
        error.innerText = "Please enter a valid username ";
        username.style.border = "2px solid red";
        return false;
    } else if (username.value.length > 32) {
        error.innerText = "Please enter a valid username ";
        username.style.border = "2px solid red";
        return false;
    } else if (email.value == '') {
        error.innerText = " Please enter your Email  ";
        email.style.border = "2px solid red";
        return false;
    } else if (email.value.length < 6) {
        error.innerText = " Please enter a valid Email  ";
        email.style.border = "2px solid red";
        return false;
    } else if (email.value.indexOf("@") == -1) {
        error.innerText = " here is an example of a valid email exemple@email.com ";
        email.style.border = "2px solid red";
        return false;
    } else if (phone.value == '') {
        error.innerText = "Please enter your phone number";
        phone.style.border = "2px solid red";
        return false;
    } else if (phone.value.length !== 10) {
        error.innerText = "Invalid Number !!";
        phone.style.border = "2px solid red";
        return false;
    } else if (msg.value == '' || msg.value.length < 10) {
        msg.style.border = "2px solid red";
        error.innerText = "Please enter a message";
        return false;
    } else {
        alert("Message sent.");
        username.style.border = "2px solid green";
        phone.style.border = "2px solid green";
        email.style.border = "2px solid green";
    }
    return true;
};
