
/**
 * descriptons: form validation function
 * @param {*}  
 */
function formValidation() {
    const fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let email = document.getElementById("emailaddress").value;
    let phone = document.getElementById("phonenumber").value;
    let gender = document.forms.contact.gender.value;
    let country=document.forms.contact.country.value;
   



    // validation fro first name
    var namePattern = /^[a-zA-Z\s-]+$/;
    if (fname.match(namePattern)) {
        document.getElementById("fname").style.display = "none";

    }
    else if(fname==="") {
        document.getElementById("fname").style.display = "block";
        document.getElementById('fname').innerHTML = "*please enter the name"

    }
    else{
        document.getElementById("fname").style.display = "block";
        document.getElementById('fname').innerHTML = "*please enter the valid name"
    }

    // validation for last name
    
    if (lname.match(namePattern)) {
        document.getElementById("lname").style.display = "none";

    }
    else if(lname==""){
        document.getElementById("lname").style.display = "block";
        document.getElementById('lname').innerHTML = "*please enter the last name"
    }
    else{
        document.getElementById("lname").style.display = "block";
        document.getElementById('lname').innerHTML = "*please enter the valid last name"
    }
   

    // validation for email
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
        document.getElementById("email").style.display = "none";

    }
    else if(email=="") {
        document.getElementById("email").style.display = "block";
        document.getElementById('email').innerHTML = "*please enter the email"
    }
    else{
        document.getElementById("email").style.display = "block";
        document.getElementById('email').innerHTML = "*please enter the valid email"
    }
    // validation for phone number
    var phoneNum = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    if (phone.match(phoneNum)) {
        document.getElementById("phone").style.display = "none";

    }
    else if(phone==""){
        document.getElementById("phone").style.display = "block";
        document.getElementById('phone').innerHTML = "*please enter the phone number"
    }
    else {
        document.getElementById("phone").style.display = "block";
        document.getElementById('phone').innerHTML = "*please enter the valid phone number"
    }
    //validation for gender
    if (gender == "") {
        document.getElementById("gender").style.display = "block";
        document.getElementById('gender').innerHTML = "*please select the gender"
    }
    if (gender != "") {
        document.getElementById("gender").style.display = "none";


    }

if(country ==="#"){
    document.getElementById("countries").style.display = "block";
    document.getElementById('countries').innerHTML = "*please select the country"
}
else{

}



}



