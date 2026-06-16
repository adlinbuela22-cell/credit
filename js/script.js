const introPage = document.getElementById("introPage");
const mainContent = document.getElementById("mainContent");

if(!sessionStorage.getItem("introShown")){

    setTimeout(() => {

        introPage.classList.add("hide");
        mainContent.classList.add("show");

        setTimeout(() => {
            introPage.style.display = "none";
        },1200);

        sessionStorage.setItem("introShown","true");

    },2000);

}else{

    introPage.style.display = "none";
    mainContent.classList.add("show");

}


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


// HOVER EFFECT

const hoverItems = document.querySelectorAll(
".card, .btn, .shield, .nav-links a, .footer-links a"
);

hoverItems.forEach((item)=>{

    item.addEventListener("mouseenter", ()=>{

        item.style.transform =
        "translateY(-12px) scale(1.04)";

    });

    item.addEventListener("mouseleave", ()=>{

        item.style.transform =
        "translateY(0px) scale(1)";

    });

});


// SIGNUP FORM VALIDATION

const signupForm = document.getElementById("signupForm");

if(signupForm){

signupForm.addEventListener("submit",(e)=>{

e.preventDefault();


// INPUTS

const name =
document.getElementById("name").value.trim();

const email =
document.getElementById("email").value.trim();

const phone =
document.getElementById("phone").value.trim();

const age =
document.getElementById("age").value.trim();

const dob =
document.getElementById("dob").value;

const password =
document.getElementById("password").value;

const confirmPassword =
document.getElementById("confirmPassword").value;

const terms =
document.getElementById("terms").checked;


// ERRORS

const nameError =
document.getElementById("nameError");

const emailError =
document.getElementById("emailError");

const phoneError =
document.getElementById("phoneError");

const ageError =
document.getElementById("ageError");

const dobError =
document.getElementById("dobError");

const passError =
document.getElementById("passError");

const confirmPassError =
document.getElementById("confirmPassError");

const termsError =
document.getElementById("termsError");


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

try{

const response = await fetch(
"http://127.0.0.1:5000/register",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
name,
email,
phone,
password
})
}
);

const data = await response.json();

if(data.success){

alert("Account Created Successfully ✅");

signupForm.reset();

window.location.href="login.html";

}
else{

alert(data.message);

}

}
catch(error){

alert("Backend Connection Failed");

}

}
});

}


// LOGIN VALIDATION

const loginForm =
document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",(e)=>{

e.preventDefault();

const username =
document.getElementById("username").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const userError =
document.getElementById("userError");

const emailError =
document.getElementById("emailError");

const passError =
document.getElementById("passError");


// CLEAR

userError.innerHTML = "";
emailError.innerHTML = "";
passError.innerHTML = "";

let valid = true;


// USERNAME
if(valid){

try{

const response = await fetch(
"http://127.0.0.1:5000/login",
{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
password
})
}
);

const data = await response.json();

if(data.success){

alert("Login Successful ✅");

window.location.href="dashboard.html";

}
else{

alert("Invalid Credentials");

}

}
catch(error){

alert("Backend Connection Failed");

}

}
}

// TRANSACTION LIMIT

const limitRange =
document.getElementById("limitRange");

const limitText =
document.getElementById("limitText");

if(limitRange){

    limitRange.addEventListener("input",()=>{

        limitText.innerHTML =
        "₹" +
        Number(limitRange.value).toLocaleString();

    });

}


// CARD LOCK

const lockBtn =
document.getElementById("lockBtn");

if(lockBtn){

    lockBtn.addEventListener("click",()=>{

        lockBtn.innerHTML =
        "Card Locked 🔒";

        lockBtn.style.background =
        "linear-gradient(135deg,#ef4444,#b91c1c)";

        alert(
        "Your credit card has been secured successfully."
        );

    });

}


// FRAUD DETECTION STATUS

const fraudStatus =
document.getElementById("fraudStatus");

const fraudToggle =
document.getElementById("fraudToggle");

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


// IDENTITY PROTECTION BUTTON

const enableBtn =
document.getElementById("enableBtn");

