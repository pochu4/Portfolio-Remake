document.addEventListener("DOMContentLoaded", function () {
    // Homepage 
    const headerName = new SplitType('.homepage-name', { types: 'chars' });

    gsap.from(headerName.chars, {
        opacity: 0,
        y: 25,
        duration: 0.5,
        ease: "power3.inOut",
        stagger: { amount: 0.25 },
    });

    // Homepage Hero Bio
    const headerBio = new SplitType('.homepage-bio-ani', { types: 'words' });

    gsap.from(headerBio.words, {
        opacity: 0,
        y: 25,
        duration: 0.75,
        delay: 1,
        ease: "power3.inOut",
        stagger: { amount: 1 },
    });
});


