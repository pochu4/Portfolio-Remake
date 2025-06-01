if (window.visualViewport && /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
    window.visualViewport.addEventListener("resize", function () {
        let overlay = document.querySelector(".overlay2");
        if (window.visualViewport.scale > 1) {
            overlay.style.width = "0"; 
        } else {
            overlay.style.width = ""; 
        }
    });
}