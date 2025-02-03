gsap.to(".scrolldown-icon ion-icon", {
    y: -10,
    duration: 0.5,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut"
});

// Register scroll to plugin
gsap.registerPlugin(ScrollToPlugin);


document.getElementById("scroll-down").addEventListener("click", function () {
    gsap.to(window, {
        duration: 1, 
        scrollTo: "#next",
        ease: "power2.inOut" 
    });
});
