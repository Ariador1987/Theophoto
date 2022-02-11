import "./components/navbar.js";
import "./components/counter.js";
import "./components/slider.js";
import TypeWriter from "./components/typewriter.js";

const btnAboutEl = document.querySelector(".btn--cta");
const aboutEl = document.querySelector(".about");

const gallerySectionEl = document.querySelector(".gallery");
const btnAnimatedEl = document.querySelector(".btn--animated");

const clientsSectionEl = document.getElementById("clientsServices");
const btnGoToClientsEl = document.getElementById("clientsBtn");

const footerYear = document.getElementById("footerYear");
const date = new Date();
footerYear.textContent = `${date.getFullYear()}`;

const linkEntireGalleryEl = document.querySelector(".btn--gallery-link");
// linkEntireGalleryEl.addEventListener("click", (e) => {
//     e.preventDefault();
//     const clicked = e.target.closest(".btn--gallery");
//     if (!clicked) return;

//     console.log(clicked);
// });

// Mislim da je ovo dobar pristup
// linkEntireGalleryEl.closest(".btn--gallery").addEventListener("click", (e) => {
//     e.preventDefault();
//     const link = linkEntireGalleryEl.href;
//     window.location = link;
//     window.location.reload();
// });

btnGoToClientsEl.addEventListener("click", (e) => {
    e.preventDefault();
    clientsSectionEl.scrollIntoView({ behavior: "smooth" });
});

// animate gallery button
const obsOptions = { root: null, threshold: 0.75 };
const obsCb = (entries, obs) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
        btnAnimatedEl.classList.add("animate-button");
        obs.disconnect();
    }
};
const btnObs = new IntersectionObserver(obsCb, obsOptions);
btnObs.observe(gallerySectionEl);

function init() {
    const txtElement = document.querySelector(".txt-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
}

btnAboutEl.addEventListener("click", () => {
    aboutEl.scrollIntoView({ behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", init);
