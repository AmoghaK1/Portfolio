// Blur effect animation - removes blur from top to bottom on page load
document.addEventListener('DOMContentLoaded', function() {
    // Define all card selectors
    const cardSelectors = [
        '.name-box',
        '.tagline-box', 
        '.location-box',
        '.resume-box',
        '.theme-toggle-box',
        '.social-box',
        '.techstack-box',
        '.email-box',
        '.experience-box',
        '.project-box1',
        '.project-box2',
        '.p-s-box'
    ];
    
    // Get all card elements
    const allCards = [];
    cardSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => allCards.push(element));
    });
    
    // Sort cards by their vertical position (top to bottom)
    allCards.sort((a, b) => {
        const rectA = a.getBoundingClientRect();
        const rectB = b.getBoundingClientRect();
        return rectA.top - rectB.top;
    });
    
    // Apply initial blur to all cards
    allCards.forEach(card => {
        card.style.filter = 'blur(8px)';
        card.style.transition = 'filter 0.8s ease-out';
    });
      // Remove blur progressively from top to bottom (with 0.3s initial hold)
    allCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.filter = 'blur(0px)';
        }, 300 + (index * 130)); // 300ms initial hold + 130ms delay between each card
    });
    
    // Add hover effect to all cards - minimal scale increase
    allCards.forEach(card => {
        // Set initial transform and transition
        card.style.transform = 'scale(1)';
        card.style.transition = 'filter 0.8s ease-out, transform 0.2s ease-out';
        
        // Add hover event listeners
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)'; // Very minimal scale increase (2%)
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)'; // Return to normal size
        });
    });
    });