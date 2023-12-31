let closer = document.querySelector('#closer');
let slides = document.querySelectorAll(".home .slides-container .slide");
let index = 0;
closer.onclick = () => {
    closer.style.display = 'none';
    navbar.classList.remove('active'); 
    cart.classList.remove('active'); 
    login.classList.remove('active'); 
    likelist.classList.remove('active');
    
    // likelist1.classList.remove('active'); 
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    closer.style.display = "block";
    navbar.classList.toggle('active'); 

}


let cart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () => {
    closer.style.display = "block";
    cart.classList.toggle("active");
};

document.querySelector('#footermycart').onclick = () => {
    closer.style.display = "block";
    cart.classList.toggle("active");
};


let likelist = document.querySelector(".like-cart");
document.querySelector("#like-btn").onclick = () => {
  closer.style.display = "block";
  likelist.classList.toggle("active");
};



document.querySelector("#footerwishlist").onclick = () => {
  closer.style.display = "block";
  likelist.classList.toggle("active");
};



let login = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () => {
    closer.style.display = "block";
    login.classList.toggle("active");
}




// let account = document.querySelector(".Account");
// document.querySelector("#login-btn").onclick = () => {
//   closer.style.display = "block";
//   // login.classList.toggle("active");
//   account.classList.toggle("active");
// };


let searchForm = document.querySelector('.header .search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
}



function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}
function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}