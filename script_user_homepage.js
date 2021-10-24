
var btn_add_new_acc_debit = document.getElementById("btn_add_new_acc_debit");
var btn_add_new_acc_credit = document.getElementById("btn_add_new_acc_credit");
var right_div = document.getElementById("right_div");
var left_div = document.getElementById("left_div");
var hr_vertical = document.getElementById("hr_vertical");
var button_cancel_add_acc = document.getElementById("button_cancel_add_acc");

function showAddAccountDiv() {
    console.log("showing the add account div (right div)");
    right_div.style.visibility = "visible";
    right_div.style.width = "30%";
    hr_vertical.style.visibility = "visible";
    left_div.style.width = "70%";
}

function hideAddAccountDiv() {
    console.log("hiding the add account div (right div)");
    right_div.style.visibility = "hidden";
    right_div.style.width = "0%";
    hr_vertical.style.visibility = "hidden";
    left_div.style.width = "100%";
}

btn_add_new_acc_debit.onclick = showAddAccountDiv;
btn_add_new_acc_credit.onclick = showAddAccountDiv;
button_cancel_add_acc.onclick = hideAddAccountDiv;