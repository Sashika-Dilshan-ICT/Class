// Background Interactive Animation (Moves slightly with mouse)
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    
    // Only animate if screen is wide enough (not on mobile to save performance)
    if (window.innerWidth > 768) {
        shapes.forEach((shape, index) => {
            const speed = (index + 1) * 15;
            const xOffset = (window.innerWidth / 2 - e.clientX) * speed / 1000;
            const yOffset = (window.innerHeight / 2 - e.clientY) * speed / 1000;
            
            // Adjust the base animation float by adding mouse perspective
            shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    }
});

// Touch support for interactive background
document.addEventListener('touchmove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const touch = e.touches[0];
    
    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 10;
        const xOffset = (window.innerWidth / 2 - touch.clientX) * speed / 1000;
        const yOffset = (window.innerHeight / 2 - touch.clientY) * speed / 1000;
        
        shape.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
    });
}, { passive: true });

// Testimonials Slider Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('next-slide');
const prevBtn = document.getElementById('prev-slide');

function showSlide(index) {
    if(!slides.length) return;

    // Remove active class from all slides
    slides.forEach(slide => slide.classList.remove('active'));
    
    // Handle wrap-around
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    
    // Set new active slide
    slides[currentSlide].classList.add('active');
}

// Button event listeners
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        showSlide(currentSlide + 1);
        resetTimer();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        showSlide(currentSlide - 1);
        resetTimer();
    });
}

// Auto slide functionality
let slideTimer = setInterval(() => {
    showSlide(currentSlide + 1);
}, 6000);

function resetTimer() {
    clearInterval(slideTimer);
    slideTimer = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 6000);
}

// Add a solid background to the transparent navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 23, 42, 0.9)';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.6)';
        navbar.style.boxShadow = 'none';
    }
});
