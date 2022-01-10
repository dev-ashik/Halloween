let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
}

// scroll spy 
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.header .navbar a');

window.onscroll = () =>{
  searchForm.classList.remove('active');
  navbar.classList.remove('active');

  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }

  section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 200;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(link =>{
        link.classList.remove('active');
        document.querySelector('.header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

};

window.onload = () =>{
  if(window.scrollY > 0){
    document.querySelector('.header').classList.add('active');
  }else{
    document.querySelector('.header').classList.remove('active');
  }
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  loop:true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".products-slider", {
  spaceBetween: 20,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  grabCursor:true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});




// onmouseover function start
function homeBlock() {
  document.getElementById('home').style.display = "block";
  document.getElementById('products').style.display = "none";
  document.getElementById('about').style.display = "none";
  document.getElementById('arrivals').style.display = "none";
  document.getElementById('contact').style.display = "none";
  document.getElementById('blogs').style.display = "none";

} 
// function homeNone() {
//     document.getElementById('home').style.display = "none";
// }
function productsBlock() {
  document.getElementById('home').style.display = "none";
  document.getElementById('products').style.display = "block";
  document.getElementById('about').style.display = "none";
  document.getElementById('arrivals').style.display = "none";
  document.getElementById('contact').style.display = "none";
  document.getElementById('blogs').style.display = "none";
} 
function aboutBlock() {
  document.getElementById('home').style.display = "none";
  document.getElementById('products').style.display = "none";
  document.getElementById('about').style.display = "block";
  document.getElementById('arrivals').style.display = "none";
  document.getElementById('contact').style.display = "none";
  document.getElementById('blogs').style.display = "none";
} 
function arrivalsBlock() {
  document.getElementById('home').style.display = "none";
  document.getElementById('products').style.display = "none";
  document.getElementById('about').style.display = "none";
  document.getElementById('arrivals').style.display = "block";
  document.getElementById('contact').style.display = "none";
  document.getElementById('blogs').style.display = "none";
} 
function contactBlock() {
  document.getElementById('home').style.display = "none";
  document.getElementById('products').style.display = "none";
  document.getElementById('about').style.display = "none";
  document.getElementById('arrivals').style.display = "none";
  document.getElementById('contact').style.display = "block";
  document.getElementById('blogs').style.display = "none";
} 
function blogsBlock() {
  document.getElementById('home').style.display = "none";
  document.getElementById('products').style.display = "none";
  document.getElementById('about').style.display = "none";
  document.getElementById('arrivals').style.display = "none";
  document.getElementById('contact').style.display = "none";
  document.getElementById('blogs').style.display = "block";
} 

