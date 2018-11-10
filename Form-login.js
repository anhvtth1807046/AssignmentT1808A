var btnRegister = document.forms['form-register']['btn-submit'];
btnRegister.onclick = function () {

    var name = document.forms["form-register"]["name"];
    var msgName = name.nextElementSibling;

    if (name == null || name.value.length == 0) {
        msgName.innerHTML = "* vui lòng nhập họ và tên đầy đủ ";
        msgName.classList.remove("hidden-text");
    }else if(name.value.length > 50){
        msgName.innerHTML = "* toi da 50 ky tu";
    } else {
        msgName.innerHTML = " tên hợp  ";
        msgName.classList.remove("hidden-text");
        msgName.classList.remove("danger-text");
        msgName.classList.add("success-text");
    }


    var phone = document.forms["form-register"]["phone"];
    var msphone = phone.nextElementSibling;
    if (phone == null || phone.value.length == 0) {
        msphone.innerHTML = "* vui lòng nhập số điện thoại  ";
        msphone.classList.remove("hidden-text");
    } else if (phone.value.length > 11 && phone.value.length < 10) {
        msphone.innerHTML = "* số điện thoại không hợp lệ  ";
        msphone.classList.remove("hidden-text");
    }

    else {
        msphone.innerHTML = " số điện thoại hợp lệ ";
        msphone.classList.remove("hidden-text");
        msphone.classList.remove("danger-text");
        msphone.classList.add("success-text");
    }

    var email = document.forms["form-register"]["email"];
    var msgemail = email.nextElementSibling;
    var n = email.value.includes("@");
    if (email == null || email.value.length == 0) {
        msgemail.innerHTML = "*vui lòng nhập email";
        msgemail.classList.remove("hidden-text");
    }
    else if (n == false) {
        msgemail.innerHTML = " Email không hợp lệ .";
        msgemail.classList.remove("hidden-text");
    }
    else {
        msgemail.innerHTML = " Email hợp lệ .";
        msgemail.classList.remove("hidden-text");
        msgemail.classList.remove("danger-text");
        msgemail.classList.add("success-text");
    }

}