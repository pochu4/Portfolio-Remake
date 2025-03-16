document.addEventListener("DOMContentLoaded", function () {
    // Works Page
    const works = new SplitType('.works-ani', { types: 'chars' });

    gsap.from(works.chars, {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: "power3.inOut",
        stagger: { amount: 0.25 },
    });
});