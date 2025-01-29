// Typed.js Initialization
const typed = new Typed('.text', {
    strings: ['Web Developer', 'UI/UX Designer', 'Machine Learning Enthusiast'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Progress Bar Animation
const progressBars = document.querySelectorAll('.progress');
progressBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = width;
    }, 500);
});

// Radial Bar Animation
const radialBars = document.querySelectorAll('.radial-bar');
radialBars.forEach(bar => {
    const percentage = bar.getAttribute('data-percentage');
    bar.style.background = `conic-gradient(#0ef ${percentage}%, #333 ${percentage}% 100%)`;
});
