// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('.afternic').href = `https://www.afternic.com/domain/${window.location.hostname}/`;
    document.querySelector('.namecheap').href = `https://www.namecheap.com/market/buynow/${window.location.hostname}/`;
    
    // navigation bar
    anime({
        targets: '.nav-item',
        translateY: [20, 0],
        opacity: [0, 1],
        easing: 'easeOutExpo',
        delay: anime.stagger(100)
    });

    // buy now
    anime({
        targets: '.buynow,.domain,.domainDisc',
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 1800,
        delay: anime.stagger(100),
        easing: 'easeOutExpo'
    });
    anime({
        targets: '.domains',
        opacity: [0, 1],
        translateY: [60, 0],
        duration: 1500,
        delay: anime.stagger(100),
        easing: 'easeOutExpo'
    });

    // Hero section text animation
    anime({
        targets: '.hero-section h1, .hero-section p, .hero-buttons',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000,
        delay: anime.stagger(200),
        easing: 'easeOutExpo'
    });

    // Hero image animation
    anime({
        targets: '.hero-image',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 1000,
        delay: 600,
        easing: 'easeOutExpo'
    });

    // Code editor lines animation
    anime({
        targets: '.code-line',
        opacity: [0, 1],
        translateX: [-20, 0],
        duration: 800,
        delay: anime.stagger(100, { start: 1200 }),
        easing: 'easeOutExpo'
    });

    // Initialize scroll animations
    const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');

    function checkIfInView() {
        animateOnScrollElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animated');
            }
        });
    }

    // Check on load and scroll
    window.addEventListener('load', checkIfInView);
    window.addEventListener('scroll', checkIfInView);

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
