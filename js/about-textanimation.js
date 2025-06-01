document.addEventListener("DOMContentLoaded", function () {
    // About Page 
    const about = new SplitType('.about-ani', { types: 'chars' });

    gsap.from(about.chars, {
        opacity: 0,
        y: 25,
        duration: 1,
        ease: "power3.inOut",
        stagger: { amount: 0.25 },
    });
});