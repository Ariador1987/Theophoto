const counters = document.querySelectorAll(".counter__item--number");
const counterEl = document.querySelector(".counter");
let wasCounted = false;

const obsCb = (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting && !wasCounted) {
        startCounting();
        observer.disconnect();
    }
};
const obsOptions = {
    root: null,
    threshold: 0.45,
};

const observer = new IntersectionObserver(obsCb, obsOptions);
observer.observe(counterEl);

const startCounting = () => {
    counters.forEach((counter) => {
        counter.textContent = "0";

        const updateCounter = () => {
            const target = +counter.getAttribute("data-target");

            const c = +counter.textContent;

            const increment = target / 1000;

            if (c < target) {
                counter.textContent = `${Math.ceil(c + increment)}`;
                setTimeout(updateCounter, 1);
            } else {
                counter.textContent = target + "+";
            }
        };

        updateCounter();
        wasCounted = true;
    });
};
