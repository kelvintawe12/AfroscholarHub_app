document.addEventListener("DOMContentLoaded", function () {
    // Toggle Navigation
    const menuToggle = document.querySelector(".menu-toggle");
    const navList = document.querySelector(".nav-list");

    menuToggle.addEventListener("click", () => {
        navList.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });

    // Back to Top Button
    const backToTop = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });

    // Testimonial Slider
    const slider = document.querySelector(".testimonials-slider");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
});
