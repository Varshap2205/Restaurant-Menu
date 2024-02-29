let menu=document.querySelector('#bars');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.getElementById('search').onclick=()=>{
    document.getElementById('search-form').classList.toggle('active');

}

document.getElementById('close').onclick=()=>{
    document.getElementById('search-form').classList.remove('active');

}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 150,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   loop:true,
  });

  document.getElementById('bts').onclick=()=>{
    BroadcastChannel.innerHTML("Your Food is ordered!")
  }




