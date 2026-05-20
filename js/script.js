// INTRO PAGE

const introPage = document.getElementById('introPage');
const mainContent = document.getElementById('mainContent');

setTimeout(() => {

    if(introPage && mainContent){

        introPage.classList.add('hide');
        mainContent.classList.add('show');

        setTimeout(() => {
            introPage.style.display = 'none';
        }, 1200);

    }

}, 10000);


// CURSOR

const cursor = document.querySelector(".cursor-dot");

document.addEventListener("mousemove", (e)=>{

    if(cursor){

        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";

    }

    const trail = document.createElement("div");

    trail.className = "trail";

    trail.style.left = e.clientX + "px";
    trail.style.top = e.clientY + "px";

    document.body.appendChild(trail);

    setTimeout(()=>{
        trail.remove();
    },600);

});


// HOVER LIFT EFFECT

const hoverItems = document.querySelectorAll(
".card, .btn, .shield, .nav-links a, .footer-links a"
);

hoverItems.forEach((item)=>{

    item.addEventListener("mouseenter", ()=>{

        item.style.transform = "translateY(-12px) scale(1.04)";

    });

    item.addEventListener("mouseleave", ()=>{

        item.style.transform = "translateY(0px) scale(1)";

    });

});


// SIGNUP FORM VALIDATION

const signupForm = document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",(e)=>{

e.preventDefault();

// INPUTS

const name = document.getElementById("name").value.trim();

const email = document.getElementById("email").value.trim();

const phone = document.getElementById("phone").value.trim();

const age = document.getElementById("age").value.trim();

const dob = document.getElementById("dob").value;

const password = document.getElementById("password").value;

const confirmPassword =
document.getElementById("confirmPassword").value;

const terms = document.getElementById("terms").checked;


// ERRORS

const nameError = document.getElementById("nameError");

const emailError = document.getElementById("emailError");

const phoneError = document.getElementById("phoneError");

const ageError = document.getElementById("ageError");

const dobError = document.getElementById("dobError");

const passError = document.getElementById("passError");

const confirmPassError =
document.getElementById("confirmPassError");

const termsError = document.getElementById("termsError");


// CLEAR

nameError.innerHTML = "";
emailError.innerHTML = "";
phoneError.innerHTML = "";
ageError.innerHTML = "";
dobError.innerHTML = "";
passError.innerHTML = "";
confirmPassError.innerHTML = "";
termsError.innerHTML = "";

let valid = true;


// NAME

const namePattern = /^[A-Za-z ]+$/;

if(!namePattern.test(name)){

    nameError.innerHTML =
    "Name should contain only letters";

    valid = false;

}


// EMAIL

const emailPattern =
/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!emailPattern.test(email)){

    emailError.innerHTML =
    "Enter valid email address";

    valid = false;

}


// PHONE

const phonePattern = /^[0-9]{10}$/;

if(!phonePattern.test(phone)){

    phoneError.innerHTML =
    "Phone number must contain 10 digits";

    valid = false;

}


// AGE

if(age < 18 || age > 100 || isNaN(age)){

    ageError.innerHTML =
    "Enter valid age";

    valid = false;

}


// DOB

if(dob === ""){

    dobError.innerHTML =
    "Select your date of birth";

    valid = false;

}


// PASSWORD

if(password.length < 8){

    passError.innerHTML =
    "Password must contain minimum 8 characters";

    valid = false;

}


// CONFIRM PASSWORD

if(confirmPassword === ""){

    confirmPassError.innerHTML =
    "Please confirm your password";

    valid = false;

}

else if(password !== confirmPassword){

    confirmPassError.innerHTML =
    "Passwords do not match";

    valid = false;

}


// TERMS

if(!terms){

    termsError.innerHTML =
    "Please accept Terms & Conditions";

    valid = false;

}


// SUCCESS

if(valid){

    alert(
    "Secure Account Created Successfully ✅"
    );

    signupForm.reset();

}

});

}


// LOGIN VALIDATION

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const username = document.getElementById("username").value;

const email = document.getElementById("email").value;

const password = document.getElementById("password").value;

const userError = document.getElementById("userError");

const emailError = document.getElementById("emailError");

const passError = document.getElementById("passError");


// CLEAR

userError.innerHTML = "";
emailError.innerHTML = "";
passError.innerHTML = "";

let valid = true;


// USERNAME

if(username !== "admin"){

    userError.innerHTML = "Invalid username";

    valid = false;

}


// EMAIL

if(email !== "admin@gmail.com"){

    emailError.innerHTML =
    "Incorrect email address";

    valid = false;

}


// PASSWORD

if(password !== "12345"){

    passError.innerHTML =
    "Wrong password";

    valid = false;

}


// SUCCESS

if(valid){

    alert("Login Successful ✅");

    // window.location.href = "dashboard.html";

}

});

}


// FORGOT PASSWORD

const forgotBtn = document.getElementById("forgotBtn");

if(forgotBtn){

forgotBtn.addEventListener("click",(e)=>{

e.preventDefault();

alert(
"Password reset link has been sent to your registered email."
);

});

}
// ADD THIS IN script.js

// TRANSACTION LIMIT

const limitRange = document.getElementById("limitRange");

const limitText = document.getElementById("limitText");

if(limitRange){

    limitRange.addEventListener("input",()=>{

        limitText.innerHTML =
        "₹" + Number(limitRange.value).toLocaleString();

    });

}

// CARD LOCK

const lockBtn = document.getElementById("lockBtn");

if(lockBtn){

    lockBtn.addEventListener("click",()=>{

        lockBtn.innerHTML = "Card Locked 🔒";

        lockBtn.style.background =
        "linear-gradient(135deg,#ef4444,#b91c1c)";

        alert(
            "Your credit card has been secured successfully."
        );

    });

}

// FRAUD DETECTION STATUS

const fraudStatus = document.getElementById("fraudStatus");

const fraudToggle = document.getElementById("fraudToggle");

if(fraudToggle){

    fraudToggle.addEventListener("change",()=>{

        if(fraudToggle.checked){

            fraudStatus.innerHTML =
            "AI Monitoring Active • No suspicious transactions detected";

        }

        else{

            fraudStatus.innerHTML =
            "AI Fraud Detection Disabled";

        }

    });

}