if(enableBtn){

    enableBtn.addEventListener("click",()=>{

        enableBtn.innerHTML =
        "✅ Identity Protection Enabled";

        enableBtn.style.background =
        "linear-gradient(135deg,#22c55e,#15803d)";

        alert(
        "Identity Protection Enabled Successfully ✅"
        );

    });

}
// DASHBOARD

function refreshDashboard(){

    const transactions =
    document.getElementById("transactions");

    const frauds =
    document.getElementById("frauds");

    const status =
    document.getElementById("status");

    const risk =
    document.getElementById("risk");

    if(transactions){

        transactions.innerHTML =
        Math.floor(Math.random()*5000);

    }

    if(frauds){

        frauds.innerHTML =
        Math.floor(Math.random()*50);

    }

    if(status){

        status.innerHTML =
        "🟢 Active";

    }

    if(risk){

        risk.innerHTML =
        "Low Risk";

    }

    alert("Dashboard Updated Successfully ✅");

}
function addTransaction(){

    const table =
    document.querySelector(".transaction-table");

    const row = table.insertRow(-1);

    row.innerHTML = `
    <td>Today</td>
    <td>₹50,000</td>
    <td>Mumbai</td>
    <td class="danger">Suspicious ⚠️</td>
    `;

    alert(
    "New Transaction Added Successfully"
    );

}


const cardForm =
document.getElementById("cardForm");

if(cardForm){

cardForm.addEventListener("submit",(e)=>{

e.preventDefault();

const cardName =
document.getElementById("cardName").value.trim();

const cardNumber =
document.getElementById("cardNumber").value.trim();

const expiry =
document.getElementById("expiry").value.trim();

const cvv =
document.getElementById("cvv").value.trim();

const limit =
document.getElementById("limit").value.trim();

document.getElementById("nameError").innerHTML="";
document.getElementById("cardError").innerHTML="";
document.getElementById("expiryError").innerHTML="";
document.getElementById("cvvError").innerHTML="";
document.getElementById("limitError").innerHTML="";

let valid = true;

/* NAME */

if(!/^[A-Za-z ]+$/.test(cardName)){

document.getElementById("nameError").innerHTML =
"Enter valid name";

valid = false;

}

/* CARD */

if(!/^[0-9]{16}$/.test(cardNumber)){

document.getElementById("cardError").innerHTML =
"Card number must contain 16 digits";

valid = false;

}

/* EXPIRY */

if(!/^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(expiry)){

document.getElementById("expiryError").innerHTML =
"Format MM/YY";

valid = false;

}

/* CVV */

if(!/^[0-9]{3}$/.test(cvv)){

document.getElementById("cvvError").innerHTML =
"CVV must contain 3 digits";

valid = false;

}

/* LIMIT */

if(limit <= 0){

document.getElementById("limitError").innerHTML =
"Enter valid credit limit";

valid = false;

}

if(valid){

document.getElementById("cardPreview").style.display =
"block";

document.getElementById("showName").innerHTML =
cardName;

document.getElementById("showNumber").innerHTML =
"**** **** **** " + cardNumber.slice(-4);

document.getElementById("showExpiry").innerHTML =
"Expiry : " + expiry;

alert("Card Added Successfully ✅");

}

});

}

function lockCard(){

alert("Card Locked Successfully 🔒");

}

function reportLost(){

alert("Lost Card Report Submitted 🚨");

}
/* AI RISK ANALYSIS */

const analyzeBtn =
document.getElementById("analyzeBtn");

if(analyzeBtn){

analyzeBtn.addEventListener("click",()=>{

const score =
Math.floor(Math.random()*100)+1;

const riskScore =
document.getElementById("riskScore");

const aiStatus =
document.getElementById("aiStatus");

const locationRisk =
document.getElementById("locationRisk");

const deviceRisk =
document.getElementById("deviceRisk");

riskScore.innerHTML = score + "%";

if(score >= 70){

locationRisk.innerHTML =
"High Risk 🚨";

deviceRisk.innerHTML =
"Medium Risk ⚠️";

aiStatus.innerHTML =
"Fraud probability is HIGH. Transaction flagged.";

}

else if(score >= 40){

locationRisk.innerHTML =
"Medium Risk ⚠️";

deviceRisk.innerHTML =
"Low Risk ✅";

aiStatus.innerHTML =
"Suspicious activity detected. Review recommended.";

}

else{

locationRisk.innerHTML =
"Low Risk ✅";

deviceRisk.innerHTML =
"Low Risk ✅";

aiStatus.innerHTML =
"No suspicious activity detected.";

}

});

}
/* SPENDING ANALYTICS */

