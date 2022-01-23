'use strict';

// Make navbar 
const navbar=document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
  //console.log(window.scrollY);
  //console.log(`navbarHeight: ${navbarHeight}`);
  if(window.scrollY > navbarHeight){
    navbar.classList.add('navbar--dark');
  } else{
    navbar.classList.remove('navbar--dark');
  }
})

//navbar scrolling

const navbarMenu = document.querySelector('.navbar_menu');
navbarMenu.addEventListener('click', (event) => {
  //console.log(event.target.dataset.link);
  const target = event.target;
  const link= target.dataset.link;
  if(link == null){
    return; 
  }

  //console.log(event.target.dataset.link);
  scrollIntoView(link);
});

//contact me move
const contact = document.querySelector('.home_contact');
contact.addEventListener('click', (event)=>{
  scrollIntoView('#contact');
});

function scrollIntoView(selector){
  const scrollTo=document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}

//make home transparent
const home=document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
  home.style.opacity = 1-window.scrollY / homeHeight;
});