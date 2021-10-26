/*===== SHOW NAVBAR =====*/
var tog = document.querySelector('#navbar__toggle');
var nav = document.querySelector('.navbar__nav');

tog.onclick = () =>{
    tog.classList.toggle('fa-times');
    nav.classList.toggle('active');
}
window.onscroll = () =>{
    tog.classList.remove('fa-times');
    nav.classList.remove('active');
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1800,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.introduce__content__title',{}); 
sr.reveal('.introduce__content__des',{delay: 200}); 
sr.reveal('.introduce__content__btn',{delay: 300}); 
sr.reveal('.logo',{delay: 400}); 
/*SCROLL MENU*/
sr.reveal('.menu__title',{}); 
sr.reveal('.food__box',{delay: 200}); 
/*SCROLL ADDRESS*/
sr.reveal('.address__title',{}); 
sr.reveal('.info__icon',{delay: 100});
/*SCROLL CONTACT*/
sr.reveal('.element__title',{}); 
sr.reveal('.element__content',{delay: 200});  
 