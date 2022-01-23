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

//make home transparent
const home=document.querySelector('.home_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
  home.style.opacity = 1-window.scrollY / homeHeight;
});

//arrow-up button
document.addEventListener('scroll', ()=>{
  const arrowUp=document.querySelector('.arrow-up');
if(window.scrollY > homeHeight /2 ){
  arrowUp.classList.add('visible');
}else {
  arrowUp.classList.remove('visible');
}
});

const arrowUp = document.querySelector('.arrow-up');
arrowUp.addEventListener('click', ()=>{
  scrollIntoView('#home');
})

// Projects
const workBtnContainer = document.querySelector('.work_categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e)=>{
  const filter= e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if(filter == null){
    return; 
  }
  projectContainer.classList.add('anime-out');
  setTimeout(()=>{
    projects.forEach((project)=>{
      //console.log(project.dataset.type);
      if(filter === '*' || filter === project.dataset.type){
        project.classList.remove('invisible');
      }else{
        project.classList.add('invisible');
      }
    });
    projectContainer.classList.remove('anime-out');
  }, 300);

});

function scrollIntoView(selector){
  const scrollTo=document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: 'smooth'});
}