let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "Username cannot be blank");
    engine(email, 1, "Email cannpt be blank");
    engine(password, 2, "Password  cannot be blank");
 });
let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        //icon
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }else{
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        //icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
    }
};