

let index = 0;

const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function updateSlide(){
    slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide(){
    index = (index + 1) % totalSlides;
    updateSlide();
}

nextBtn.addEventListener('click', ()=>{
    nextSlide()
    updateSlide();
})

prevBtn.addEventListener('click', ()=>{
    index = (index-1 + totalSlides) % totalSlides;
    updateSlide();
})


setInterval(nextSlide, 5000)