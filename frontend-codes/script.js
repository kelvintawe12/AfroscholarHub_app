// script.js
document.addEventListener("DOMContentLoaded", function () {
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
  
        if (window.scrollY > 300) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });


    // script.js
document.addEventListener("DOMContentLoaded", function () {
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
