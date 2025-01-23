const carouselWrapper = document.querySelector('.carousel-wrapper');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselWrapper.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

setInterval(() => {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}, 5000); 
