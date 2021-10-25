import { isLogin, logout, getUser} from "./helpers.js";

const loginBtnEl = document.getElementById("loginBtn");
const logoutBtnEl = document.getElementById("confirmLogout");
const accountMenuEl = document.getElementById("account-menu");

const checkLogin = () => {
    if(isLogin()) {
        let user = getUser();
        loginBtnEl.classList.add('d-none');
        accountMenuEl.classList.remove('d-none');
    }
};

window.onload = checkLogin();

// Login Button Click
loginBtnEl.addEventListener('click', () => {window.location.href = "../pages/login.html"})

// Logout Button Click
logoutBtnEl.addEventListener('click', () => {
    logout();
});