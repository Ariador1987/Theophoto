const slides = document.querySelectorAll(".slide");
const btnLeftEl = document.querySelector(".slider__btn--left");
const btnRightEl = document.querySelector(".slider__btn--right");
const dotsContainerEl = document.querySelector(".dots");

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
    updateActiveDot(currentSlide);
};

const previousSlide = () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = maxSlide - 1;
    }
    goToSlide(currentSlide);
    updateActiveDot(currentSlide);
};

const createDots = () => {
    slides.forEach((_, idx) => {
        dotsContainerEl.insertAdjacentHTML(
            "beforeend",
            `<button class="dots__dot" data-slide="${idx}"></button>`
        );
    });
};

const updateActiveDot = (currentSlide) => {
    const dots = document.querySelectorAll(".dots__dot");
    dots.forEach((dot) => {
        dot.classList.remove("dots__dot--active");
    });

    document
        .querySelector(`.dots__dot[data-slide="${currentSlide}"]`)
        .classList.add("dots__dot--active");
};

btnRightEl.addEventListener("click", nextSlide);
btnLeftEl.addEventListener("click", previousSlide);
dotsContainerEl.addEventListener("click", (e) => {
    if (e.target.classList.contains("dots__dot")) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        updateActiveDot(slide);
    }
});

goToSlide(0);
createDots();
updateActiveDot(0);
