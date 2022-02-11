// const toggleBtn = document.querySelector(".main-nav__hamburger");
// const mainNavEl = document.querySelector(".main-nav");
// toggleBtn.addEventListener("click", () => {
//     mainNavEl.classList.toggle("show");
// });

const checkboxEl = document.getElementById("navi-toggle");
const navLinksEl = document.querySelectorAll(".navigation__link");

navLinksEl.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        if (checkboxEl.checked) checkboxEl.checked = false;

        // get section to scroll to.
        const selected = link.getAttribute("href");
        // remove the leading # we're left with id of the section we want ot scroll to
        const cleanSelectedLink = selected.slice(1, selected.length);

        // scrolling the selected link into view
        document
            .getElementById(cleanSelectedLink)
            .scrollIntoView({ behavior: "smooth" });
    });
});
