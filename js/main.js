"use strict";
const openers = document.querySelectorAll(".menu__arrow");
document.addEventListener('click', function(event){
    if(event.target.closest('.burger')){
        this.body.classList.add('lock')
    }
    else if(event.target.closest('.close')){
        this.body.classList.remove('lock');
    }
})
if(openers.length>0){
    openers.forEach(opener => {
        opener.addEventListener('click', ()=>{
            opener.classList.toggle('active')
            const open = document.querySelector(opener.getAttribute('data-open'));
            open.classList.toggle('active');
        })
    })
}
let slider = new Swiper('.principles__slider', {
    wrapperClass: "principles__body",
    slideClass: "principles__slide",
   
    pagination:{
        el: ".principles__pagination",
        bulletClass: "principles__bullet",
        clickable: true,
        bulletActiveClass: "current",
    },
    init: false,
    on:{
        init: function(){
            checkSize2()
        },
        resize: function(){
            checkSize2()
        }
    },
    
});
let anotherSlider = new Swiper('.blog__slider',{
    wrapperClass: 'blog__body',
    slideClass: 'blog__item',
    pagination:{
        el: ".blog__pagination",
        bulletClass: "blog__bullet",
        clickable: true,
        bulletActiveClass: "current", 
    },
    init: false,
    on:{
        init: function(){
            checkSize()
        },
        resize: function(){
            checkSize()
        }
    },
    slidesPerView: 3,
})
slider.init();
anotherSlider.init();
function checkSize2(){
    if(window.innerWidth<900){
        anotherSlider.params.slidesPerView = 1;
        console.log(2)
    }
    else{
        anotherSlider.params.slidesPerView = 3;
    }
}
function checkSize(){
    if(window.innerWidth<900){
        anotherSlider.params.slidesPerView = 1;
        console.log(1)
    }
    else if(window.innerWidth<1200){
        anotherSlider.params.slidesPerView = 2;
    }
    else{
        anotherSlider.params.slidesPerView = 3;
    }
};
let scrolling = window.scrollY;
const header = document.querySelector('.header')
window.addEventListener('scroll', ()=>{
    if(window.scrollY>header.offsetHeight && window.scrollY>scrolling){
        header.style.top = "-100%";
    }
    else{
        header.style.top = "0";
    }
    scrolling = window.scrollY;
})