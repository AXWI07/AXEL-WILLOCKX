
document.addEventListener("DOMContentLoaded", function() {
    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navmenu = document.querySelector('.navbar-nav');

    hamburger.addEventListener('click', () => {
        navmenu.classList.toggle('show');
    });
});


// Scroll-triggered animations
const elementsToReveal = document.querySelectorAll(
    '.intro, .brand-package, .brand-text, .projects, .intro-btn, .project-1'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'simpleFadeIn 1s ease-in forwards';
            entry.target.style.opacity = '1';
        }
    });
}, {
    threshold: 0.2,
    rootMargin: '0px 0px 10px 0px'
});

elementsToReveal.forEach(element => {
    observer.observe(element);
});

// Scroll-triggered line animation
document.addEventListener("scroll", function() {
    const vertline = document.querySelector(".vertline");
    const triggerPoint = window.innerHeight * 0.05; 

    if (window.scrollY > triggerPoint) {
        vertline.style.height = "340px"; 
        vertline.style.transition = "height 1s ease-in-out"; 
    }
});

// Scroll-triggered line animation for vertline2
document.addEventListener("scroll", function() {
    const vertline = document.querySelector(".vertline2");
    const brandText = document.querySelector(".brand-text");

    
    const brandTop = brandText.getBoundingClientRect().top;
    
    // ZORGT HOE SNEL DE ANIMATIE KOMT NA HET VOORBIJ SCROLLEN
    const threshold = 220;

    
    if (brandTop <= threshold) {
        vertline.style.height = "299px";
        vertline.style.transition = "height 1s ease-in-out";
    }
});

// Scroll-triggered line animation for vertline3
document.addEventListener("scroll", function() {
    const vertline = document.querySelector(".vertline3");
    const introBtn = document.querySelector(".intro-btn");

    const introBtnTop = introBtn.getBoundingClientRect().top;

    // ZORGT HOE SNEL DE ANIMATIE KOMT NA HET VOORBIJ SCROLLEN
    const threshold = window.innerHeight * 0.55;

    if (introBtnTop <= threshold) {
        vertline.style.height = "340px";
        vertline.style.transition = "height 1s ease-in-out";
    }
});









