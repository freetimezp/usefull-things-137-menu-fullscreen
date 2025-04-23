
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.querySelector(".burger");
    let isOpen = false;

    const tl = gsap.timeline({ paused: true });

    tl.to(".block", {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        stagger: 0.075,
        ease: "power3.inOut"
    });

    tl.to(".menu-title, .menu-item", {
        duration: 0.3,
        opacity: 1,
        stagger: 0.05,
    }, "-=0.5");

    toggleButton.addEventListener("click", function () {
        if (isOpen) {
            tl.reverse();
        } else {
            tl.play();
        }

        isOpen = !isOpen;
    });
});




















