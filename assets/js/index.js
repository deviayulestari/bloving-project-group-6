import { isLogin, logout, getUser} from "./helpers.js";
import dataBlog from "./data-blogs.js";

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


//logic latest blog card
const elLatestBlog = document.querySelector(".latest-blog")

dataBlog.forEach((latest, id)=>{
    if(id < 3){
    const elCol = `
        <div class="col-lg-4 col-sm-12">
            <div class="box p-3 m-2">
                <div class="image">
                    <img src="${latest.img_url}" class="w-100 h-100"  alt="Blog 1 Image">
                    </div>
                <div class="content p-2">
                    <h3>${latest.title}</h3>
                    <a href="${'../pages/detail-blog.html?id=' + latest.id}" class="link-btn">read more</a>
                    <div class="icons">
                        <a href="#"><i class="fas fa-user"></i>by ${latest.author}</a>
                        <a href="#"><i class="fas fa-calendar"></i>${latest.date}</a>
                    </div>
                </div>
            </div>
        </div>
        `
        elLatestBlog.insertAdjacentHTML('beforeend', elCol);
    }
    console.log(elLatestBlog);
})