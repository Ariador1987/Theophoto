const slides = document.querySelectorAll(".slide");
btnLeftEl = document.querySelector(".slider__btn--left");
btnRightEl = document.querySelector(".slider__btn--right");

let currentSlide = 0;
const maxSlide = slides.length;

const goToSlide = (currSlide) => {
    slides.forEach((slide, idx) => {
        slide.style.transform = `translateX(${100 * (idx - currSlide)}%)`;
    });
};

const nextSlide = () => {
    if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }

    goToSlide(currentSlide);
};

const previousSlide = () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = maxSlide - 1;
    }
    goToSlide(currentSlide);
};

btnRightEl.addEventListener("click", nextSlide);
btnLeftEl.addEventListener("click", previousSlide);

goToSlide(0);
