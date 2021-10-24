
var li_asset = document.getElementById("li_asset");
var li_liability = document.getElementById("li_liability");
var li_equity = document.getElementById("li_equity");
var li_income = document.getElementById("li_income");
var li_expense = document.getElementById("li_expense");

var user_li_asset = document.getElementById("user_li_asset");
var user_li_liability = document.getElementById("user_li_liability");
var user_li_equity = document.getElementById("user_li_equity");
var user_li_income = document.getElementById("user_li_income");
var user_li_expense = document.getElementById("user_li_expense");

var div_one = document.getElementsByClassName("one");
var div_two = document.getElementsByClassName("two");
var div_three = document.getElementsByClassName("three");
var div_four = document.getElementsByClassName("four");
var div_five = document.getElementsByClassName("five");

function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById('password').value;

    console.log(email, password);
    if (email === "tarun@gmail.com" && password === "tarun")
        window.location.href = "./user_homepage.html";
    else {
        alert("else hitted!");
    }
}

function signup() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("signupemail").value;
    var pass = document.getElementById("signuppassword").value;
    var passCn = document.getElementById("signuppasswordconfirm").value;

    console.log(fname, lname, email, pass, passCn);

    document.getElementById("fname").style.borderWidth = "1px";
    document.getElementById("fname").style.borderColor = "#232432";
    document.getElementById("fname").style.borderStyle = "solid";

    if (fname.trim() === "" || lname.trim() === "" || email.trim() === "" || pass.trim() === "") {
        alert("Enter all details");
    }
    else if (pass !== passCn) {
        alert("Passwords do no match");
    } 
    else {
        alert("logged In");
    }
}

li_asset.onmouseover = function() {
    document.getElementById("account_image").src = "./images/img1.jpeg";
}
li_liability.onmouseover = function() {
    document.getElementById("account_image").src = "./images/img2.jpeg";
}
li_equity.onmouseover = function() {
    document.getElementById("account_image").src = "./images/img3.jpeg";
}
li_income.onmouseover = function() {
    document.getElementById("account_image").src = "./images/img4.jpeg";
}
li_expense.onmouseover = function() {
    document.getElementById("account_image").src = "./images/img5.jpeg";
}

// Adding Date and Time to footer
setInterval(function() {
    let curDate = new Date();
    let hh = curDate.getHours().toString().padStart(2, 0);
    let mm = curDate.getMinutes().toString().padStart(2, 0);
    let ss = curDate.getSeconds().toString().padStart(2, 0);
    let DD = curDate.getDate().toString().padStart(2, 0);
    let MM = (curDate.getMonth() + 1).toString().padStart(2, 0);
    let YYYY = curDate.getFullYear().toString();
    var dateAndTime = `Time: ${hh}:${mm}:${ss} <br> Date: ${DD}/${MM}/${YYYY}`;
    // document.getElementById("footerDateTime").innerHTML = dateAndTime;
}, 1000);

document.getElementById("evaluate_asset_net_value").onclick = function() {
    var asset_value = document.getElementById("asset_value").value;
    var asset_asso_liability = document.getElementById("asset_asso_liability").value;
    var asset_name = document.getElementById("asset_name").value;
    var asset_net_value = asset_value - asset_asso_liability;
    document.getElementById("show_asset_name").innerHTML = asset_name;
    document.getElementById("show_net_value").innerHTML = asset_net_value;
}

// user homepage account manager

function setAllInvisible() {
    div_one.style.visibility = "hidden";
    div_two.style.visibility = "hidden";
    div_three.style.visibility = "hidden";
    div_four.style.visibility = "hidden";
    div_five.style.visibility = "hidden";
}

user_li_asset.onclick = function() {
    setAllInvisible();
    div_one.style.visibility = "visible";
    console.log("one");
}

user_li_liability.onclick = function() {
    setAllInvisible();
    div_two.style.visibility = "visible";
    console.log("two");
}

user_li_equity.onclick = function() {
    setAllInvisible();
    div_three.style.visibility = "visible";
    console.log("three");
}

user_li_income.onclick = function() {
    setAllInvisible();
    div_four.style.visibility = "visible";
    console.log("four");
}

user_li_expense.onclick = function() {
    setAllInvisible();
    div_five.style.visibility = "visible";
    console.log("five");
}
