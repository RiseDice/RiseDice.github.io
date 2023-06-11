var hamburger = document.querySelector(".Hamburger");
var mobile_menu = document.querySelector(".Mobile-Menu");

var link_1 = document.getElementById("link_1");
var link_2 = document.getElementById("link_2");
var link_3 = document.getElementById("link_3");
var link_4 = document.getElementById("link_4");

hamburger.addEventListener('click', ()=>{

    mobile_menu.classList.toggle("is-open");
})

link_1.addEventListener('click', ()=>{

    mobile_menu.classList.toggle("is-open");
})

link_2.addEventListener('click', ()=>{

    mobile_menu.classList.toggle("is-open");
})

link_3.addEventListener('click', ()=>{

    mobile_menu.classList.toggle("is-open");
})

link_4.addEventListener('click', ()=>{

    mobile_menu.classList.toggle("is-open");
})

