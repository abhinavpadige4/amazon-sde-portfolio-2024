// Main JavaScript Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Navbar scroll effect (if we had a fixed navbar)
    // For now, we'll add scroll-triggered animations
    
    // Animate elements on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.about-text, .about-image, .skill-category, .project-card, .timeline-item, .contact-info, .contact-form');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100 && elementBottom > 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize elements for animation
    const elementsToAnimate = document.querySelectorAll('.about-text, .about-image, .skill-category, .project-card, .timeline-item, .contact-info, .contact-form');
    
    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Run animation check on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });
    
    // Add active section highlighting in navigation (if we had a nav)
    // For now, we'll add a simple progress indicator
    
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '3px';
    progressBar.style.background = 'var(--primary-color)';
    progressBar.style.width = '0%';
    progressBar.style.zIndex = '999';
    progressBar.style.transition = 'width 0.3s ease';
    document.body.appendChild(progressBar);
    
    function updateProgressBar() {
        const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (windowScroll / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    }
    
    window.addEventListener('scroll', updateProgressBar);
    
    // Add particle effect to hero background (optional enhancement)
    // This would require additional canvas or SVG elements
    
    // Add keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        // Close mobile menu with Escape (if we had one)
        // Trigger form submission with Enter in certain contexts
    });
    
    // Print optimization
    window.addEventListener('beforeprint', function() {
        document.documentElement.classList.remove('dark-theme');
    });
    
    window.addEventListener('afterprint', function() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark-theme');
        }
    });
});