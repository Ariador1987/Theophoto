const checkboxEl = document.getElementById("navi-toggle");
const navLinksEl = document.querySelectorAll(".navigation__link");

navLinksEl.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        if (checkboxEl.checked) checkboxEl.checked = false;

        // get section ID to scroll to from href attr of link
        let selected = link.getAttribute("href");
        // all paths lead to Rome
        if (window.location.href.includes("/gallery.html")) {
            window.location.href = "/" + selected;
        }

        // remove the leading # we're left with id of the section we want ot scroll to
        const cleanSelectedLink = selected.slice(1, selected.length);

        // scrolling the selected link into view
        document
            .getElementById(cleanSelectedLink)
            .scrollIntoView({ behavior: "smooth" });
    });
});
