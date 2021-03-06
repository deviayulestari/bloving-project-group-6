import dataBlogs from "./data-blogs.js";

localStorage.setItem("path", "../pages/blogs.html");

const elListBlog = document.querySelector(".list-blog")

dataBlogs.forEach((blog, index)=>{
    if(index < 9){
        const elCol = `
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="box p-3 mb-5">
                <div class="image">
                    <img src="${blog.img_url}" class="w-100 h-100"  alt="Blog 1 Image">
                    </div>
                <div class="content p-2">
                    <div class="title"> 
                        <h3>${blog.title}</h3>
                        <a href="${'detail-blog.html?id=' + blog.id}" class="link-btn">read more</a>
                    </div>
                    <div class="icons">
                        <a href="#"><i class="fas fa-user"></i>by ${blog.author}</a>
                        <a href="#"><i class="fas fa-calendar"></i>${blog.date}</a>
                    </div>
                </div>
            </div>
        </div>
        `
        elListBlog.insertAdjacentHTML('beforeend', elCol)
    // console.log(elCol);
    }
})


// Logic fitur hottest blog start
const elHottest = document.querySelector(".hottest");
const elCards = document.querySelector(".card-hottest");

dataBlogs.map((hot, index)=>{
    if(index < 3){
        const elHottestCard = `
        <div class="card-body">
            <h5 class="card-title">${hot.title}</h5>
            <a href="${'detail-blog.html?id=' + hot.id}" class="highlight-btn">Read More</a>
        </div>
        `

        elCards.insertAdjacentHTML('beforeend', elHottestCard);
    }
})

elHottest.appendChild(elCards);
// Logic fitur hottest blog end



