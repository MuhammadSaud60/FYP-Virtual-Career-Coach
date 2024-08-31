// links
const links = document.querySelector('.links');
const navIcon = document.querySelector('.navIcon');

navIcon.addEventListener('click', ()=>{
    links.classList.toggle('active')
})

// sign up links
const accountIcon = document.querySelector('.accountIcon');
const accountLinks = document.querySelector('.accountLinks');

accountIcon.addEventListener('click', ()=>{
    accountLinks.classList.toggle('active')
})



window.addEventListener('scroll', ()=>{
     const header = document.querySelector('header');
     if(window.scrollY > 30){
        header.classList.add('changeBg')
     }
     else{
        header.classList.remove('changeBg')
     }
})



const register = document.querySelector('.register-btn');
register.addEventListener('click', ()=>{
    window.location.href = 'HTML/registartion.html';
}) 
