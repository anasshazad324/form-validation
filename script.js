


function formValidation (){
    let username = document.getElementById("username").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    // ===Error Handling = (Reset Error)==========

        document.getElementById("username").style.border = ""
        document.getElementById("usernameError").innerHTML = ""

        document.getElementById("email").style.border = ""
        document.getElementById("emailError").innerHTML = ""

        document.getElementById("password").style.border = ""
        document.getElementById("passwordError").innerHTML = ""
    // ==============


    // =====If Value Empty (Condition Statement IF/Else)================

    let isValid = true

    if(username == ""){
        document.getElementById("username").style.border = "0.5px solid red"
        document.getElementById("usernameError").innerHTML = "This field is required"
        isValid = false
    }


    if(email == ""){
        document.getElementById("email").style.border = "0.5px solid red"
        document.getElementById("emailError").innerHTML = "This field is required"
        isValid = false
    }


    if(password == ""){
        document.getElementById("password").style.border = "0.5px solid red"
        document.getElementById("passwordError").innerHTML = "This field is required"
        isValid = false
    }

    if(isValid){
        
        alert("Your Registration has been successfully")

        document.getElementById("username").value = ""
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""





    }


}