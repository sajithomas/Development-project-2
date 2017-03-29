function ValidationEvent() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
// Regular Expression For Email
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    if (name != '' && email != '' && contact != '') {
        if (email.match(emailReg)) {
            if (contact.length == 10) {
                alert("Validation is successful");
                return true;
            } else {
                alert("The Contact No. must be at least 10 digit long!");
                return false;
            }
        }
        else {
            alert("Invalid Email Address");
            return false;
        }
    } else {
        alert("All fields are required");
        return false;
    }
}