const analyzeSpendingBtn =
document.getElementById("analyzeSpendingBtn");

if(analyzeSpendingBtn){

analyzeSpendingBtn.addEventListener("click",()=>{

const food =
Math.floor(Math.random()*10000)+1000;

const shopping =
Math.floor(Math.random()*15000)+2000;

const travel =
Math.floor(Math.random()*8000)+1000;

const total =
food + shopping + travel;

document.getElementById("foodSpend").innerHTML =
"₹" + food.toLocaleString();

document.getElementById("shoppingSpend").innerHTML =
"₹" + shopping.toLocaleString();

document.getElementById("travelSpend").innerHTML =
"₹" + travel.toLocaleString();

document.getElementById("totalSpend").innerHTML =
"₹" + total.toLocaleString();

let highest = Math.max(food,shopping,travel);

let category = "";

if(highest === food){
category = "Food";
}
else if(highest === shopping){
category = "Shopping";
}
else{
category = "Travel";
}

document.getElementById("highestCategory").innerHTML =
category + " - ₹" + highest.toLocaleString();

});

}
/* NOTIFICATION CENTER */

const addNotificationBtn =
document.getElementById("addNotificationBtn");

const notificationsList =
document.getElementById("notificationsList");

const notifications = [

{
title:"🚨 Suspicious Transaction",
message:"₹75,000 transaction detected from unknown location."
},

{
title:"🔑 New Login",
message:"Your account was accessed from a new device."
},

{
title:"💳 Card Activity",
message:"Online payment completed successfully."
},

{
title:"🛡 Security Update",
message:"Two-factor authentication enabled."
},

{
title:"🤖 AI Risk Alert",
message:"Medium-risk transaction detected."
}

];

if(addNotificationBtn){

addNotificationBtn.addEventListener("click",()=>{

    const randomNotification =
    notifications[
    Math.floor(Math.random()*notifications.length)
    ];

    const card =
    document.createElement("div");

    card.classList.add("notification-card");

    card.innerHTML = `

        <h2>${randomNotification.title}</h2>

        <p>${randomNotification.message}</p>

    `;

    notificationsList.prepend(card);

});

}
/* FRAUD REPORT CENTER */

const fraudReportForm =
document.getElementById("fraudReportForm");

if(fraudReportForm){

fraudReportForm.addEventListener("submit",(e)=>{

e.preventDefault();

const transactionId =
document.getElementById("transactionId")
.value
.trim();

const amount =
document.getElementById("amount")
.value
.trim();

const reason =
document.getElementById("reason")
.value;

const supportReply =
document.getElementById("supportReply");

document.getElementById("txnError")
.innerHTML = "";

document.getElementById("amountError")
.innerHTML = "";

document.getElementById("reasonError")
.innerHTML = "";

let valid = true;

/* VALID TRANSACTIONS */

const validTransactions = [

"TXN123456",
"TXN234567",
"TXN345678"

];

/* TRANSACTION ID */

if(!validTransactions.includes(transactionId)){

document.getElementById("txnError")
.innerHTML =
"Transaction ID not found";

valid = false;

}

/* AMOUNT */

if(amount < 100 || amount > 100000){

document.getElementById("amountError")
.innerHTML =
"Enter amount between ₹100 and ₹100000";

valid = false;

}

/* REASON */

if(reason === ""){

document.getElementById("reasonError")
.innerHTML =
"Please select a reason";

valid = false;

}

/* SUCCESS */

if(valid){

supportReply.innerHTML =

`Thank you for reporting transaction
<b>${transactionId}</b>.

Our fraud investigation team has received
your complaint regarding ₹${amount}.

Case Status :
Under Investigation 🔍

Estimated Review Time :
24 - 48 Hours

You will receive updates through the
Notification Center.`;

alert(
"Fraud Report Submitted Successfully ✅"
);

fraudReportForm.reset();

}

});

}
