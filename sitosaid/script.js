document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once it has become visible
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll('.ribbon-section, .bowl-card, .menu-category, .sauces-section');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Add a slight stagger to bowl cards if they appear at the same time
    const bowlCards = document.querySelectorAll('.bowl-card');
    bowlCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    // Add a slight stagger to menu categories if they appear at the same time
    const menuCategories = document.querySelectorAll('.menu-category');
    menuCategories.forEach((category, index) => {
        // We only delay based on the column row roughly, or just small random delay
        category.style.transitionDelay = `${(index % 3) * 0.1}s`;
    });
});
