function validateFormLogin() {
    let errorlogin = document.getElementById('errorlogin');
    errorlogin.style.display = 'none';
    let successmsg = document.getElementById('success');
    var username = document.forms["LoginForm"]["username"].value;
    var password = document.forms["LoginForm"]["password"].value;
    if (password == "" || username == "") {
        errorlogin.style.display = '';
        return false;
    } else {
        let url = "http://localhost:8088/api/v1/userLogin";
        console.log("hello hi")
        localStorage.setItem("username", username);
        var data = {
            "email": username,
            "password": password
        }
        $.ajax({               
            "url": url,
            "crossDomain": true,
            "data": JSON.stringify(data),
            "type": "POST",
            "dataType": 'json',
            "contentType": 'application/json',
            "success": function(data) {
                console.log("my data is" +data.response)
                //if (data.respone == "Valid User") {
                    console.log("successssss")
                    successmsg.innerText="Login Successful!"
                    errorlogin.style.display = '';
                    errorlogin.value = "Authenticated User!"
                    console.log("before html")
                    window.location.replace("products.html");
                    console.log("before html")
                    return true;
               // }
            },
            "error": function(response, error) {
                errorlogin.value = (data.response);
                return false;
            }
        });


    }
    return false;
}

function validateFormRegestration() {
    let errorRegestration = document.getElementById('errorRegestration');
    errorRegestration.style.display = 'none';
    var fname = document.forms["RegestrationForm"]["fname"].value;
    var lname = document.forms["RegestrationForm"]["lname"].value;
    var email = document.forms["RegestrationForm"]["email"].value;
    var password = document.forms["RegestrationForm"]["password"].value;
    if (password == "" || fname == "" || lname == "" || email == "") {
        errorRegestration.style.display = '';
        return false;
    } else {
        let url = "http://localhost:8088/api/v1/registration";
        let data = {
            "firstName": fname,
            "lastName": lname,
            "email": email,
            "password": password
        }
        jQuery.support.cors = true;
        $.ajax({            
            "url": url,
            "headers": {  'Access-Control-Allow-Origin': '*' },
            "crossDomain": true,
            "data": JSON.stringify(data),
            "type": "POST",
            "dataType": 'json',
            "contentType": 'application/json',
            "success": function(data) {
                if (data.response == "Registration Successful") {
                    successmsg.innerText="Registration Successful. Please login"
                    window.location.href = "move-to-home-page.html";
                    errorlogin.style.display = '';
                    errorlogin.value = "User Regestrated Successfully!"
                    return false;
                }
            },
            "error": function(response, error) {
                errorlogin.value = (data.response);
                return false;
            }
        });

    }
    return false;
}

if (document.getElementById("username") != null)
    document.getElementById("username").innerText = "Hi, " + localStorage.getItem("username");