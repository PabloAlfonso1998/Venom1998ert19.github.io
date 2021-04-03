document.getElementById("form-btn").addEventListener("click", validateForm);
function validateForm() {
    var fnameField = document.getElementById("fname");
    var lnameField = document.getElementById("lname");
    var dateField = document.getElementById("date");
    var emailField = document.getElementById("username");
    var emailField = document.getElementById("email");
    var passwordField = document.getElementById("password");
    var passwordField = document.getElementById("Confirm password")
    var passwordField = document.getElementById("Description");
    var passwordField = document.getElementById("How do I feel");
    var responseFname = document.getElementById("response-fname");
    var responseLname = document.getElementById("response-lname");
    var responsedate = document.getElementById("response-date");
    var responseusername = document.getElementById("response-username");
    var responseEmail = document.getElementById("response-email");
    var responsePass = document.getElementById("response-password");
    var responsePass = document.getElementById("response-Confirm password");
    var responsePass = document.getElementById("response-description");
    var responsePass = document.getElementById("response-How do I feel");

    if (fnameField == null || fnameField == "") {
        responseFname.innerHTML = "First Name cannot be empty";
        return false;
    } else if (lnameField == null || lnameField == "") {
        responseLname.innerHTML = "Last Name cannot be empty";
        return false;
    } else if (dateField == null || dateField == "") {
        responseLname.innerHTML = "This is not your birth date";
        return false;
    } else if (usernameField == null || usernameField == "") {
        responseusername.innerHTML = "Username cannot be empty";
        return false;
    } else if (emailField == null || emailField == "") {
        responseEmail.innerHTML = "Looks like this is not an email";
        return false;
    } else if (passwordField == null || passwordField == "") {
        responsePass.innerHTML = "Password cannot be empty";
        return false;
    } else if (Confirm passwordField == null || Confirm passwordField == "") {
        responsePass.innerHTML = "Confirm Password cannot be empty";
        return false;
    } else if (Description Field == null || DescriptionField == "") {
        responsePass.innerHTML = "Can you please tell me what is your description?";
        return false;
    } else if (Description Field == null || DescriptionField == "") {
        responsePass.innerHTML = "Can you please tell me what is your description?";
        return false;
}
