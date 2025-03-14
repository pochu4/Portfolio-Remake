// Homepage 
const headerName = new SplitType('.homepage-name', { types: 'chars' })

gsap.from(headerName.chars, {
    opacity: 0,
    y: 25,
    duration: 1,
    ease: "power3.inOut",
    stagger: { amount: 0.25 },
})

// Homepage Hero Bio
const headerBio = new SplitType('.homepage-bio-ani', { types: 'words' })

gsap.from(headerBio.words, {
    opacity: 0,
    y: 25,
    duration: 1,
    delay: 1,
    ease: "power3.inOut",
    stagger: { amount: 1.5 },
})

// Homepage - Direction
const direction = new SplitType('.homepage-mission-ani', { types: 'words' })

gsap.from(direction.words, {
    opacity: 0,
    y: 25,
    duration: 1,
    ease: "power3.inOut",
    stagger: { amount: 0.5 },
    scrollTrigger: {
        trigger: '.mission-intro',
        start: 'top bottom',
        end: 'bottom 10%',
        toggleActions: 'play none none reverse',
    },
})

// About Page 
const about = new SplitType('.about-ani', { types: 'chars' })

gsap.from(about.chars, {
    opacity: 0,
    y: 25,
    duration: 1,
    ease: "power3.inOut",
    stagger: { amount: 0.25 },
})

//Works Page
const works = new SplitType('.works-ani', { types: 'chars' })

gsap.from(works.chars, {
    opacity: 0,
    y: 25,
    duration: 1,
    ease: "power3.inOut",
    stagger: { amount: 0.25 },
})


