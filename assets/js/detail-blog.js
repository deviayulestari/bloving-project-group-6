import dataBlogs from "./data-blogs.js";

localStorage.setItem("path", "../pages/detail-blog.html")

// logic content blog get by id start
let idBlog = 9
const queryString = window.location.search;
console.log(queryString);
if(queryString){
    idBlog = queryString.substring(4);
}

const comments = localStorage.getItem(`comments_${idBlog}`);
const commentList = document.querySelector(".comment-list");

if(comments){
    const arrComment = JSON.parse(comments);
    arrComment.forEach(comment => {
        const list = `
        <b>${comment.username}</b>
        <p>${comment.comment}</p>`

        commentList.insertAdjacentHTML("afterbegin", list);
    })
}

const currBlog = dataBlogs[idBlog-1];
console.log(currBlog);

const elBlogContent = document.querySelector(".blog-content");
const elImgBlog = document.querySelector(".image-blog");
const elIcons = document.querySelector(".icons");
const elAuthor = document.querySelector(".author");
const elDate = document.querySelector(".date");
const elBlogTitle = document.querySelector(".blog-title");
const elBlogText = document.querySelector(".text-blog")

elImgBlog.setAttribute("src", currBlog.img_url);
elAuthor.innerHTML = "by " + currBlog.author;
elDate.innerHTML = currBlog.date;
elBlogTitle.innerHTML = currBlog.title;
elBlogText.innerHTML = currBlog.text;
// logic content blog get by id end


// Logic fitur recommended blog start
const elRecBlog = document.querySelector(".recommended-blog");
const elRecCards = document.querySelector(".recomendation-card");

dataBlogs.map((recommended, i)=>{
    if(i > 5){
        const elRecommendedCard = `
        <div class="card-body">
            <h5 class="card-title">${recommended.title}</h5>
            <a href="${"detail-blog.html?id="+ recommended.id}" class="recommended-btn">Read More</a>
        </div>
        `
        elRecCards.insertAdjacentHTML('beforeend', elRecommendedCard);
    }
})

elRecBlog.appendChild(elRecCards);
// Logic fitur recommended blog end


// Logic fitur other blog start
const elOtherBlogsCards = document.querySelector(".other-blogs");

dataBlogs.map((other, j)=>{
    if(j > 2 && j < 6){
        const elOtherBlog = `
        <div class="card-body">
            <h5 class="card-title">${other.title}</h5>
            <a href="${"detail-blog.html?id="+ other.id}" class="highlight-btn">Read More</a>
        </div>
        `
        elOtherBlogsCards.insertAdjacentHTML('beforeend', elOtherBlog);
    }
})

elRecBlog.appendChild(elOtherBlogsCards);
// Logic fitur other blog end


//logic fitur comment start
const commentInput = document.querySelector(".form-control");
const commentButton = document.querySelector(".comment-btn");

const prevComment = localStorage.getItem("comment");

if(prevComment){
    commentInput.value = prevComment;
}

commentButton.addEventListener("click", addComment);

function addComment(e){
    e.preventDefault();
    
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    
    const newComment = document.createElement("p");
    newComment.innerHTML = commentInput.value;
    console.log(commentInput.value);
    newComment.classList.add("comment-item");
    
    
    if(!localStorage.getItem("login")){
        localStorage.setItem("comment", commentInput.value); 
        console.log("detail-blog");
        window.location.href = "../pages/login.html";
    } else {
        const dataLogin = localStorage.getItem("login");
        const dataUser = localStorage.getItem("users");
        let username = "";
        if(dataUser){
            const arrUser = JSON.parse(dataUser);
            arrUser.forEach(user => {
                if(user.email === dataLogin){
                    username = user.name;
                } 
            });
        }
        console.log(username);

        
        const comment = {
            username: username,
            comment: commentInput.value
        }

        console.log(comments);
        if(comments){
            console.log(comments, "< log 124");
            const arrComment = JSON.parse(comments);
            arrComment.push(comment);
            // const newArrComment = [comment, ...arrComment];
            localStorage.setItem("comments_" + idBlog, JSON.stringify(arrComment));
            
        } else {
            console.log(comments, "belum ada komen");
            localStorage.setItem("comments_" + idBlog, JSON.stringify([comment]));
        }

        // commentDiv.appendChild(newComment);
        // commentList.appendChild(commentDiv);
        // commentInput.value = "";
        window.location.reload();
    }
}



//logic fitur comment end